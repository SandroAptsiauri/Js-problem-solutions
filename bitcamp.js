const btn = document.querySelector(".button")
const fName = document.getElementById("inputField")
const form = document.querySelector("form")
const para = document.querySelector("p")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(fName.value.length !== 0){
        alert("Form Submited")
        para.style.display = "none"
    } else {
        para.style.display = "block"
    }
})

