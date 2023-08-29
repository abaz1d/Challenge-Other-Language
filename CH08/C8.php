<?php

function pola($str) {
  $arr = explode(" ", $str);
  $hasil = [];

  for ($x = 0; $x <= 9; $x++) {
    for ($y = 0; $y <= 9; $y++) {
      $awal = intval(str_replace("#", $x, $arr[0]));
      $akhir = intval(str_replace("#", $y, $arr[4]));
      $tengah = intval($arr[2]);

      if ($awal * $tengah === $akhir) {
        array_push($hasil, $x, $y);
        return $hasil;
      }
    }
  }

  return [];
}

print_r(pola("42#3 * 188 = 80#204"));
print_r(pola("8#61 * 895 = 78410#5"));
