async function getCategory() {
    const response = await axios("https://dummyjson.com/products/categories");
    return response;

}

async function getProduct(){
    const response =await axios("https://dummyjson.com/products");
    return response;
}

displayProduct =async ()=> {
    const loader = document.querySelector(".products-loader");
    console.log(loader)
    try{
    const {data} = await getProduct();
    
    const result = data.products.map( product => `
        <div class="product-card" data-product-id=${product.id}>
                <img src="${product.thumbnail}"
                    alt=${product.description}>

                <div class="product-info">
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>

                    <div class="product-details">
                        <span class="price">$${product.price}</span>
                        <span class="rating">${product.rating}</span>
                    </div>

                    <p class="stock">${product.stock}</p>

                    <button type="button" data-action="view-details">
                        View Details
                    </button>
                </div>
            </div>
        `).join('');

        document.querySelector('[data-products]').innerHTML=result;}
        catch(error){
            document.querySelector('[data-products]').innerHTML=error;

        }
        finally{
            loader.classList.add('d-none');
        }

}
displayCategory = async () => {
    const loader = document.querySelector(".category-loader");
    console.log(loader);

    try{const { data } = await getCategory();


    const result = data.map(category => `
        <li><button type="button" data-category="beauty">${category.name}</button></li>
        `
    ).join('');
    document.querySelector('[data-category]').innerHTML = result;}
    catch(error){

         document.querySelector('[data-category]').innerHTML = error;

    }
    finally{
        loader.classList.add('d-none');

    }



}

displayCategory();
displayProduct();