const canvas = document.getElementById('canvas');
const ctx = canvas.getContex('2d');
const img = new Image();
img.src = './media/flappy-bird-set.png';


/**General settings */
let gamePlaying = false;
const gravity = .5;
const speed = 6.2;
const size = [51, 36];
const jump = -11.5;
const cTenth = (canvas.width / 10);

let index = 0,
    bestScore = 0,
    currentScore = 0,
    pipes= [],
    flight,
    flyHeight;

const render = () => {
    index++;

    ctx.drawImage(img, 432,0, ...size, ((canvas.width / 2) - size[0] / 2), flyHeight, ...size);

    window.requestAnimationFrame(render);
}
img.onload = render;