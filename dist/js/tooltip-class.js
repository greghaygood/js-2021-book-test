"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ToolTipClass = /*#__PURE__*/function () {
  function ToolTipClass(selector, options) {
    var _this = this;

    _classCallCheck(this, ToolTipClass);

    // console.log("setting up tooltips...", selector)

    /*  
        function doA(paramA, paramB) { ... }
        var doA = function(paramA, paramB) { ... }
        var doA = (paramA, paramB) => { ... }
        var doA = (paramA, paramB) => oneLineFunctionBody()
        var doA = (paramA) => { ... }
        var doA = paramA => { ... }
    */
    document.querySelectorAll(selector).forEach(function (element, index) {
      return _this.setupTooltip(element, index, options);
    });
  }

  _createClass(ToolTipClass, [{
    key: "handleMouseOver",
    value: function handleMouseOver(evt) {
      // console.log('mouseover', evt.target)
      // const rect = evt.target.getBoundingClientRect();
      var tt = evt.target.querySelector('.tooltip-info');

      if (tt) {
        tt.style.display = 'block'; // tt.style.top = (rect.y - 300) + 'px';

        tt.classList.add("visible");
      }
    }
  }, {
    key: "handleMouseOut",
    value: function handleMouseOut(evt) {
      // console.log('mouseout', evt.target)
      var tt = evt.target.querySelector('.tooltip-info');

      if (tt) {
        tt.classList.remove("visible");
        tt.style.display = 'none';
      }
    }
  }, {
    key: "setupTooltip",
    value: function setupTooltip(element, index, options) {
      var ttData = element.dataset; // combine values from multiple sources into one object
      // the ES5 way:

      var v5options = Object.assign({
        color: '#444'
      }, options, ttData);
      console.log("v5options", v5options); // the ES6 way:

      var v6options = _objectSpread(_objectSpread({
        color: '#444',
        fontWeight: 'bold'
      }, options), ttData);

      console.log("v6options", v6options); // const info = element.getAttribute("data-tooltip");

      var info = ttData.tooltip;

      if (info) {
        element.classList.add("tooltip-on");

        if (v6options.color) {
          element.style.color = v6options.color;
        }

        if (v6options.backgroundColor) {
          element.style.backgroundColor = v6options.backgroundColor;
        } // element.style.left = element.style.left + 100;


        var tooltip = document.createElement("div");
        tooltip.textContent = info;
        tooltip.classList.add("tooltip-info");
        element.appendChild(tooltip);
        element.addEventListener("mouseover", this.handleMouseOver);
        element.addEventListener("mouseout", this.handleMouseOut);
      }
    }
  }]);

  return ToolTipClass;
}();
//# sourceMappingURL=tooltip-class.js.map
