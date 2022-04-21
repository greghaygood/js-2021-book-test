"use strict";

(function () {
  window.Tooltip = function () {
    function handleMouseOver(evt) {
      // console.log('mouseover', evt.target)
      // const rect = evt.target.getBoundingClientRect();
      var tt = evt.target.querySelector('.tooltip-info');

      if (tt) {
        tt.style.display = 'block'; // tt.style.top = (rect.y - 300) + 'px';

        tt.classList.add("visible");
      }
    }

    function handleMouseOut(evt) {
      // console.log('mouseout', evt.target)
      var tt = evt.target.querySelector('.tooltip-info');

      if (tt) {
        tt.classList.remove("visible");
        tt.style.display = 'none';
      }
    }

    function setupTooltip(element, index) {
      // const info = element.getAttribute("data-tooltip");
      var info = element.dataset.tooltip;

      if (info) {
        element.classList.add("tooltip-on"); // element.style.left = element.style.left + 100;

        var tooltip = document.createElement("div");
        tooltip.textContent = info;
        tooltip.classList.add("tooltip-info");
        element.appendChild(tooltip);
        element.addEventListener("mouseover", handleMouseOver);
        element.addEventListener("mouseout", handleMouseOut);
      }
    }

    function init(selector) {
      // console.log("setting up tooltips...", selector)
      document.querySelectorAll(selector).forEach(setupTooltip);
    }

    return {
      init: init
    };
  }();
})();
//# sourceMappingURL=tooltip.js.map
