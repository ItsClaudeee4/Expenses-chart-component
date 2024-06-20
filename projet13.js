const static = document.querySelectorAll("#static")
const show = document.querySelectorAll("#show")
let x;
for (let i = 0; i < static.length; i++) {
    static[i].addEventListener("mouseenter",() =>{
        show[i].classList.remove("hidden")
       static[i].style.opacity ="0.5"
       static[i].style.transition = "all 0.3s "
       static[Math.abs(i+1)].style = ""
       static[Math.abs(i-1)].style = ""
    })
    static[i].addEventListener("mouseleave",() =>{
        show[i].classList.add("hidden")
       static[i].style.opacity ="1"
       static[Math.abs(i+1)].style = ""
       static[Math.abs(i-1)].style = ""
    })
    
}