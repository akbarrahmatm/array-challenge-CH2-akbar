function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [];

  // Tulis code-mu disini

  // Sorting menggunakan bubble sort

  // Panjang dari array
  const n = cars.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // perbedaan dari yang ascending hanya pada if yang ada disini, kalau element j < element j+1 maka ditukar
      if (cars[j].year < cars[j + 1].year) {
        const storageArr = cars[j];
        cars[j] = cars[j + 1];
        cars[j + 1] = storageArr;
      }
    }
  }

  // Masukkan element cars ke result
  for (let i = 0; i < n; i++) {
    result.push(cars[i]);
  }

  console.log(result);

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
