
let data = 123;

// document.getElementById("btn").addEventListener("click",function(){
//     document.getElementById("para").innerHTML="Changed "+data;
// })

document.getElementById("btn").addEventListener("click",function(){
    document.getElementById("para").innerHTML=`<h1>Changed ${data}</h1>`
})