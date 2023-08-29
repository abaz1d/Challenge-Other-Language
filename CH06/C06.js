var sentenceManipulation = function (sentence) {
    var arrSentence = sentence.toLowerCase().split(" ");
    var result = arrSentence.map(function (string) {
        if ("aiueo".includes(string[0])) {
            return string;
        }
        else {
            return string.substring(1) + string[0] + "nyo";
        }
    });
    console.log(result.join(" "));
};
sentenceManipulation("ibu pergi ke pasar bersama aku");
