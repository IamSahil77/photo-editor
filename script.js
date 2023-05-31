const uploadInput = document.getElementById('upload');
const fileUploadLabel = document.getElementById('fileUploadLabel');
const image = document.getElementById('image');
const brightnessInput = document.getElementById('brightness');
const contrastInput = document.getElementById('contrast');
const grayscaleInput = document.getElementById('grayscale');
const sepiaInput = document.getElementById('sepia');
const hueInput = document.getElementById('hue');
const resetButton = document.getElementById('reset');
const downloadButton = document.getElementById('download');

// Handle image upload
uploadInput.addEventListener('change', function (event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    image.src = e.target.result;
    fileUploadLabel.style.display = 'none';
    applyFilters();
    downloadButton.disabled = false; // Enable download button
  };

  reader.readAsDataURL(file);
});

// Handle input changes
brightnessInput.addEventListener('input', applyFilters);
contrastInput.addEventListener('input', applyFilters);
grayscaleInput.addEventListener('input', applyFilters);
sepiaInput.addEventListener('input', applyFilters);
hueInput.addEventListener('input', applyFilters);

// Apply filters
function applyFilters() {
  const brightnessValue = brightnessInput.value;
  const contrastValue = contrastInput.value;
  const grayscaleValue = grayscaleInput.value;
  const sepiaValue = sepiaInput.value;
  const hueValue = hueInput.value;

  image.style.filter = `brightness(${brightnessValue}%)
                            contrast(${contrastValue}%)
                            grayscale(${grayscaleValue}%)
                            sepia(${sepiaValue}%)
                            hue-rotate(${hueValue}deg)`;
}

// Reset all filters
resetButton.addEventListener('click', function () {
  brightnessInput.value = 100;
  contrastInput.value = 100;
  grayscaleInput.value = 0;
  sepiaInput.value = 0;
  hueInput.value = 0;
  applyFilters();
  // downloadButton.disabled = true; // Disable download button
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
