function sumPrimes(num) {
  let result = 0;
  
  for(let range = 2; range <= num; range++) {
    let isNotPrime = false;
    for(let divider = 2; divider < range; divider++) {
      if(divider !== range) {
        if(range % divider === 0) {
          isNotPrime = true;
          break;
        }
      }
    }

    if(!isNotPrime) {
      result += range;
      console.log(range)
    }
    
  }
  return result;
}

sumPrimes(10);
