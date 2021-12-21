function factorialize(num) {
  let result = 1;
  if (num == 0 || num == 1) {
    return result;
  } else {
    for (let i = num; i >= 1; i--) {
      result *=i;
    }
  }
  return result;
}

factorialize(5);