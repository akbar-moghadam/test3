let x = 10;
const y = false;
let s = "bahram";
let k = [2, 3];
let p;
let f = x + s;

const add = document.getElementById("add");
const show = document.getElementById("shownumber");
add.addEventListener("click", function () {
    x = x + 1;
    show.textContent = x;
    if (x % 2 == 0) {
        show.classList.add("zoj");
        show.classList.remove("fard");
        console.log("zoj");
    } else {
        show.classList.add("fard");
        show.classList.remove("zoj");
        console.log("fard");
    }
    for (let index = 20; index < 23; index++) {
        const pa = document.createElement("p");
        pa.innerText = index;
        show.appendChild(pa);
    }
});
