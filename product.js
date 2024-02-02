async function getProduct(){
const resopnse = await fetch("https://dummyjson.com/products");
const data = await resopnse.json();
const products = data.products;

const result = products.map(function (e) {
    return `
    <div class="product">
    <img src="${e.thumbnail}">
    <h2> ${e.title} </h2>
    <p>${e.description}</p>
    <span> The Price is ${e.price} </span>
    </div>
    `;
    
}).join('');
document.querySelector(".products").innerHTML=result;
}
getProduct();
