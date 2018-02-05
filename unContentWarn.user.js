// ==UserScript==
// @name unContentWarn
// @description Adds a button to toggle the hiding of content warning text content.
// @match https://cybre.space/web/*
// @homepageURL https://github.com/Fumon/unContentWarn
// @namespace Fumon
// @grant none
// @run-at document-end
// @version 0.1.1
// ==/UserScript==

// Icon strings
const expandIcon = "fa-plus-square";
const collapseIcon = "fa-minus-square";

let unCW = {
  expanding: false,
  icon: null,
  init() {
    this.createStyle();
    this.bindToDrawer();
  },
  // Create the style element which removes the display: none property
  createStyle() {
    let style = document.createElement("style");
    style.type = "text/css";
        style.innerHTML = `
      .status__content--with-spoiler p:first-of-type {
        margin-bottom: 20px !important;
      }
      .status__content--with-spoiler div:first-of-type:not(.status__content__text){
        display: none;
      }
      .status__content--with-spoiler .status__content__text {
        display: block;
      }
    `;
    this.styleElement = style;
  },
  bindToDrawer() {
    // Find the header
    var drawerHeader = document.getElementsByClassName("drawer__header")[0];
    // Insert an extra buton
    let a = document.createElement("a");
    a.classList.add("drawer__tab");
    a.title = "Toggle CW";

    let i = document.createElement("i");
    i.setAttribute("role", "img");
    i.classList.add("fa", "fa-fw", expandIcon);
    this.icon = i;

    a.appendChild(i);
    drawerHeader.appendChild(a);

    a.addEventListener("click", () => this.toggleCWs(), false);

    console.log("Say hi to this: ");
    console.log(this);
    console.log("Say hi to unCW: ");
    console.log(unCW);
  },
  toggleCWs(event) {
    if(this.expanding) {
      // Change the icon
      this.icon.classList.remove(collapseIcon);
      this.icon.classList.add(expandIcon);
      document.querySelector("head").removeChild(this.styleElement);
    } else {
      // Change the icon
      this.icon.classList.remove(expandIcon);
      this.icon.classList.add(collapseIcon);
      document.querySelector("head").appendChild(this.styleElement);
    }
    this.expanding = !(this.expanding);
  }

};

// Wait for the document to load
(new MutationObserver(check)).observe(document, {childList: true, subtree: true});

function check(changes, observer) {
  if(document.querySelector(".drawer__tab")) {
    observer.disconnect();
    unCW.init();
  }
}
