const uploadInput = document.getElementById('upload');
const image = document.getElementById('image');
const brightnessInput = document.getElementById('brightness');
const contrastInput = document.getElementById('contrast');
const grayscaleInput = document.getElementById('grayscale');
const hueInput = document.getElementById('hue');
const resetButton = document.getElementById('reset');
const downloadButton = document.getElementById('download');

// Handle image upload
uploadInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        image.src = e.target.result;
        downloadButton.disabled = false; // Enable download button
    };

    reader.readAsDataURL(file);
});

// Handle brightness change
brightnessInput.addEventListener('input', function () {
    const brightnessValue = brightnessInput.value;
    image.style.filter = `brightness(${brightnessValue}%)`;
});

// Handle contrast change
contrastInput.addEventListener('input', function () {
    const contrastValue = contrastInput.value;
    image.style.filter = `contrast(${contrastValue}%)`;
});

// Handle grayscale change
grayscaleInput.addEventListener('input', function () {
    const grayscaleValue = grayscaleInput.value;
    image.style.filter = `grayscale(${grayscaleValue}%)`;
});

// Handle hue change
hueInput.addEventListener('input', function () {
    const hueValue = hueInput.value;
    image.style.filter = `hue-rotate(${hueValue}deg)`;
});

// Reset all filters
resetButton.addEventListener('click', function () {
    brightnessInput.value = 100;
    contrastInput.value = 100;
    grayscaleInput.value = 0;
    hueInput.value = 0;
    image.style.filter = 'none';
    //   downloadButton.disabled =; // Disable download button
});

// Handle download button click
downloadButton.addEventListener('click', function () {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    context.filter = image.style.filter;
    context.drawImage(image, 0, 0);
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'edited_image.png';
    link.click();
});






