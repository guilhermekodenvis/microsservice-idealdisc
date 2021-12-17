
export default function cpfValitador(strCpf: string): boolean {
  let firstDigit;
  let secondDigit;
  let sum;

  const cpf =
    strCpf.substring(0, 3) +
    strCpf.substring(4, 7) +
    strCpf.substring(8, 11) +
    strCpf.substring(12, 14);

  if (
    cpf === "00000000000" ||
    cpf === "11111111111" ||
    cpf === "22222222222" ||
    cpf === "33333333333" ||
    cpf === "44444444444" ||
    cpf === "55555555555" ||
    cpf === "66666666666" ||
    cpf === "77777777777" ||
    cpf === "88888888888" ||
    cpf === "99999999999"
  ) {
    return false;
  }

  sum = 0;
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }
  firstDigit = (sum * 10) % 11;

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }
  secondDigit = (sum * 10) % 11;

  if (firstDigit === 10 || firstDigit === 11) {
    firstDigit = 0;
  }

  if (secondDigit === 10 || secondDigit === 11) {
    secondDigit = 0;
  }

  if (
    firstDigit !== parseInt(cpf.substring(9, 10)) ||
    secondDigit !== parseInt(cpf.substring(10, 11))
  ) {
    return false;
  }

  return true;
}
