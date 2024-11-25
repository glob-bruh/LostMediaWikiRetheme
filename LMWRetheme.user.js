// ==UserScript==
// @name        LMW Retheme
// @description Userscript that adaptively themes lostmediawiki.com
// @version     1.4
// @icon        https://lostmediawiki.com/w/images/1/1d/New_logo.png
// @grant       none
// @match       https://*lostmediawiki.com/*
// @namespace   https://github.com/
// @downloadURL https://github.com/glob-bruh/LostMediaWikiRetheme/raw/main/LMWRetheme.user.js
// @updateURL   https://github.com/glob-bruh/LostMediaWikiRetheme/raw/main/LMWRetheme.user.js
// @author      https://github.com/glob-bruh/LostMediaWikiRetheme/graphs/contributors
// @homepage    https://github.com/glob-bruh/LostMediaWikiRetheme
// @supportURL  https://github.com/glob-bruh/LostMediaWikiRetheme/issues
// ==/UserScript==

function LoadCSS (folder, file, stopExec) {
  var cssId = "cssID" + Math.floor(Math.random() * 9999);
  if (!document.getElementById(cssId))
  {
      var head  = document.getElementsByTagName("head")[0];
      var link  = document.createElement("link");
      link.id   = cssId;
      link.rel  = "stylesheet";
      link.type = "text/css";
      link.href = 'https://glob-bruh.github.io/LostMediaWikiRetheme/css/' + folder + "/" + file; // Release Address
      //link.href = "http://127.0.0.1:9456/css/" + folder + "/" + file; // Development Address
      link.media = "all";
      head.appendChild(link);
  }
  if (stopExec == true)  {
    throw new Error("Halt Userscript JS!");
  }
}

function LoadArticle (file) {
  LoadCSS("main", "global.css", false);
  LoadCSS("main", file, true);
}

function LMWArticleLogic() {
  const categories = RLCONF.wgCategories;
  console.log(categories);
  switch (true) {
    case categories.includes("NSFW"):
      if (categories.includes("NSFL")) {
        LoadArticle("nsflw.css");
      } else {
        LoadArticle("nsfw.css");
      }
    case categories.includes("NSFL"):
      LoadArticle("nsfl.css");
    case categories.includes("Found media"):
      LoadArticle("found.css");
    case categories.includes("Partially found media"):
    case categories.includes("Partially lost media"):
      LoadArticle("partfound.css");
    case categories.includes("Completely lost media"):
      LoadArticle("lost.css");
    case categories.includes("Existence unconfirmed"):
      LoadArticle("unconfirmed.css");
    case categories.includes("Non-existence confirmed"):
      LoadArticle("nonexistence.css");
    default:
      console.log("no matching style");
  }
}

function LMWForumLogic() {
  // const switchElement = document.createElement("h1");
  // const customText = document.createTextNode("Dark/Bright Switch Here");
  // switchElement.appendChild(customText);
  // document.getElementById("banner").appendChild(switchElement);
  LoadCSS("forum", "global-dark.css", true)
}

console.log(window.location.host);
switch (window.location.host) {
  case "lostmediawiki.com":
    LMWArticleLogic();
  case "forums.lostmediawiki.com":
    LMWForumLogic();
}
