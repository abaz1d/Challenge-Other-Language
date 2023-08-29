const sentenceManipulation = (sentence: string) => {
  const arrSentence = sentence.toLowerCase().split(" ");
  const result = arrSentence.map((string) => {
    if ("aiueo".includes(string[0])) {
      return string;
    } else {
      return string.substring(1) + string[0] + "nyo";
    }
  });

  console.log(result.join(" "));
};

sentenceManipulation("ibu pergi ke pasar bersama aku");
