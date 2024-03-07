function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  // cars.forEach((car) => {
  //   if (car.available === true) {
  //     result.push(car);
  //   }
  // });

  for (let i = 0; i < cars.length; i++) {
    // const element = array[i];
    if (cars[i].available === true) {
      result.push(cars[i]);
    }
  }

  // console.log(result);

  // console.log(result);

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
