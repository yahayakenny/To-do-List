const search = document.getElementById("search");
const display = document.getElementById("display");
const btn = document.getElementById("btn");
let ul = document.getElementById("ul");
const clear = document.getElementById("clear");


const handleClick =() => {
  
   let li = document.createElement("li");
   li.innerHTML = `<li>${search.value}<li>`
   ul.appendChild(li);
   search.value = ""
}

const handleClear = () => {
  return ul.innerHTML = ""
}



btn.addEventListener("click", handleClick)
clear.addEventListener("click", handleClear)
