async function getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const products = data.products;
    console.log(products);

    const container = document.getElementById("products-container");
    
    const productCard = products.map(product => `
        <div>
          
          <img src="${product.thumbnail}" alt="${product.title}" />
          <h1 class="text-amber-700">${product.title}</h1>
        </div>
    `).join("");

    container.innerHTML = productCard;
}

getProducts();