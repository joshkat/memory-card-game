//creates an array of desired length with random numbers that has 0 duplicates
export function noDuplicatesRandArr(length, highestNum){
    //prevent inf loop, return shuffled arr of numbers 0-length
    if(highestNum <= length){
        const returnArr = Array.from({ length }, (_, index) => index);
        return shuffle(returnArr);
    }

    //generate random number array of length
    let randomNumArr = Array.from({length: length}, () => Math.floor(Math.random() * highestNum + 1));
    
    randomNumArr = replaceDuplicates(randomNumArr, highestNum);

    //shuffle/convert to array and return
    return (shuffle(randomNumArr));
}

//removes duplicates and keeps adding nums until length of inital array is reached
export function replaceDuplicates(array, highestNum){
    const returnArr = new Set(array);

    //prevent inf loop, return shuffled arr of numbers 0-length
    if(highestNum <= array.length){
        const returnArr = Array.from({ length }, (_, index) => index);
        return shuffle(returnArr);
    }

    //add random numbers which are new until length req is reached
    while (returnArr.size < array.length) {
        const randomNumber = Math.floor(Math.random() * highestNum + 1);
        returnArr.add(randomNumber);
    }

    return [...returnArr];
}

export function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle
    while (currentIndex !== 0) {
  
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // Swap it with the current element
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}
