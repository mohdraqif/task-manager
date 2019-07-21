const add = (a, b) =>{
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      if(a < 0 || b < 0) {
        reject('Numbers Should Be Positive!!!')
      }
      resolve(a + b)
    }, 2000);
  })
}

module.exports = {
  add
}
