"use strict";

(function () {
  /**
   * Will identify all H2s, create links for each, and then
   * add a table of contents to the DOM
   */
  window.Outliner = function () {
    function makeLinks(h2_array) {
      h2_array.forEach(function (h2, ndx) {
        h2.setAttribute("id", "section-".concat(ndx)); // "section-" + ndx
      });
    }

    function setupToC(h2_array) {
      var ul = document.createElement("ul");
      ul.classList.add("toc");
      h2_array.forEach(function (h2, ndx) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.setAttribute("href", "#section-".concat(ndx));
        a.textContent = h2.textContent;
        li.appendChild(a);
        ul.appendChild(li);
      });
      return ul;
    }

    function doTheThing(selector) {
      console.log('init', selector);
      var element = document.querySelector(selector);
      var h2s = element.querySelectorAll("h2");
      makeLinks(h2s);
      var toc = setupToC(h2s);
      element.prepend(toc);
    }

    return {
      init: doTheThing
    };
  }();
})();
//# sourceMappingURL=outliner.js.map
