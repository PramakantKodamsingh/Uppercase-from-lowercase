let btn=document.getElementById("gt")
let btn1=document.getElementById("scrl")
let a=document.getElementById("box")
let b=document.getElementById("ser")
function get(){
    a.innerHTML=b.value.toUpperCase()
}
function refresh(){
    b.value=''

}
btn.addEventListener('click',get)
btn1.addEventListener('click',refresh)
