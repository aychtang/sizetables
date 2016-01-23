// Range covers most characters required for standard english text.
var defaultCharSet = function () {
  var set = [];
  for (var i = 48; i < 177; i++)
    set.push(String.fromCharCode(i));
  return set;
};

// Generation - depends on DOM + canvas measurement to produce a sizetable.

var measureChar = (function () {
  var canvas = document.createElement("canvas");

  return function (f, c) {
    var context  = canvas.getContext("2d");
    context.font = f;
    return context.measureText(c).width;
  };
}());

var calculateSizeTable = function (font, charSet) {
  var table = {};
  charSet.forEach(function (c) { table[c] = measureChar(font, c); });
  return table;
};

// Measurements - done purely outside of DOM with supplied sizetable.

var measureText = function (text, sizeTable) {
  var collectSizes = function (a, c) { return a + sizeTable[c]; };
  return text.split("").reduce(collectSizes, 0);
};

exports.measureText        = measureText;
exports.measureChar        = measureChar;
exports.defaultCharSet     = defaultCharSet;
exports.calculateSizeTable = calculateSizeTable;
