console.log("Hello world");

let todos = [
    { id: 1, text: "Chơi game", completed: true },
    { id: 2, text: "Nghe nhạc", completed: false },
    { id: 3, text: "Xem phim", completed: true }
];


// CRUD - Create, Read, Update, Delete

// READ - Lấy tất cả công việc ra giao diện HTML
const renderData = () => {
    // Lấy element thẻ cha chứa dữ liệu
    let listElement = document.getElementsByClassName("listMenu")[0];

    // Xóa hết nội dung cũ trong thẻ cha
    listElement.innerHTML = ``;

    todos.forEach((todo) => {
        // createElement - Tạo ra 1 thẻ HTML mới
        let itemElment = document.createElement("li");

        //Them nội dung vào thẻ HTML
        itemElment.innerHTML = `
        <div>
            <i> ${todo.text} </i>
            <button onclick="handleEditTodo(${todo.id})">Sửa</button>
            <button onclick="handleDeleteTodo(${todo.id})">Xóa</button>
        </div>
        `;

        // appendChild - Thêm 1 element con vào element cha - thêm vào DOM
        listElement.appendChild(itemElment);
    });

};

renderData();

// CREATE - Thêm công việc mới vào mảng todos
const handleAddTodo = () => {
    let inputElement = document.getElementById("input_todo");
    let newName = inputElement.value;
    console.log(newName);
    let newTodo = {
        id: Date.now(),
        text: newName,
        completed: false
    }
    todos.push(newTodo);
    renderData();
    inputElement.value = ``;
}

handleAddTodo();

let buttonAddElement = document.getElementsByTagName("button")[0];
buttonAddElement.addEventListener("click", handleAddTodo);

let inputElement = document.getElementById("input_todo");
inputElement.addEventListener("keydown", (event) => {
    console.log(event);
    if (event.key === "Enter") {
        handleAddTodo();
    }
});

// DELETE - Xóa công việc khỏi mảng todos
const handleDeleteTodo = (id) => {
    let index = todos.findIndex((todo) => {
        return todo.id === id;
    });
    todos.splice(index, 1);
    renderData();
};

// UPDATE - Sửa công việc trong mảng todos
const handleEditTodo = (id) => {
    let newUpdate = prompt("Nhập nội dung mới:");
    let index = todos.findIndex((todo) => {
        return todo.id === id;
    });
    todos[index].text = newUpdate;
    renderData();
};

