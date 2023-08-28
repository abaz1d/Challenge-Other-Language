<?php

function stringManipulation($world) {
  $world = strtolower($world);
  if($world[0] === "a" || $world[0] === "i" || $world[0] === "u" || $world[0] === "e" || $world[0] === "O") {
    echo $world . PHP_EOL;
  } else {
    echo substr($world, 1). $world[0] ."nyo" . PHP_EOL;
  }
  
}

stringManipulation("Ayam");
stringManipulation("BEBEk");