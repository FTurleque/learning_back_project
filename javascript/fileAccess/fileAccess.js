// Permet de recupérer plusieurs fichiers avec nom + extension, size, type
const fileSelector = document.getElementById('file-selector');

// Manipulation des balises html
// let titleElement = document.querySelector('.title');
// let typeElement = document.querySelector('.typeOfMovie');
// let sizeElement = document.querySelector(('.sizeMovie'));
// let namefile,
//     taille,
//     typeOfMovie;

fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList);
    console.log(fileList[0].name)
    // placeElement(fileList);


});

function placeElement(_fileList) {
    for (const property in _fileList) {
        console.log(`${property}: ${_fileList[property]}`);
        if (_fileList.hasOwnProperty(property)) {
            namefile = _fileList[property].name;
            taille = _fileList[property].size;
            typeOfMovie = _fileList[property].type;
    
            let liElementTitle = document.createElement('li');
            let liElementSize = document.createElement('li');
            let liElementTypeOfMovie = document.createElement('li');
    
    
            liElementTitle.textContent = `${namefile}`;
            liElementTypeOfMovie.textContent = `${typeOfMovie}`;
            liElementSize.textContent = `${taille}`;
    
            titleElement.appendChild(liElementTitle);
            typeElement.appendChild(liElementTypeOfMovie);
            sizeElement.appendChild(liElementSize);
    
          }
    }

}