var angkaKaskus = function (n) {
  var hasil = [];
  for (var x = 1; x <= n; x++) {
    var y = x * 3;
    if (y % 5 === 0 && y % 6 === 0) {
      hasil.push("KASKUS");
    } else if (y % 5 === 0) {
      hasil.push("KAS");
    } else if (y % 6 === 0) {
      hasil.push("KUS");
    } else {
      hasil.push(y);
    }
  }
  console.log(hasil);
};
angkaKaskus(10);
