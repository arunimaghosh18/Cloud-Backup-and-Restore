function uploadFile() {
  const form = document.getElementById('uploadForm');
  const formData = new FormData(form);

  fetch('/upload', {
    method: 'POST',
    body: formData
  })
    .then(response => response.text())
    .then(message => {
      alert(message);
      fetchFiles();
    })
    .catch(error => console.error('Error uploading file:', error));
}

function fetchFiles() {
  fetch('/files')
    .then(response => response.json())
    .then(files => {
      const fileList = document.getElementById('fileList');
      fileList.innerHTML = '';
      files.forEach(file => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="/download/${file}">${file}</a>`;
        fileList.appendChild(li);
      });
    })
    .catch(error => console.error('Error fetching files:', error));
}
