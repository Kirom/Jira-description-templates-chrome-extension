# String Generator Chrome Extension - Installation Guide

## Installation Steps

### Step 1: Download the Extension Files
- The extension files are located in the `chrome_extension` folder in this repository.
- Make sure you have all these files:
  - `manifest.json` - Extension configuration
  - `popup.html` - Extension popup interface
  - `popup.js` - Extension functionality
  - `images/icon16.png` - Extension icon (16x16)
  - `images/icon48.png` - Extension icon (48x48)
  - `images/icon128.png` - Extension icon (128x128)
  - `README.md` - General information

### Step 2: Install the Extension in Chrome
1. Open Google Chrome browser on your computer.
2. Type `chrome://extensions/` in the address bar and press Enter.
3. In the top-right corner of the Extensions page, toggle on "Developer mode".
4. Click the "Load unpacked" button that appears in the top-left corner.
5. Navigate to and select the `chrome_extension` folder where you saved the extension files.
6. The extension should now be installed and appear in your extensions list.

### Step 3: Pin the Extension to Your Toolbar (Optional)
1. Click on the puzzle piece icon in the Chrome toolbar to see your extensions.
2. Find "String Generator" in the list.
3. Click the pin icon to pin it to your toolbar for easy access.

## Using the Extension

### Generate "Merged to develop" Message
1. Click on the extension icon in your toolbar to open the popup.
2. Click the "Merged to develop" button.
3. The text `Viktor DD.MM.YYYY: Merged to develop.` (with today's date) will be copied to your clipboard.
4. A green confirmation message will appear briefly.

### Generate "Release" Message
1. Click on the extension icon in your toolbar to open the popup.
2. In the text input field, enter the release version (e.g., `0.0.26`).
3. Click the "Release" button.
4. The text `Viktor DD.MM.YYYY: Release 0.0.26.` (with today's date) will be copied to your clipboard.
5. A green confirmation message will appear briefly.
6. Your entered release version will be automatically saved and restored the next time you open the extension.

## Troubleshooting

- **Extension not showing up in toolbar**: Make sure it's pinned by clicking the puzzle piece icon and pinning the extension.
- **Copy functionality not working**: Make sure your Chrome browser has permission to write to the clipboard.
- **Extension doesn't load**: Check that all files are present in the folder and that the extension is enabled in `chrome://extensions/`.
- **Icon not displaying correctly**: Make sure all three icon files (16x16, 48x48, and 128x128) are present in the images folder.

## Updating the Extension

If you make changes to the extension code:
1. Go to `chrome://extensions/`.
2. Find the String Generator extension.
3. Click the refresh icon (↻) on the extension's card.
4. The updated extension will be loaded with your changes. 