let formButton = document.getElementById('form-button');
let categoryForm = document.getElementById('category-form');

formButton.addEventListener('click', () => {
    if (categoryForm.classList.contains('visible') === false) {
        categoryForm.classList.toggle('visible');
        formButton.innerHTML ="&#x2796; Ẩn biểu mẫu";
    } else {
        categoryForm.classList.toggle('visible');
        formButton.innerHTML ="&#x2795; Thêm nhóm hàng";
    }
});