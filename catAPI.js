
// let naam=prompt("Enter the name of an amimal")
// let div=document.getElementsByTagName("div")
// // b.textContent=naam
// const URL="https://v2.jokeapi.dev/joke/Dark"
// async function getData(){
//     let response=await fetch(URL)
//     let data=await response.json()
//     console.log(data)
//     div[1].innerHTML=data.setup+data.delivery
// }
// console.log(getData())
let btn=document.getElementById("gt")
let a=document.getElementById("box")
let b=document.getElementById("ser")
function get(){
    a.innerHTML=b.value.toUpperCase()
}
btn.addEventListener('click',get)





