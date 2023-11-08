const btn = document.querySelector('.submitBtn');
const downloadButton = document.getElementById('download-button'); // Add a download button

btn.onclick = () => {
    const urlBox = document.querySelector('.urlBox').value; // Move this inside the click event handler
    const qrCodeDiv = document.getElementById('qrCode');

    if (urlBox === '') {
        alert('Please enter some text or a URL to generate a QR code.');
    }


    qrCodeDiv.innerHTML = '';
    const qrcode = new QRCode(qrCodeDiv, {
        text: urlBox,
        width: 128,
        height: 128,

        
    });
    downloadButton.style.display = 'block';

    downloadButton.addEventListener('click', function () {
        const canvas = qrCodeDiv.querySelector('canvas');
        if (canvas) {
            const url = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = url;
            link.download = 'qrcode.png';
            link.click();
        }
    });
}









