function delay(ms) {
  // your code
  return new Promise((resolve, reject) => {
    setTimeout(resolve("whats up after 3 sec"), ms);
  });
}

delay(3000).then((res) => alert(res));
