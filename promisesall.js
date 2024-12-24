const axios=require("axios")

const names=[
    'iliakan', 'remy', 'jeresig'
]

const requests=names.map((name)=>axios.get(`https://api.github.com/users/${name}`));

console.log(requests)

//promise.all me promises ka array jata hai

Promise.all(requests)
.then((res)=>{
  console.log(res[0].data.name)
})
.catch((error)=>{
    console.log(error.message)
})