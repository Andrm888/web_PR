function generateQR() {
  const input = document.getElementById('qr-input').value;
  const qrCodeContainer = document.getElementById('qr-code');
  const downloadBtn = document.getElementById('download-btn');

  qrCodeContainer.innerHTML = '';
  if (input.trim() === '') {
    alert('Будь ласка, введіть текст або URL');
    return;
  }

  const qr = new QRCode(qrCodeContainer, {
    text: input,
    width: 256,
    height: 256
  });

  // Затримка, щоб зображення встигло згенеруватись
  setTimeout(() => {
    downloadBtn.style.display = 'inline-block';
  }, 500);
}

function downloadQR() {
  const img = document.querySelector('#qr-code img');
  if (!img) return;

  const link = document.createElement('a');
  link.href = img.src;
  link.download = 'qr-code.png';
  link.click();
}

function generateQRFromFile() {
  const fileInput = document.getElementById('upload-file');
  const file = fileInput.files[0];

  if (file) {
    const fileURL = URL.createObjectURL(file);
    const container = document.getElementById('qr-file-result');
    container.innerHTML = '';

    new QRCode(container, {
      text: fileURL,
      width: 256,
      height: 256
    });
  } else {
    alert("Будь ласка, виберіть файл");
  }
}
