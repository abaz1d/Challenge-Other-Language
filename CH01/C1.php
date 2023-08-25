<?php

function sum(...$numbers) {
  $total = 0;
  foreach ($numbers as $number) {
    $total += $number;
  }
  echo $total . PHP_EOL;
}

sum(1, 2, 7);
sum(1, 4);
sum(11);
sum(10, 3, 6, 7, 9);