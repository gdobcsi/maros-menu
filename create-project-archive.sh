
#!/usr/bin/env bash

set -euo pipefail

# The archive will be created one directory above the project.
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_NAME="$(basename "$PROJECT_DIR")"
PARENT_DIR="$(dirname "$PROJECT_DIR")"

TIMESTAMP="$(date +%Y%m%d-%H%M%S)"
ARCHIVE="$PARENT_DIR/${PROJECT_NAME}-full-review-${TIMESTAMP}.zip"

echo "Creating project archive..."
echo "Project: $PROJECT_NAME"
echo

cd "$PROJECT_DIR"

zip -r "$ARCHIVE" . \
  -x "node_modules/*" \
     "*/node_modules/*" \
     "build/*" \
     "*/build/*" \
     "dist/*" \
     "*/dist/*" \
     ".git/*" \
     "*/.git/*" \
     ".env" \
     ".env.*" \
     "*/.env" \
     "*/.env.*" \
     "*.log" \
     "*.tmp" \
     ".DS_Store" \
     "*/.DS_Store" \
     "coverage/*" \
     "*/coverage/*" \
     ".cache/*" \
     "*/.cache/*" \
     "create-project-archive.sh"

echo
echo "Archive created successfully:"
echo "$ARCHIVE"
echo
echo "Archive size:"
du -h "$ARCHIVE"
