// ==UserScript==
// @name        LMW Retheme
// @description Userscript that adaptively rethemes lostmediawiki.com
// @version     1.0
// @icon        https://lostmediawiki.com/w/images/1/1d/New_logo.png
// @grant       none
// @match       https://lostmediawiki.com/*
// @namespace   https://github.com/
// @downloadURL https://github.com/glob-bruh/???
// @updateURL   https://github.com/glob-bruh/???
// @author      https://github.com/glob-bruh/LostMediaWikiRetheme/graphs/contributors
// @homepage    https://github.com/glob-bruh/LostMediaWikiRetheme
// @supportURL  https://github.com/glob-bruh/LostMediaWikiRetheme/issues
// ==/UserScript==

const categories = RLCONF.wgCategories;
console.log(categories);
switch (true) {
  case categories.includes("NSFW"):
    if (categories.includes("NSFL")) {
      LoadCSS("nsflw.css");
    } else {
      LoadCSS("nsfw.css");
    }
  case categories.includes("NSFL"):
    LoadCSS("nsfl.css");
  case categories.includes("Found media"):
    LoadCSS("found.css");
  case categories.includes("Partially found media"):
  case categories.includes("Partially lost media"):
    LoadCSS("partfound.css");
  case categories.includes("Completely lost media"):
    LoadCSS("lost.css");
  case categories.includes("Existence unconfirmed"):
    LoadCSS("unconfirmed.css");
  case categories.includes("Non-existence confirmed"):
    LoadCSS("nonexistence.css");
  default:
    console.log("no matching style");
}

function LoadCSS (file) {
  var cssId = 'myCss';
  if (!document.getElementById(cssId))
  {
      var head  = document.getElementsByTagName('head')[0];
      var link  = document.createElement('link');
      link.id   = cssId;
      link.rel  = 'stylesheet';
      link.type = 'text/css';
      link.href = 'http://127.0.0.1:8080/' + file;
      link.media = 'all';
      head.appendChild(link);
      // https://stackoverflow.com/a/577002
  }
  throw new Error("Halt Userscript JS!");
}