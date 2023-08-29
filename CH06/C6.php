<?php

function sentenceManipulation(string $sentence){
  $sentence = explode(" ",$sentence);
  $result = [];
  foreach($sentence as $string){
    if(strpos($string, 'aiueo') !== false) {
      array_push($result, $string);
    } else {
      array_push($result, substr($string, 1). $string[0] ."nyo");
    }

  }
  $sentence = implode(" ", $result);
  echo $sentence . PHP_EOL;
}

sentenceManipulation('ibu pergi ke pasar bersama aku');