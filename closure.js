function mysteryCounter() {
    let count = 0;
    return {
      inc: () => ++count,
      dec: () => --count,
      reset: () => (count = 0),
      getCount: () => count
    };
  }
  
  let myCounter = mysteryCounter();
  
  console.log(myCounter.inc());  
  console.log(myCounter.inc());  
  console.log(myCounter.reset());  
  console.log(myCounter.getCount());  
  console.log(myCounter.dec());  
  console.log(myCounter.getCount());  
  