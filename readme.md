# UnContentWarning

[![Buy me a coffee!](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/mI8stwU4P)

`Version 0.1.4`

## Description
A simple user-script for the Mastodon Web UI which adds a toggle button to unhide/hides all content warning text by default.

If there's interest, I'll mod the mastodon sourcecode and submit a patch so instance owners can include it as a feature.

Give this repo a star to let me know you want more.

## Motivation
[![Picture of a mastodon toot that also links to it directly](https://i.imgur.com/IKfm2k6.png)](https://witches.town/@morganastra/99453854540460685)

## Installation

### 1. Install a user script manager for your browser

Choose from one of these options for your browser (more options coming). The script is tested in Violentmonkey so your milage may vary with the others.

| Browser | Options |
|---------|---------|
| Chrome | [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) or [Violentmonkey](https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnln) |
| Firefox | [Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/), [Tampermonkey](https://addons.mozilla.org/firefox/addon/tampermonkey/) or [Violentmonkey](https://addons.mozilla.org/firefox/addon/violentmonkey/)|


### 2. Install the script

[Click Here!](https://raw.githubusercontent.com/Fumon/unContentWarn/master/unContentWarn.user.js) your user-script manager should handle everything and bring up a review screen. Follow step #3 and you should be good to go.

### 3. Modify the script for your instance URL

In this early version of the script, you'll have to install the script and then edit the `@match` line to match your instance's URL through Tamper/Grease/Violentmonkey's script editor.

For example, if you browse your instance at https://icosohedron.web/ then you'd change the top of the script to read:

```
// ==UserScript==
// @name unContentWarn
// @description Adds a button to toggle the hiding of content warning text content.
// @match https://icosohedron.web/web/* 
```

### 4. Reload your instance's website

You should be in business!

## Usage

Look for this button

![Should look like this](https://i.imgur.com/srXtEkW.png)

Click it to toggle content warnings off and on.

## FAQ

### How do I update this?

You'll have to reinstall the script from the link above and copy your @match. If I enable auto-update, it'll wipe your @match every time and that's just annoying.

### How do I make this work with multiple instances?

Simply add an extra @match line e.g.

```
// ==UserScript==
// @name unContentWarn
// @description Adds a button to toggle the hiding of content warning text content.
// @match https://icosohedron.web/web/* 
// @match https://cybre.space/web/*
```

## Contact

Limited support available at `@Fumon@cybre.space`

[![Buy me a coffee!](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/mI8stwU4P)
