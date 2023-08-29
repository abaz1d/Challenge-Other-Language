function pola(str) {
    var a = str.split(" ");
    var hasil = [];
    for (var x = 0; x <= 9; x++) {
        for (var y = 0; y <= 9; y++) {
            var awal = Number(a[0].replace("#", x));
            var akhir = Number(a[4].replace("#", y));
            var tengah = a[2];
            if (awal * parseInt(tengah) === akhir) {
                hasil.push(x, y);
                return hasil;
            }
        }
    }
    return [];
}
console.log(pola("42#3 * 188 = 80#204"));
console.log(pola("8#61 * 895 = 78410#5"));
