// I use a loop to iterate through each single element in the project
const sum_to_n_a = function (n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// I use recursion to call the function until the end (n === 0)
const sum_to_n_b = function (n) {
  if (n === 0) {
    return 0;
  } else {
    return n + sum_to_n_b(n - 1);
  }
};

// I just use a math formula to solve it
const sum_to_n_c = function (n) {
  return (n * (n + 1)) / 2;
};

