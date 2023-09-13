"use strict";

// let elem =  document.getElementsByTagName ("h1")
// let elem =  document.getElementsByClassName ("test ")

// let elem = document.getElementById("head")

// let elem = document.querySelector("#head")
// let elems = document.querySelectorAll("h1")

// console.log(elems);

// let span = document.querySelector(".header .header-item span")

// let elems = document.querySelectorAll(".header p")

// console.log(span);

// console.log(p);
// console.log(span.innerText);
// console.log(span.innerHTML);

// span.innerText = "Azerbaycan"

// let elem = document.getElementById("text")

// console.log(elem.innerText);

// console.log(elems)

// elems.forEach(element => {
//     console.log(element);
// });

// for (const item of elems) {
//     console.log(item);
// }

// for (let i = 0; i < elems.length; i++) {
//   console.log(elems[i].innerText); 
// }

// for (let i = 0; i < elems.length; i++) {
//      if(elems[i].innerText == "salam"){
//         elems[i].style.backgroundColor = "green"
//      }else{
//         elems[i].style.backgroundColor = "red"
//      }
//   }

//  let elems = document.querySelectorAll("h1")


// for (const elem of h1) {

//     elem.style.color = "magenta"
//     elem.style.marginTop = "100px"
// }

// elems[0].style.color = "magenta"

// let elem = document.getElementById("head");

// elem.innerHTML = "<a>salamlar millet<a/>"

// elem.innerText = "<a>salamlar millet<a/>"

// elem.className = "header-color"

// elem.classList.add("header-color");
// elem.classList.add("mx-5")
// elem.classList.remove("mt-5")

// let button = document.querySelector("button");

// // console.log(button.classList.contains("btn"))
// if(button.classList.contains("btn-primary")){
//     button.classList.remove("btn-primary");
//     button.classList.add("btn-success");
// }else{
//     button.classList.add("btn-warning")
// }

// let button = document.querySelector("button");

// button.onclick = function(){
//     alert("hello world")
// }

// button.onclick = function(){
//     alert("bye bye")
// }

// button.addEventListener("click",function(){
//     // alert("hello world")
//     console.log("hello world1");
// })

// button.addEventListener("click",function(){
//     // alert("bye bye")
//     console.log("hello world2");
// })

// button.addEventListener("click",function(){
//     // alert("vay vay")
//     console.log("hello world3");
// })

// let btnOn = document.querySelector(".buttons button:nth-child(1)");
// let btnOff = document.querySelector(".buttons button:nth-child(2)");
// let body = document.querySelector("body");


// btnOn.addEventListener("click",function(){
//     if(!body.classList.contains("body-on")){
//         body.classList.add("body-on");
//         body.classList.remove("body-off")
//     }
// })

// btnOff.addEventListener("click",function(){
//     if(!body.classList.contains("body-off")){
//         body.classList.add("body-off");
//         body.classList.remove("body-on")
//     }
// })


let body = document.querySelector("body");
let button = document.querySelector(".buttons button");


button.addEventListener("click", function () {

    if (body.classList.contains("body-off")) {
        body.classList.remove("body-off");
        this.innerText = "on"
    } else {
        body.classList.add("body-off");
        this.innerText = "off"
    }

})



