export default function capitalize(str) {
  if (typeof str !== "string" || str === "") {
    return str;
  }

  let capitalized = "";
  let ascii = str[0].charCodeAt(0);
  if (ascii >= 97 && ascii <= 122) {
    ascii -= 32;
  }
  capitalized = String.fromCharCode(ascii) + str.slice(1);

  return capitalized;
}
