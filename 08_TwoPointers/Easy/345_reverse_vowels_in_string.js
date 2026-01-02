function reverseVowels(str) {
  let vowels = new Set(["a", "e", "i", "o", "u"]);
  let left = 0;
  let right = str.length - 1;
  let splittedStr = str.split("");

  while (left < right) {
    while (left < right && !vowels.has(splittedStr[left].toLowerCase())) {
      left++;
    }
    while (left < right && !vowels.has(splittedStr[right].toLowerCase())) {
      right--;
    }
    [splittedStr[left], splittedStr[right]] = [
      splittedStr[right],
      splittedStr[left],
    ];
    left++;
    right--;
  }

  return splittedStr.join("");
}

console.log(reverseVowels("IceCreAm"));
