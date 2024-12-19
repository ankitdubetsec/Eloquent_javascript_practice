// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
let res;
let promise = new Promise(function (resolve, reject) {
  res = fetch("https://httpbin.org/get");
  resolve(res);
});

promise.then((result) => {
  console.log(res);
});

//console.log(res);
