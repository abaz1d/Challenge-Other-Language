<?php 
function romawi($n) {
  $romanSymbols = array(
    1000 => "M",
    900 => "CM",
    500 => "D",
    400 => "CD",
    100 => "C",
    90 => "XC",
    50 => "L",
    40 => "XL",
    10 => "X",
    9 => "IX",
    5 => "V",
    4 => "IV",
    1 => "I"
  );
  $result = "";

  foreach ($romanSymbols as $value => $symbol) {
    while ($n >= $value) {
      $result .= $symbol;
      $n -= $value;
    }
  }

  return $result;
}


echo "Script Testing untuk Konversi Romawi\n";
echo "input  | expected | result\n";
echo "------ | -------- | ------\n";
echo "4      | IV       | " . romawi(4) . PHP_EOL;
echo "9      | IX       | " . romawi(9) . PHP_EOL;
echo "13     | XIII     | " . romawi(13) . PHP_EOL;
echo "1453   | MCDLIII  | " . romawi(1453) . PHP_EOL;
echo "1646   | MDCXLVI  | " . romawi(1646) . PHP_EOL;
