# UnContentWarning

[![Buy me a coffee!](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/mI8stwU4P)

`Version 0.1.0`

## Description
A simple user-script for the Mastodon Web UI which adds a toggle button to unhide/hides all content warning text by default.

## Installation

### 1. Install a user script manager for your browser

Choose from one of these options for your browser (more options coming). The script is tested in Violentmonkey so your milage may vary with the others.

| Browser | Options |
|---------|---------|
| Chrome | [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) or [Violentmonkey](https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnln) |
| Firefox | [Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/), [Tampermonkey](https://addons.mozilla.org/firefox/addon/tampermonkey/) or [Violentmonkey](https://addons.mozilla.org/firefox/addon/violentmonkey/)|


### 2. Install the script

### 3. Modify the script for your instance URL

In this early version of the script, you'll have to install the script and then edit the `@match` line to match your instance's URL through Tamper/Grease/Violentmonkey's script editor.

For example, if you browse your instance at https://icosohedron.web/ then you'd change the top of the script to read:

```
// ==UserScript==
// @name unContentWarn
// @description Adds a button to toggle the hiding of content warning text content.
// @match https://icosohedron.web/web/* 
```

## FAQ

Ask some questions!

## Contact

Limited support available at `@Fumon@cybre.space`

[![Buy me a coffee!](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/mI8stwU4P)
