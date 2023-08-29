<?php
function weirdMultiply($num) {
  $arr = str_split((string)$num);
  return count($arr) === 1
      ? $num
        : weirdMultiply(array_reduce($arr, fn($a, $b) => intval($a) * intval($b), 1));
}

echo weirdMultiply(39) . PHP_EOL;
echo weirdMultiply(999) . PHP_EOL;
echo weirdMultiply(3) . PHP_EOL;
