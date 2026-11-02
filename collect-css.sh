
#!/usr/bin/env bash

set -euo pipefail

# A projekt gyökérkönyvtára
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Ideiglenes gyűjtőkönyvtár
TEMP_DIR="$(mktemp -d)"

# A ZIP fájl neve
ZIP_FILE="$PROJECT_DIR/maros-menu-css-review.zip"

# A szükséges fájlok és könyvtárak
FILES=(
  "src/css"
  "src/index.css"
  "src/components/Header/Header.css"
  "src/components/LanguageSelector/LanguageSelector.css"
  "src/components/Menu/Menu.css"
  "src/components/OpeningTimes/OpeningTimes.css"
  "src/components/Phone/Phone.css"
  "src/components/StickyUpButton/StickyUpButton.css"
  "src/compositions/Footer/Footer.css"
  "src/compositions/PhoneAndOpening/PhoneAndOpening.css"
)

# A fájlok összegyűjtése
for ITEM in "${FILES[@]}"; do
  if [[ -e "$PROJECT_DIR/$ITEM" ]]; then
    mkdir -p "$TEMP_DIR/$(dirname "$ITEM")"
    cp -r "$PROJECT_DIR/$ITEM" "$TEMP_DIR/$(dirname "$ITEM")/"
  else
    echo "FIGYELEM: Nem található: $ITEM"
  fi
done

# A megjegyzések hozzáadása, ha léteznek
if [[ -f "$PROJECT_DIR/src/css/___notes.txt" ]]; then
  cp "$PROJECT_DIR/src/css/___notes.txt" "$TEMP_DIR/src/css/"
fi

# ZIP elkészítése
rm -f "$ZIP_FILE"

(
  cd "$TEMP_DIR"
  zip -qr "$ZIP_FILE" .
)

# Ideiglenes könyvtár törlése
rm -rf "$TEMP_DIR"

echo
echo "CSS fájlok összegyűjtve!"
echo "ZIP: $ZIP_FILE"
