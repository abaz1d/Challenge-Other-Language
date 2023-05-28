var tambah = (arr: number[]): void => {
  var a: number = 0;
  for (var i = 0; i < arr.length; i++) {
    a += arr[i];
  }
  console.log(a);
};
tambah([1, 2, 7]);
