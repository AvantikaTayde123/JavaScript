function delayedHello() {
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello world");
    }, 2000);
  });
  return promise;
}
delayedHello().then((message) => console.log(message))
.catch((err)=>{
    console.log("Error");
})
