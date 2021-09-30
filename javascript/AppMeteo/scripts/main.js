import tabJoursEnOrdre from './Utilitaire/gestionTemps.js';

console.log("DEPUIS MAIN JS:" + tabJoursEnOrdre);

const CLEAFAPI = '82503fff55782a7fdba3c9d424557cc9';
let resultatsAPI;

const temps = document.querySelector('.temps');
const temperature = document.querySelector('.temperature');
const localisation = document.querySelector('.localisation');
const heure = document.querySelectorAll('.heure-nom-prevision');
const tempPourH = document.querySelectorAll('.heure-prevision-valeur');

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        // console.log(position);
        let long = position.coords.longitude;
        let lat = position.coords.latitude;
        AppelAPI(long,lat);
    }, () => {
        alert(`Vous avez refusé la géolocalisation, l'application ne peut pas fonctionner, veuillez l'activer.!`)
    })
}

function AppelAPI(long, lat) {
    /** La méthode fetch permet de faire une requête HTTP pour aller prendre des données de cette API, elle retourne une promesse*/
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${CLEAFAPI}`)
    /** On reçoie des données qu'il faut rendre lisible */
    .then((Reponse) => {
        /** On va trransformer les données reçu pour qu'elles soient lisible, on les passe au format json */
        return Reponse.json();
    })
    .then((data) => {
        console.log(data);

        resultatsAPI = data;

        temps.innerText = resultatsAPI.current.weather[0].description;
        temperature.innerText = `${Math.trunc(resultatsAPI.current.temp)}°`;
        localisation.innerText = resultatsAPI.timezone;


        /** Les heures par tranche de 3 avec leur température */

        let heureActuelle = new Date().getHours();

        for (let i = 0; i < heure.length; i++) {
            let heureIncr = heureActuelle + i * 3;

            if(heureIncr > 24) {
                heure[i].innerText = `${heureIncr - 24} h`;
            } else if (heureIncr === 24) {
                heure[i].innerText = "00 h";
            } else {
                heure[i].innerText = `${heureIncr} h`;
            }
        }

        /** Temp pour 3 h */
        for (let j = 0; j < tempPourH.length; j++) {
            tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)}°`
        }
    })
}