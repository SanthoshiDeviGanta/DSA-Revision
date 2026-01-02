function secondLargest(str) {
  let first = -1;
  let second = -1;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      let curr = +str[i];
      if (curr > first) {
        second = first;
        first = curr;
      }
      if (curr < first && curr > second) {
        second = curr;
      }
    }
  }

  return second;
}

// console.log(secondLargest("dfa12321af"));
// console.log(secondLargest("dfa793245af"));
console.log(secondLargest("987"));

// console.log("a", isNaN("a"), "1", isNaN("1"));

// ;  // 2 --> 3
