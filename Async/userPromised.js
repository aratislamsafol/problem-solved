// User Login 
function userLoggedIn(username, password) {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      if(username == 'arat' && password == 1234){
        resolve({ userId: 101, name: "Arat Islam Safol" });
      }else{
        reject(`userName or Passoword Incorrect`);
      }
    }, 1000);
  })
}

// Profile Load
const profileLoad = (userId)=>{
  return new Promise(resolve=>{
    setTimeout(() => {
      resolve({userId: userId, occuption: 'Fronted Developer' });
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

userLoggedIn('arats', 1234)
  .then(res=>{
    console.log("✅ Logged in:", res);
    return profileLoad(res.userId);
  })
  .then((res)=>{
    console.log("✅ Logged in:", res);
    return getOrderHistory(res.userId);
  })
  .then(res=>console.log(res))
  .catch(error=> console.log("❌ Error:", error));