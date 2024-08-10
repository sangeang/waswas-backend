export const fileToBase64 = async (file: File) => {
  const bytes = await file.bytes();
  const binString = Array.from(bytes)
    .map((byte) => String.fromCodePoint(byte))
    .join("");

  return btoa(binString);
};
