function isSubsequence(s, t) {
  let x = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[x] === t[i]) {
      x++;
    }
  }

  return s.length === x;
}

// console.log(isSubsequence("abc", "ahbgdc"));
// console.log(isSubsequence("axc", "ahbgdc"));
// console.log(isSubsequence("axc", "ahbgdcxc"));

function isMultipleSubsequence(s1, s2, t) {
  let x1 = 0;
  let x2 = 0;
  for (let i = 0; i < t.length; i++) {
    if (s1[x1] === t[i]) {
      x1++;
    }

    if (s2[x2] === t[i]) {
      x2++;
    }
  }

  return [s1.length === x1, s2.length === x2];
}

console.log(isMultipleSubsequence("abc", "hbda", "ahbgdc"));
console.log(isMultipleSubsequence("axc", "hb", "ahbgdc"));
