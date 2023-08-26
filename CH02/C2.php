<?php

function deretKaskus($n) {
  $total = [];
  for ($i = 1; $i <= $n; $i++) {
    $number = $i * 3;
    if ($number % 5 == 0 && $number % 6 == 0) {
      array_push($total,"KASKUS");
    } else if ($number % 5 == 0) {
      array_push($total,"KAS");
    } else if ($number % 6 == 0) {
      array_push($total,"KUS");
    } else {
      array_push($total,$number);
    }
  }
  print_r($total);
}

 deretKaskus(10);