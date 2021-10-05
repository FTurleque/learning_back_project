const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const img = new Image();
img.src = './media/flappy-bird-set.png';


/**General settings */
let gamePlaying = false;
const gravity = .5;
const speed = 6.2;
const size = [51, 36];
const jump = -11.5;
const cTenth = (canvas.width / 10);

/**Pipe setting */
const pipeWidth = 78;
const pipeGap = 270;
const pipeLoc = () => (Math.random() * ((canvas.height - (pipeGap + pipeWidth)) - pipeWidth)) + pipeWidth;

let index = 0,
    bestScore = 0,
    currentScore = 0,
    pipes = [],
    flight,
    flyHeight;

/** On va générer les tuyaux */
const setup = () => {
    currentScore = 0;
    flight = jump;
    flyHeight = (canvas.height / 2) - (size[1] / 2);

    pipes = Array(3).fill().map((a, i) => [canvas.width + (i * (pipeGap + pipeWidth)), pipeLoc()]);
    // console.log(pipes);
}

const render = () => {
    index++;
    /** On va implémenter le background */
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height, -((index * (speed / 2)) % canvas.width) + canvas.width, 0, canvas.width, canvas.height);
    /** La duplication de l'image va permettre de faire que les 2 images se suivent et que l'nimation se face */
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height, -((index * (speed / 2)) % canvas.width), 0, canvas.width, canvas.height);

    if (gamePlaying) {
        /** Positionnement de l'oiseau au lancement du jeu */
        ctx.drawImage(img, 432, Math.floor((index % 9) / 3) * size[1], ...size, cTenth, flyHeight, ...size);
        flight += gravity;
        flyHeight = Math.min(flyHeight + flight, canvas.height - size[1]);
    } else {
        /** On va definir l'emplacement de l'oiseau ainsi que la photo qui va être utilisé ce qui anime l'oiseau */
        ctx.drawImage(img, 432, Math.floor((index % 9) / 3) * size[1], ...size, ((canvas.width / 2) - size[0] / 2), flyHeight, ...size);
        flyHeight = (canvas.height / 2) - (size[1] / 2);

        /** On va ecrire dans le canvas */
        ctx.fillText(`Meilleur score : ${bestScore}`, 55, 245);
        ctx.fillText('Cliquez pour jouer', 48, 535)
        ctx.font = "bold 30px courier";
    }

    /** Pipe display */
    if (gamePlaying) {
        pipes.map(pipe => {
            pipe[0] -= speed;

            /** Top image img, ou on va chercher l'image ( , ), la taille de l'image ( , ), ou on veut placer l'image ( , , , ) */
            ctx.drawImage(img, 432, 588 - pipe[1], pipeWidth, pipe[1], pipe[0], 0, pipeWidth, pipe[1]);

            /** Bottom pipe */
            ctx.drawImage(img, 432 + pipeWidth, 108, pipeWidth, canvas.height - pipe[1] + pipeGap, pipe[0], pipe[1] + pipeGap, pipeWidth, canvas.height - pipe[1] + pipeGap);
        })
    } 

    window.requestAnimationFrame(render);
}

setup();
img.onload = render;
document.addEventListener('click', () => gamePlaying = true);
window.onclick = () => flight = jump;