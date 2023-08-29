function pola(str: string): number[] {
  let a = str.split(" ");
  let hasil: number[] = [];
  for (let x: any = 0; x <= 9; x++) {
    for (let y: any = 0; y <= 9; y++) {
      const awal = Number(a[0].replace("#", x));
      const akhir = Number(a[4].replace("#", y));
      const tengah = a[2];

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
