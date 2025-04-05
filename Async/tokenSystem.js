function userLoggedIn(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(username == 'arat' && password == 1234){
                resolve({userId : 101, token: `123${username}`, createdAt: Date.now()})
            }else{
                reject(`Invalid Username or Password`);
            }
        },1000)
    })
}

function validateToken(tokenObj){
    return new Promise((resolve, reject)=>{
        const now = Date.now();
        const elapsed = (now - tokenObj.createdAt) / 1000;
        console.log(`⌛ Token Age: ${elapsed.toFixed(2)} seconds`); 
        setTimeout(()=>{
            if(elapsed < 4){
                resolve(tokenObj); 
            }else{
                reject(`Reject Token`);
            }
        },1000)
    })
}

function getUserProfile(userId){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve({userId: userId, bio: 'Fronted Developer', salary: `1 lakh` })
        }, 1000);
    })
}

function getOrderHistory(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(["Burger 🍔", "Coffee ☕", "Laptop 💻"]);
      }, 1000);
    });
  }

  userLoggedIn('arat', 1234)
  .then(res => {
    console.log('Logged In...');
    return new Promise(resolve => setTimeout(() => resolve(res), 4000));
  })
  .then(res => {
    return validateToken(res);
  })
  .then(validMsg => {
    console.log(validMsg);
    return getUserProfile(101);
  })
  .then(profile => {
    console.log("Profile:", profile);
    return getOrderHistory(profile.userId);
  })
  .then(orders => {
    console.log("Orders:", orders);
  })
  .catch(err => {
    console.log("Error:", err);
  });
