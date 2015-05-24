/**
 *     Equalyzr by Jerome Duncan
 *
 *     Author Url:      http://jrmd.io
 *     Author Twitter:  @jrmd_
 */
(function (window, document, undefined) {
  'use strict';

  /**
   * Helpers
   */

  var each = function (arr, func) {
    var i = 0;

    while(i < arr.length) {
      func(i, arr[i]);
      i++;
    }
  }

  var maxheight =function (elements) {
    var max = 0;

    each(elements, function (index, value) {
      var height = parseFloat(window.getComputedStyle(value, null).getPropertyValue('height'));
      max = max > height ? max : height;
    });

    return max;
  }

  var query = function (selector) {
    return document.querySelectorAll(selector);
  };

  var group =  function (elem) {
    var elements = document.querySelectorAll(elem);
    var groups = [];
    var arrayIndex = -1;
    var last = 0;

    each(elements, function (index, elem) {
      var offset = offsetTop(elem);

      if (groups[arrayIndex] !== undefined && last !== offset) {
        var max = maxheight(groups[arrayIndex]);
        setHeight(groups[arrayIndex], max);
        offset = offsetTop(elem);
      }

      if (last !== offset) {
        arrayIndex++;
      }

      if(groups[arrayIndex] === undefined) {
        groups[arrayIndex] = [];
        last = offset;
      }

      last = offset;
      groups[arrayIndex].push(elem);
    });

    return groups;
  }

  var offsetTop = function (elem) {
    return elem.offsetTop;
  }

  var setHeight = function (elements, height) {
    each(elements, function (index, element) {
      element.style.height = height;
    })
  }

  /**
   * Equalyzr Object
   * @param {String} elem
   */
  var Equalyzr = function (elem) {

    // Return if feature test fails
    if (! ('querySelector' in document && 'addEventListener' in window) ) {
      return;
    }

    this.elem = elem;
    this.init();
  };

  Equalyzr.prototype = {
    constructor: Equalyzr,

    init: function () {
      var _self = this;

      this.resize();

      window.addEventListener('resize', function (e) {
        _self.resize();
      }, false);
    },

    resize: function () {
      var grouped;
      var elements = query(this.elem);

      setHeight(elements, 'auto');

      grouped = group(this.elem);
    }
  };

  window.Equalyzr = Equalyzr;
}(window, document));
