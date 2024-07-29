// loop
const sum_to_n_a = function (n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// recursive
const sum_to_n_b = function (n) {
  if (n === 0) {
    return 0;
  } else {
    return n + sum_to_n_b(n - 1);
  }
};

// math 
const sum_to_n_c = function (n) {
  return (n * (n + 1)) / 2;
};

