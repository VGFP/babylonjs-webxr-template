.PHONY: setup-ai help

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-35s\033[0m %s\n", $$1, $$2}'

# ---------------------------------------------------------------------------
# AI coding tools – Claude Code / OpenCode / Kilo Code + BabylonJS MCP
# ---------------------------------------------------------------------------
setup-ai: ## Install AI coding tools (args: all|claude|opencode|kilo) with BabylonJS MCP
	@bash scripts/setup-ai-tools.sh $(filter-out $@,$(MAKECMDGOALS))

# allow arbitrary args to pass through to the script
ifeq ($(filter setup-ai,$(MAKECMDGOALS)),setup-ai)
  ifneq ($(filter-out setup-ai,$(MAKECMDGOALS)),)
    $(filter-out setup-ai,$(MAKECMDGOALS)):
	@:
  endif
endif
