
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

let createH1WithClass = function(className) {
    let h1 = document.createElement('h1');
    h1.setAttribute('class', className);
    return h1;
}

let createImgWithClass = function(className) {
    let img = document.createElement('img');
    img.setAttribute('class', className);
    return img;
}

export {createDivWithClass, createAWithClass, createH1WithClass, createImgWithClass}