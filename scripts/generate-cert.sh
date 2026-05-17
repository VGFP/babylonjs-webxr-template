#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

KEY_FILE="$PROJECT_DIR/.certs/localhost.key"
PEM_FILE="$PROJECT_DIR/.certs/localhost.pem"

if [ -f "$KEY_FILE" ] && [ -f "$PEM_FILE" ]; then
  echo "Certificates already exist at .certs/ — skipping."
  exit 0
fi

echo "Generating self-signed HTTPS certificate for localhost..."

mkdir -p "$PROJECT_DIR/.certs"

openssl req -x509 -newkey rsa:2048 \
  -keyout "$KEY_FILE" \
  -out "$PEM_FILE" \
  -days 365 \
  -nodes \
  -subj "/CN=localhost" \
  -addext "subjectAltName=DNS:localhost,IP:127.0.0.1,IP:0.0.0.0"

chmod 600 "$KEY_FILE"
chmod 644 "$PEM_FILE"

echo "Done: .certs/localhost.key + .certs/localhost.pem"
