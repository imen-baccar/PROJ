let list =  JSON.parse(localStorage.getItem("panier"))

let container = document.querySelectorAll('.product-list-panier')[0]
let div=document.createElement('div')
div.innerHTML=list
container.appendChild(div)