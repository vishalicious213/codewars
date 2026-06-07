function filterString(value) {
  return Number(
    [...value]
      .filter(char => !isNaN(char))
      .join("")
  );
}
