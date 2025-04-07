# String Generator Chrome Extension

A simple Chrome extension that generates formatted strings and copies them to your clipboard with a single click.

## Features

- **Merged to develop** button: Generates "Viktor DD.MM.YYYY: Merged to develop." text
- **Release** button: Generates "Viktor DD.MM.YYYY: Release X.X.X." text based on your input
- **Input Persistence**: Automatically saves and restores your last used release version
- **Custom Icon**: Clean and professional "SG" icon in the Chrome toolbar

## Installation Instructions

1. Download or clone this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top-right corner.
4. Click on "Load unpacked" button.
5. Select the `chrome_extension` folder from this repository.
6. The extension should now appear in your extensions list and be ready to use.

## Usage

1. Click on the extension icon in your Chrome toolbar to open the popup.
2. Click the "Merged to develop" button to generate and copy the merge message.
3. For a release message, enter the version number in the input field and click the "Release" button.
4. A success message will appear briefly when text is copied to your clipboard.
5. Your last entered release version will be automatically saved and restored when you reopen the extension. 