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

const createProductItem = (product) => {
    const li = document.createElement("li");
    li.className = "product-item";
    li.innerHTML = `
        <span class="product-name">${product.name}</span>
        <span class="product-price">${product.price.toLocaleString("vi-VN")} VND</span>
        <button class="delete-btn">Xóa</button>
    `;

    li.querySelector(".delete-btn").addEventListener("click", () => {
        if (confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
            productList.removeChild(li);
        }
    });

    return li;
};

const renderData = () => {
    productList.innerHTML = "";
    products.forEach((product) => {
        productList.appendChild(createProductItem(product));
    });
};

productForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = productNameInput.value.trim();
    const price = Number(productPriceInput.value);

    if (!name || !price) return;

    const newProduct = { name, price };
    productList.appendChild(createProductItem(newProduct));

    productNameInput.value = "";
    productPriceInput.value = "";
});

renderData();