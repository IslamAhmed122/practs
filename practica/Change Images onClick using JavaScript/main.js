const image_container = document.querySelector('.image_container img');
const image_list = document.querySelector('.image_list');

// إنشاء العنصر الجديد للصورة الأصلية
const originalImage = document.createElement('img');
originalImage.setAttribute('src', image_container.getAttribute('src'));

// إضافة الصورة الأصلية إلى نهاية قائمة الصور
image_list.appendChild(originalImage);

// إضافة مستمعي الأحداث للصور في القائمة
const images = document.querySelectorAll('.image_list img');
images.forEach((img, index) => {
    img.addEventListener('click', function () {
        const imgSrc = img.getAttribute('src');
        image_container.setAttribute('src', imgSrc);
    });
});
