var character = "a";

function isVowel() {
  if (character == "a" ||
      character == "e" ||
      character == "i" ||
      character == "o" ||
      character == "u") {
    return true
  } else {
    return false
  }
}

console.log(isVowel());
