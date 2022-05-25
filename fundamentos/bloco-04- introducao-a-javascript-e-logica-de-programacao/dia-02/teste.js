function highestCount(array) {
    let higherNumber = array[0];
    let higherNumberCounter = 0;
  
    for (let index6 = 0; index6 < array.length; index6 += 1) {
      if (higherNumber < array[index6]) {
        higherNumber = array[index6];
      };
    }
    for (let index62 = 0; index62 < array.length; index62 += 1) {
      if (higherNumber === array[index62]) {
        higherNumberCounter += 1;
      };
    };
    return higherNumberCounter;
  } 

  console.log(highestCount([2,3,4,6,6]));