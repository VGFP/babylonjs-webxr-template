import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { readFileSync, readdirSync, statSync, existsSync } from "fs";
import { join, relative, extname } from "path";
import { z } from "zod";

const DOCS_ROOT = resolveDocsRoot();
const SEARCH_INDEX = buildSearchIndex();

function resolveDocsRoot() {
  const fromEnv = process.env.BABYLONJS_DOCS_ROOT;
  if (fromEnv) return fromEnv;
  const candidates = [
    join(process.cwd(), "docs-for-mcp"),
    join(process.cwd(), "..", "docs-for-mcp"),
  ];
  for (const c of candidates) {
    if (existsSync(c)) return c;
  }
  throw new Error(
    "Cannot find docs-for-mcp directory. Set BABYLONJS_DOCS_ROOT env var."
  );
}

function buildSearchIndex() {
  const entries = [];
  const maxContentPreview = 300;

  function walk(dir, prefix = "") {
    let items;
    try {
      items = readdirSync(dir);
    } catch {
      return;
    }
    for (const item of items) {
      const fullPath = join(dir, item);
      const rel = prefix ? `${prefix}/${item}` : item;
      let stat;
      try {
        stat = statSync(fullPath);
      } catch {
        continue;
      }
      if (stat.isDirectory()) {
        walk(fullPath, rel);
      } else if (extname(item) === ".md") {
        const title = item.replace(/\.md$/, "");
        let content = "";
        try {
          const raw = readFileSync(fullPath, "utf8");
          const noFrontmatter = raw.replace(/^---[\s\S]*?---\n*/, "");
          content = noFrontmatter.slice(0, maxContentPreview);
          const headingMatch = noFrontmatter.match(/^#\s+(.+)$/m);
          if (headingMatch) {
            entries.push({ rel, title: headingMatch[1], content, heading: headingMatch[1] });
          } else {
            entries.push({ rel, title, content });
          }
        } catch {
          entries.push({ rel, title, content: "" });
        }
      }
    }
  }

  walk(DOCS_ROOT);
  return entries;
}

function searchDocs(query, limit = 20) {
  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
  if (terms.length === 0) return [];

  const scored = SEARCH_INDEX.map((entry) => {
    const text = `${entry.title} ${entry.content}`.toLowerCase();
    let score = 0;
    for (const term of terms) {
      const titleIdx = entry.title.toLowerCase().indexOf(term);
      if (titleIdx !== -1) {
        score += titleIdx === 0 ? 10 : 5;
      }
      const contentCount = (text.match(new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi")) || []).length;
      score += Math.min(contentCount, 20);
      if (entry.heading && entry.heading.toLowerCase().includes(term)) {
        score += 8;
      }
    }
    return { ...entry, score };
  });

  return scored
    .filter((e) => e.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

function readDoc(relPath) {
  const fullPath = join(DOCS_ROOT, relPath);
  if (!fullPath.startsWith(DOCS_ROOT)) {
    return { error: "Path traversal not allowed" };
  }
  if (!existsSync(fullPath)) {
    return { error: `File not found: ${relPath}` };
  }
  try {
    const raw = readFileSync(fullPath, "utf8");
    return { content: raw, path: relPath };
  } catch (e) {
    return { error: `Failed to read file: ${e.message}` };
  }
}

function listDocs(dirPath = "", prefix = "") {
  const target = dirPath ? join(DOCS_ROOT, dirPath) : DOCS_ROOT;
  if (!target.startsWith(DOCS_ROOT)) {
    return { error: "Path traversal not allowed" };
  }
  if (!existsSync(target)) {
    return { error: `Directory not found: ${dirPath}` };
  }
  let items;
  try {
    items = readdirSync(target);
  } catch (e) {
    return { error: `Failed to list directory: ${e.message}` };
  }
  const result = [];
  for (const item of items) {
    const fullPath = join(target, item);
    const rel = dirPath ? `${dirPath}/${item}` : item;
    let stat;
    try {
      stat = statSync(fullPath);
    } catch {
      continue;
    }
    if (stat.isDirectory()) {
      const mdCount = countMdFiles(fullPath);
      result.push({ name: item, type: "directory", path: rel, fileCount: mdCount });
    } else if (extname(item) === ".md") {
      result.push({ name: item, type: "file", path: rel });
    }
  }
  return { items: result };
}

function countMdFiles(dir) {
  let count = 0;
  try {
    const items = readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
      if (item.isDirectory()) {
        count += countMdFiles(join(dir, item.name));
      } else if (extname(item.name) === ".md") {
        count++;
      }
    }
  } catch {}
  return count;
}

const server = new McpServer({
  name: "babylonjs-docs",
  version: "1.0.0",
});

server.tool(
  "search_docs",
  "Search BabylonJS documentation (API reference and guides/examples). Returns matching documents ranked by relevance.",
  {
    query: z.string().describe("Search query: class name, method, feature, concept (e.g. 'Scene', 'WebXR', 'shadow', 'camera follow')"),
    limit: z.number().optional().describe("Max results to return (default 20)"),
  },
  async ({ query, limit }) => {
    const results = searchDocs(query, limit || 20);
    if (results.length === 0) {
      return {
        content: [{ type: "text", text: `No results found for "${query}".` }],
      };
    }
    const text = results
      .map(
        (r, i) =>
          `${i + 1}. [${r.score.toFixed(1)}] ${r.heading || r.title}\n   Path: ${r.rel}\n   Preview: ${r.content.slice(0, 150).replace(/\n/g, " ")}...`
      )
      .join("\n\n");
    return {
      content: [{ type: "text", text: `Found ${results.length} results for "${query}":\n\n${text}` }],
    };
  }
);

server.tool(
  "read_doc",
  "Read the full content of a specific BabylonJS documentation file.",
  {
    path: z.string().describe("File path relative to docs root (e.g. 'api/core/src/classes/Scene.md' or 'examples/features/introductionToFeatures/chap1/first_scene.md')"),
  },
  async ({ path }) => {
    const result = readDoc(path);
    if (result.error) {
      return {
        content: [{ type: "text", text: `Error: ${result.error}` }],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: result.content }],
    };
  }
);

server.tool(
  "list_docs",
  "List files and directories in the BabylonJS documentation. Use to explore available documentation.",
  {
    path: z.string().optional().describe("Directory path to list (omit for root). E.g. 'api', 'examples/features', 'api/core/src/classes'"),
  },
  async ({ path }) => {
    const result = listDocs(path || "");
    if (result.error) {
      return {
        content: [{ type: "text", text: `Error: ${result.error}` }],
        isError: true,
      };
    }
    const lines = result.items.map((item) => {
      if (item.type === "directory") {
        return `  📁 ${item.name}/ (${item.fileCount} files)`;
      }
      return `  📄 ${item.name}`;
    });
    return {
      content: [
        {
          type: "text",
          text: `Contents of /${path || ""}:\n${lines.join("\n")}\n\nTotal: ${result.items.length} items`,
        },
      ],
    };
  }
);

async function main() {
  console.error(`[babylonjs-docs] Serving docs from: ${DOCS_ROOT}`);
  console.error(`[babylonjs-docs] Indexed ${SEARCH_INDEX.length} documents`);
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((err) => {
  console.error("[babylonjs-docs] Fatal:", err);
  process.exit(1);
});
