// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

let promise = new Promise(function (resolve, reject) {
  let res = fetch("https://httpbin.or/get");
  if (res.ok) {
    resolve(res);
  } else {
    reject("nfjjnj");
  }
});

promise.then((res) => {
  console.log(res);
});
promise.catch((error) => {
  console.log(error);
});

//console.log(res);
