const inputBox = document.getElementById("input-box"); //Chọn phần tử có Id "input-box"//
const listContainer = document.getElementById("list-container"); //chọn phần tử có ID là "list-container"//

// Gọi hàm task
function addTask(){
    // Kiểm tra input
    // Nếu input trống
    if(inputBox.value === ''){
        // Hiện ra thông báo cảnh báo
        alert("You must write something");
    }
    // Nếu input được nhập dữ liệu
    else{
        // Tạo biến để chứa phần tử nhiệm vụ
        let li = document.createElement("li");
        // Gán giá trị được nhập vào inputBox vào "li
        li.innerHTML = inputBox.value;
        // Hiện thị dữ liệu mới được nhập vào list container
        listContainer.appendChild(li);
        // Gọi hàm span
        let span = document.createElement("span");
        // Gán ký tự x để xoá nhiệm vụ - khi xoá xuất hiện dấu gạch ngang
        span.innerHTML = "\u00d7";
        // Thêm span vào phần tử để hiển thị
        li.appendChild(span);
    }
    // Xoá nội dung ở inputBox sau khi hiện thị task
    inputBox.value = "";
    // Lưu dữ liệu vào local Storage
    saveData();
}
// Sự kiện xảy ra khi người dùng click vào các phần tử của listContainer
listContainer.addEventListener("click", function(e){
    // Nếu click vào phần tử trong list
    if(e.target.tagName === "LI"){
        // Dấu tick và gạch ngang hiện lên
        e.target.classList.toggle("checked");
        saveData();
    }
    // Nếu click vào dấu x
    else if(e.target.tagName === "SPAN"){
        // Xoá task khỏi list hiển thị
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Lưu trữ dữ liệu
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
// Hiển thị dữ liệu từ localStorage
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();