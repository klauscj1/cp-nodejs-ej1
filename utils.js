const isPalindrome = (palabra) => {
  let nPalabra = "";
  for (let i = palabra.length - 1; i >= 0; i--) {
    nPalabra = nPalabra + palabra[i];
  }
  return nPalabra === palabra;
};

let frutas = ["banana", "fresa", "durazno"];

module.exports = {
  isPalindrome,
  frutas,
};
