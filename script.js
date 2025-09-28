const qrInput = document.getElementById("qr-input");
const qrButn = document.getElementById("qr-btn");
const qrImg = document.getElementById("qr-img");
const errorMsg = document.getElementById("error-msg");
const downloadBtn = document.getElementById("download-btn");
const loader = document.getElementById("loader");

console.log(qrButn, qrImg, qrInput, errorMsg, downloadBtn, loader);

qrButn.addEventListener("click", () => {
  const inputValue = qrInput.value.trim();
  if (!inputValue) {
    errorMsg.textContent = "Please enter a valid URL or text!";
    qrImg.src = "";
    downloadBtn.style.display = "none";
    loader.style.display = "none";
    return;
  }
  errorMsg.textContent = "";
  loader.style.display = "block";
  qrImg.style.display = "none";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`;
  qrImg.alt = `QR code for ${inputValue}`;

  qrImg.onload = () => {
    loader.style.display = "none";
    qrImg.style.display = "block";
    downloadBtn.style.display = "block";
  };
});

downloadBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = qrImg.src;
  link.download = "qr-code.png";
  link.click();
});
