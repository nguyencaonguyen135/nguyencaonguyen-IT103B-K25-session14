const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

const productList = document.getElementById("product-list");
const productForm = document.getElementById("product-form");
const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");


const formatPrice = (price) => price.toLocaleString("vi-VN") + " VND";

const createProductItem = (product) => {
    const li = document.createElement("li");
    li.className = "product-item";
    li.innerHTML = `
        <span class="product-name">Tên sản phẩm: ${product.name} | </span>
        <span class="product-price">Giá: ${formatPrice(product.price)}</span>
        <button class="edit-price-btn">Sửa giá</button>
    `;

    li.querySelector(".edit-price-btn").addEventListener("click", () => {
        const input = prompt("Nhập giá mới (VND):");
        if (input === null) 
            return;
        const newPrice = Number(input);
        if (!newPrice || newPrice <= 0)
            return;
        li.querySelector(".product-price").textContent = "Giá: " + formatPrice(newPrice);
    });

    return li;
};

const renderData = () => {
    productList.innerHTML = "";
    products.forEach((product) => {
        productList.appendChild(createProductItem(product));
    });
};

renderData();

productForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = productNameInput.value.trim();
    const price = Number(productPriceInput.value);

    if (!name || !price) 
        return;

    productList.appendChild(createProductItem({ name, price }));

    productNameInput.value = "";
    productPriceInput.value = "";
});