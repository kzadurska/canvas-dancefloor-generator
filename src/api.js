export function getDefaultGeneratorValues() {
  return new Promise(resolve =>
    setTimeout(() => {
      return resolve({
        rows: 3,
        columns: 4,
      });
    }, 1500)
  );
}
