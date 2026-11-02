
#!/usr/bin/env bash

set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TEMP_DIR="$(mktemp -d)"
ZIP_FILE="$PROJECT_DIR/maros-menu-components-review.zip"

FILES=(
  "src/App.jsx"
  "src/components/Header/Header.jsx"
  "src/components/LanguageSelector/LanguageSelector.jsx"
  "src/components/Menu/Menu.jsx"
  "src/components/OpeningTimes/OpeningTimes.jsx"
  "src/components/Phone/Phone.jsx"
  "src/components/StickyUpButton/StickyUpButton.jsx"
  "src/compositions/Footer/Footer.jsx"
  "src/compositions/PhoneAndOpening/PhoneAndOpening.jsx"
)

for FILE in "${FILES[@]}"; do
  SOURCE="$PROJECT_DIR/$FILE"
  DEST_DIR="$TEMP_DIR/$(dirname "$FILE")"

  if [[ -f "$SOURCE" ]]; then
    mkdir -p "$DEST_DIR"
    cp "$SOURCE" "$DEST_DIR/"
    echo "OK: $FILE"
  else
    echo "FIGYELEM: Nem található: $FILE"
  fi
done

rm -f "$ZIP_FILE"

(
  cd "$TEMP_DIR"
  zip -qr "$ZIP_FILE" .
)

rm -rf "$TEMP_DIR"

echo
echo "Komponensek összegyűjtve!"
echo "ZIP: $ZIP_FILE"
