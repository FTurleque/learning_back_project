const API_KEY = '5ebb1b942f94f22ec3952d2c39768486';
const BASE_URL = 'https://api.themoviedb.org/3';
const searchURL = BASE_URL + '/search/movie?api_key=' + API_KEY;
const form = document.getElementById('form');
const search = document.getElementById('search');


const getMovie = async function(_keyword) {
    let url = searchURL + '&query=' + _keyword;
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json()
            console.log(data)
        } else {
            console.error('Retour du serveur : ', response.status)
        }
    } catch (error) {
        console.log(error);
    }
}

// getMovie('dune');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    if(searchTerm) {
        getMovie(searchTerm)
    }else{
        getMovie(API_URL);
    }

})
