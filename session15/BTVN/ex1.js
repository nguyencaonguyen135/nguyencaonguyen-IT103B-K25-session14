const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lua", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

let productList = document.getElementById("product-list");


const renderData = () => {
    productList.innerHTML = ``;
    products.forEach((product) => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
            <span class="product-name">Tên sản phẩm: ${product.name} | </span>
            <span class="product-price">Giá: ${product.price} VND</span>
        `;
        productList.appendChild(div);
    });
};

renderData();