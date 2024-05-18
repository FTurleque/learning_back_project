const api_key = 'api_key=5ebb1b942f94f22ec3952d2c39768486';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const french = '&language=fr-FR';
const url_discover = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + api_key + french;
debugger
let page = 1;
let datas={};
recurse().then(/*...*/)


function recurse() {
    debugger
    return new Promise(function(resolve, reject) {
        fetch(url_discover + page)
        .then(function(data) {
            collectData(page,data);
            page += 1;
            page++;
            return recurse()
        })
        .catch(function(error) {
            resolve()
        });
    })
}

function collectData(page,data){
    datas[page] = data;
}

console.log(datas);