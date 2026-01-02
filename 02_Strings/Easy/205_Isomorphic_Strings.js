// s = "foo", t = "bar"

function isIsomorphic1(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let StoT = new Map();
  let TtoS = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!StoT.has(s[i]) && !TtoS.has(t[i])) {
      StoT.set(s[i], t[i]);
      TtoS.set(t[i], s[i]);
    } else if (StoT.has(s[i]) && StoT[s[i]] !== t[i]) {
      return false;
    } else if (TtoS.has(t[i]) && TtoS[y[i]] !== s[i]) {
      return false;
    }
  }

  return true;
}

function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;
  let charMap = new Map();
  let uniqueSet = new Set();

  for (let i = 0; i < s.length; i++) {
    if (!uniqueSet.has(t[i]) && !charMap.has(s[i])) {
      charMap.set(s[i], t[i]);
      uniqueSet.add(t[i]);
    } else if (charMap.get(s[i]) !== t[i]) {
      return false;
    }
  }
  return true;
}

console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("egg", "ad"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("baaba", "bccdc"));
console.log(isIsomorphic("badba", "bccdc"));

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.
