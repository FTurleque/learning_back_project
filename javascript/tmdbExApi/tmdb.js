const apiTmdbKey = '5ebb1b942f94f22ec3952d2c39768486';

let baseURL = 'https://api.themoviedb.org/3/';
let configData = null;
let baseImageURL = null;



let getConfig = function () {
    let url = "".concat(baseURL,'configuration?api_key=', apiTmdbKey);
    fetch(url)
    .then((result) => {
        return result.json();
    })
    .then((data) => {
        // baseImageURL = data.images.secure_base_url;
        // configData = data.images;
        console.log('config', data);
        console.log('config fetched');
        runSearch('Jaws')
    })
    .catch(function(err){
        alert(err);
    })
}

let runSearch = function (keyword) {
    let url = "".concat(baseURL, 'search/movie?api_key=', apiTmdbKey, '&query=', keyword);
    fetch(url)
    .then(result => result.json())
    .then((data) => {
        // process the returned data
        document.getElementById('output').innerHTML = JSON.stringify(data, null, 4);

        // work with result array
    })
}

runSearch('Jaws')

document.addEventListener('DOMContentLoaded', getConfig); 