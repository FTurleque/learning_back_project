
let createDivWithClass = function(className) {
    let div = document.createElement('div');
    div.setAttribute('class', className);
    return div;
}

let createAWithClass = function(className) {
    let a = document.createElement('a');
    a.setAttribute('class', className);
    return a;
}

let createH2WithClass = function(className) {
    let h2 = document.createElement('h2');
    h2.setAttribute('class', className);
    return h2;
}

let createImgClass = function(className) {
    let img = document.createElement('img');
    img.setAttribute('class', className);
    return img;
}

export {createDivWithClass, createAWithClass, createH2WithClass, createImgClass}