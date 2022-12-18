// document.querySelector("#center").addEventListener("click",function(){
//     document.querySelector("#fs").style.opacity=1;
//     document.querySelector("#box").style.top="20%";  
//     document.querySelector("#fs").style.pointerEvents="initial";
// });
// document.querySelector("#sec").addEventListener("click",function(){
//     document.querySelector("#fs").style.opacity=0;
//     document.querySelector("#box").style.top="10%"; 
//     document.querySelector("#box").style.pointerEvents='none';
// });
document.getElementById("center").addEventListener("click",function() {
    document.getElementById("fs").style.opacity = "1";
    document.getElementById("box").style.top = "20%";
    document.getElementById("fs").style.pointerEvents = "initial"
  
});

document.getElementById("sec").addEventListener("click",function() {
    document.getElementById("fs").style.opacity = "0";
    document.getElementById("box").style.top = "-10%";
    document.getElementById("fs").style.pointerEvents = "none"
  
});


