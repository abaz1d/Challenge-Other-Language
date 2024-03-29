var fungsiRomawi = function (n) {
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  var str = "";
  for (var _i = 0, _a = Object.keys(roman); _i < _a.length; _i++) {
    var i = _a[_i];
    var k = Math.floor(n / roman[i]);
    n -= k * roman[i];
    str += i.repeat(k);
  }
  return str;
};
console.log("Script Testing untuk Konversi Romawi\n");
console.log("input  | expected | result");
console.log("------ | -------- | ------");
console.log("4      | IV       | ", fungsiRomawi(4));
console.log("9      | IX       | ", fungsiRomawi(9));
console.log("13     | XIII     | ", fungsiRomawi(13));
console.log("1453   | MCDLIII  | ", fungsiRomawi(1453));
console.log("1646   | MDCXLVI  | ", fungsiRomawi(1646));
