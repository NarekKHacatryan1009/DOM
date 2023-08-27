let inp = document.getElementById("text")
let div = document.getElementsByClassName("box")[0]
// let btn = document.getElementsByClassName("btn")[0] //1
// document.getElementsByClassName("btn")[0].onclick = function(){ //2
//     div.style.backgroundColor = "red"
// }
let btn = document.getElementsByClassName("btn")[0] //3
let btn1 = document.getElementsByClassName("btn1")[0]
let btn2 = document.getElementsByClassName("btn2")[0]

// function buttn(){
//     div.style.backgroundColor = "red"
//     div.style.width = "200px"
//     div.style.height = "200px"
//     div.style.marginTop = "20px"
//     div.style.marginLeft = "20px"
// }

btn.addEventListener("click",function(){
    if(inp.value.length > 4){
    div.style.backgroundColor = "green"
    div.style.border = "solid green"
    inp.style.border = "solid green"
    }else if(inp.value.length < 4){
        div.style.backgroundColor = "red"
        div.style.border = "solid red"
        inp.style.border = "solid red"
    }
})

// btn1.addEventListener("click",function(){
//     div.style.backgroundColor = "red"
// })

// btn2.addEventListener("click",function(){
//     div.style.backgroundColor = "white"
// })

















