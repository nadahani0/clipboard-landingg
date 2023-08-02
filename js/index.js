// document.getElementById("h1").innerHTML ="hello world"
// document.getElementById("para1").innerHTML="para1"
// document.getElementById("bb").innerHTML="welcome inn h2"
// let para =document.getElementById("para")
// para.style.color="red"
// para.style.fontSize="40px"
// para.style.fontStyle="italic"

document.getElementById("con").style.backgroundColor ="blue"

function my_fun(){
    document.getElementById("para").style.color="red"
    document.getElementById("con").style.fontSize="30px"
}
document.getElementById("btn").addEventListener("click" ,my_fun)
