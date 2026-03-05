
let cart=[]
let total=0

function addToCart(name,price){
cart.push({name,price})
total+=price
updateCart()
}

function updateCart(){
let list=document.getElementById("cart-items")
let count=document.getElementById("cart-count")
let totalEl=document.getElementById("total")

list.innerHTML=""

cart.forEach(item=>{
let li=document.createElement("li")
li.innerText=item.name+" - $"+item.price
list.appendChild(li)
})

count.innerText=cart.length
totalEl.innerText=total
}

function toggleCart(){
document.getElementById("cart").classList.toggle("open")
}

function checkout(){
if(cart.length===0){
alert("Корзина пустая")
return
}

alert("Оплата успешно выполнена! (демо)")
cart=[]
total=0
updateCart()
}

function filterProducts(category){
let products=document.querySelectorAll(".card")

products.forEach(p=>{
if(category==="all"){
p.style.display="block"
}else{
p.style.display=p.dataset.category===category?"block":"none"
}
})
}
