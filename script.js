const products=[
{name:"Cotton T-Shirt",cat:"clothes",price:499,icon:"👕"},
{name:"Fashion Shirt",cat:"clothes",price:799,icon:"👔"},
{name:"Blue Jeans",cat:"clothes",price:1199,icon:"👖"},
{name:"Running Shoes",cat:"shoes",price:1499,icon:"👟"},
{name:"Casual Sneakers",cat:"shoes",price:1799,icon:"👟"},
{name:"Hoodie",cat:"clothes",price:999,icon:"🧥"},
{name:"Cap",cat:"all",price:299,icon:"🧢"},
{name:"Sports Shoes",cat:"shoes",price:1999,icon:"👟"}];
let cart=[];
function render(list=products){document.getElementById("grid").innerHTML=list.map((p,i)=>`<div class="card"><div class="pic">${p.icon}</div><h3>${p.name}</h3><div class="price">₹${p.price}</div><button onclick="add(${i})">Add to Cart</button></div>`).join("")}
function add(i){cart.push(products[i]);renderCart()}
function renderCart(){document.getElementById("count").textContent=cart.length;document.getElementById("cart").innerHTML=cart.length?cart.map(p=>`<div class="row"><span>${p.name}</span><b>₹${p.price}</b></div>`).join(""):"<p>Cart is empty.</p>"}
function searchProducts(){let q=document.getElementById("search").value.toLowerCase();render(products.filter(p=>(p.name+" "+p.cat).toLowerCase().includes(q)))}
function pay(){alert("Demo only: connect a verified payment gateway before accepting real payments.");}
render();renderCart();