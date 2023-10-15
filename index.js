var reverseWords = function (s) {
  let str = s.split(" ");
  let output = "";
  for (let i = str.length - 1; i >= 0; i--)
    if (str[i]) {
      output += (output ? " " : "") + str[i];
    }
  return output;
};

reverseWords("the sky is blue");
