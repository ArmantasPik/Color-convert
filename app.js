const colorBtn = document.querySelector('#colorBtn');
const mainHeading = document.querySelector('#mainHeading');
const colorPicker = document.querySelector('#colorPicker');

colorBtn.addEventListener('click', function () {
    const currentColor = colorPicker.value;
    console.log(currentColor);
    document.body.style.backgroundColor = currentColor;
    mainHeading.textContent = `Hex ${currentColor}`;
})