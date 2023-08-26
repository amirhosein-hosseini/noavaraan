const navshow = () =>{
    document.getElementById("nav-list").classList.add("show")
    document.getElementById("nav-overlay").classList.add("active")
    document.body.style = "visibility:visable;height:100vh;width:100vw;overflow:hidden"
}
const navclose = () =>{
    document.getElementById("nav-list").classList.remove("show")
    document.getElementById("nav-overlay").classList.remove("active")
    document.body.style = "visibility:visable;height:initial;width:100%;overflow-x:hidden"
}

let value = document.querySelectorAll(".num");
console.log(value)
let inter = 5000;

value.forEach((valued) => {
    let start = 0;
    let end = parseInt(valued.getAttribute("data-value"));
    console.log(end)
    let duration = Math.floor(inter / end);
    console.log(duration)
    console.log(value.innerHTML)
    let counter = setInterval(function () {
        start +=1;
        valued.textContent = start;
        if (start == end){
            clearInterval(counter);
        }
    },duration)
})
