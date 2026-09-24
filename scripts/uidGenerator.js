const categoryPrefix = (string) => {
  const sliced = string.slice(0, 4);
  const loweredCaseString = sliced.toLowerCase();
  const normalized = loweredCaseString.normalize("NFD").replace(/\p{M}/gu, "");
  return normalized;
};

const createPrefix = (string, type) => {
  const sliced = string.slice(0, 4);
  const normalized = sliced.normalize("NFD").replace(/\p{M}/gu, "");

  return type === "dish"
    ? normalized.toLowerCase()
    : "CAT-" + normalized.toUpperCase();
};

const createSerial = (number) => {
  if (number < 1 || number > 9999) {
    throw new Error("Serial digits must be between 1 and 9999!");
  }
  const numberLength = number.toString().length;
  const neededZeroes = 4 - numberLength;
  let serial = "";
  for (let i = 0; i < neededZeroes; i++) {
    serial = serial + "0";
  }
  serial = serial + number.toString();
  return serial;
};

const getUID = (prefix, counter) => {
  return prefix + createSerial(counter);
};

module.exports = {
  getUID,
  createPrefix,
};
