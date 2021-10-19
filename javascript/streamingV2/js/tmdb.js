const API_KEY = '5ebb1b942f94f22ec3952d2c39768486';
const BASE_URL = 'https://api.themoviedb.org/3';
const searchURL = BASE_URL + '/search/movie?api_key=' + API_KEY;


const poster_URL = 'https://image.tmdb.org/t/p/w500';

const form = document.getElementById('form');
const search = document.getElementById('search');

form.addEventListener('submit', (e) => {
    // e.preventDefault();

    const searchTerm = search.value;
    if(searchTerm) {
        getMovies(searchURL + '&query=' + searchTerm)
    }else{
        console.log('Pas de nom de film.')
    }

})


// let lastUrl = '';
// let url = '';

function getMovies(_url) {
    // lastUrl = url;
    let url = _url;
    console.log(url);
      fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        if(data.results.length !== 0){
            showMovies(data.results);
        }else{
            console.log('Erreur pas de données !');
        }
         
    })
  
}

function showMovies(data) {
    // main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview, id} = movie;
        const titleContainer = document.querySelector('.title_container');
        const titleElement = document.createElement('h1');
        titleElement.className = 'title';
        titleElement.textContent = `${title}`;
        titleContainer.appendChild(titleElement);
        // const movieEl = document.createElement('div');
        // movieEl.classList.add('movie');
        // movieEl.innerHTML = `
        //      <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">
        //     <div class="movie-info">
        //         <h3>${title}</h3>
        //         <span class="${getColor(vote_average)}">${vote_average}</span>
        //     </div>
        //     <div class="overview">
        //         <h3>Overview</h3>
        //         ${overview}
        //         <br/> 
        //         <button class="know-more" id="${id}">Know More</button
        //     </div>
        
        // `

        // main.appendChild(movieEl);

    })
}

