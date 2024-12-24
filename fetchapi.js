// fetch('https://official-joke-api.appspot.com/random_joke')
// .then((res)=>{
    
//     return res.json()
    
// })
// .then((res)=>{
//     console.log(res)
// })

// .catch((error)=>{
//     console.log(error.message)
// })
const axios=require("axios")

axios.get('https://official-joke-api.appspot.com/random_joke')
.then((res)=>{
    console.log(res.data)
})
.catch((err)=>{
    console.log(err)
})