const left = document.querySelector(".aside-left")
const right = document.querySelector(".aside-right")
const overlay = document.querySelector(".overlay")
const overflow = document.querySelector(".overflow")
const bar = document.querySelector(".bars-menu")
const user = document.querySelector(".ussing")

bar.addEventListener("click", () => {
    left.classList.add("add")
    overlay.classList.add("add")
})

overlay.addEventListener("click", () => {
    left.classList.remove("add")
    overlay.classList.remove("add")
})


user.addEventListener("click", () => {
    right.classList.add("add")
    overflow.classList.add("add")
})

overflow.addEventListener("click", () => {
    right.classList.remove("add")
    overflow.classList.remove("add")
})