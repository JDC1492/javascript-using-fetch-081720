done = false

const firstFunct = function(){
  return new Promise(function(resolve, reject){
    if (done){
      resolve("ASYNC JS is ...")
    } else {
      reject("Promise failed")
    }
  })
}
// const firstFunct = function(){
//   console.log("this is the first log in the function")
//   return new Promise(function(resolve){
//     // if (done){
//       setTimeout(function(){
//         resolve("ASYNC JS is ...")
//       }, 1000)
//     // } else {
//     //   reject("Promise failed")
//     // }
//   })
// }


const secondFunct = function(data){
  return new Promise(function(resolve, reject){
    resolve(data+" very useful but confusing at first!")
  })
}

function amazingFunct(){
  return "This function is doing a lot of cool stuff!"
}

// This doesn't work
// let newVar
// firstFunct()
// .then(data => {newVar = data})

// secondFunct(newVar)
// .then(console.log)

// what about this?
let newVar
firstFunct()
.then(data => secondFunct(data))
.then(console.log)
.catch(err => console.log(err))