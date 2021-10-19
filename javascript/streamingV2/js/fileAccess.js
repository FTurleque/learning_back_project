// Permet de recupérer plusieurs fichiers avec nom + extension, size, type
const fileSelector = document.getElementById('file-selector');

// Manipulation des balises html
fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList);
    console.log(fileList[0].name)
});

