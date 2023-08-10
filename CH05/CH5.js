var stringManipulations = function (word) {
  var x = word.toLocaleLowerCase();
  if (
    x.charAt(0) == "a" ||
    x.charAt(0) == "i" ||
    x.charAt(0) == "u" ||
    x.charAt(0) == "e" ||
    x.charAt(0) == "o"
  ) {
    console.log(word);
  } else {
    console.log(word.substring(1) + word.charAt(0) + "nyo");
  }
};
stringManipulations("ibu pergi ke pasar bersama ku");
stringManipulations("Bebek");
