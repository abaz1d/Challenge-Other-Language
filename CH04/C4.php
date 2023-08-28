<?php

function indexPrime($n) {
  if ($n === 1) return 2;

  $count = 1;
  $num = 3;

  while ($count < $n) {
    $isPrime = true;

    if ($num <= 1) {
      $isPrime = false;
    } elseif ($num <= 3) {
      $isPrime = true;
    } elseif ($num % 2 === 0 || $num % 3 === 0) {
      $isPrime = false;
    } else {
      for ($i = 5; $i * $i <= $num; $i += 6) {
        if ($num % $i === 0 || $num % ($i + 2) === 0) {
          $isPrime = false;
          break;
        }
      }
    }

    if ($isPrime) {
      $count++;
    }

    $num += 2;
  }

  return $num - 2;
}

echo indexPrime(4) . PHP_EOL;     // Output: 7 (bilangan prima ke-4)
echo indexPrime(500) . PHP_EOL;   // Output: 3571 (bilangan prima ke-500)
echo indexPrime(37786) . PHP_EOL; // Output: 449471 (bilangan prima ke-37786)
