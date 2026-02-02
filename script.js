document.getElementById('uploadForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData();
  const fileInput = document.getElementById('imageInput');

  if (fileInput.files.length === 0) {
    alert('ದಯವಿಟ್ಟು ಚಿತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ!');
    return;
  }

  formData.append('file', fileInput.files[0]);

  fetch('http://localhost:5000/evaluate', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('result').innerText = data.result || 'ಫಲಿತಾಂಶ ಲಭ್ಯವಿಲ್ಲ.';
  })
  .catch(error => {
    document.getElementById('result').innerText = 'ದೋಷ: ಮೌಲ್ಯಮಾಪನ ವಿಫಲವಾಗಿದೆ.';
    console.error('Error:', error);
  });
});
    