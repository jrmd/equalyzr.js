/**
 *     Equalyzr by Jerome Duncan
 *
 *     Author Url:      http://itsjero.me
 *     Author Twitter:  @jrmd_
 */
var equalyzr = (function (win, doc) {
  'use strict';

  var exports = {};

  exports.version = "v0.1.0";

  exports.init = function () {
    var elements = exports.eles();

    exports.each(elements, function (index, value) {
      var selector = '[equalyzr="'+value+'"]';
      var maxHeight = exports.maxheight(selector);

      exports.on('resize', window, exports.throttle(function () {
        exports.resize(selector, 'auto');
        maxHeight = exports.maxheight(selector);
        exports.resize(selector, maxHeight);
      }, 500));

      exports.resize(selector, maxHeight);

    });
  };

  exports.each = function (arr, func) {
    for (var i = 0; i < arr.length; i++) {
      func(i, arr[i]);
    }
  };

  exports.maxheight = function (selector) {
    var max = 0;
    var elements = exports.query(selector);

    exports.each(elements, function (index, value) {
      max = max > value.offsetHeight ? max : value.offsetHeight;
    });

    return max + "px";
  };

  exports.on = function (evt, ele, func) {
    ele.addEventListener(evt, func, false);
  };

  exports.resize = function (selector, high) {
    var elements = exports.query(selector);

    exports.each(elements, function (index, value) {
      value.style.height = high;
    });
  };

  exports.query = function (selector) {
    return document.querySelectorAll(selector);
  };

  exports.eles = function () {
    var elements = [];
    var equalyzers = exports.query('[equalyzr]');
    exports.each(equalyzers, function (index, value) {
      if(elements.indexOf(value.getAttribute('equalyzr')) === -1)
        elements.push(value.getAttribute('equalyzr'));
    });
    return elements;
  };

  exports.debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  exports.throttle = function (fn, threshhold, scope) {
    threshhold || (threshhold = 250);
    var last,
        deferTimer;
    return function () {
      var context = scope || this;

      var now = +new Date,
          args = arguments;
      if (last && now < last + threshhold) {
        // hold on to it
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function () {
          last = now;
          fn.apply(context, args);
        }, threshhold);
      } else {
        last = now;
        fn.apply(context, args);
      }
    };
  }
  return exports;
}(window, document));
