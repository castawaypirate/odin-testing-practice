export default function capitalize(str) {
  if (typeof str !== "string" || str === "") {
    return str;
  }

  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}
