function weirdMultiply(num: number): number {
  let arr: string[] = Array.from(String(num));
  return arr.length === 1
    ? num
    : weirdMultiply(arr.reduce((a, b) => parseInt(a) * parseInt(b), 1));
}

console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));
