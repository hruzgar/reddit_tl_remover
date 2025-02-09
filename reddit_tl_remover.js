// ==UserScript==
// @name         Remove TL Parameter from Reddit URLs
// @namespace    https://www.reddit.com/
// @version      1.1
// @description  Removes ?tl=xx from Reddit post URLs ASAP to prevent automatic translation
// @match        https://www.reddit.com/*
// @match        https://old.reddit.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
  'use strict';

  let url = new URL(window.location.href);

  if (url.searchParams.has('tl')) {
    url.searchParams.delete('tl');
    window.location.replace(url.toString());
  }
})();
