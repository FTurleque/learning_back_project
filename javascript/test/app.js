const outer = document.querySelector('.outer');
const middle = document.querySelector('.middle');
const inner1 = document.querySelector('.inner1');
const inner2 = document.querySelector('.inner2');

const capture = {
  capture: true
};
const noneCapture = {
  capture: false
};
const once = {
  once: true
};
const noneOnce = {
  once: false
};
const passive = {
  passive: true
};
const nonePassive = {
  passive: false
};

outer.addEventListener('click', onceHandler, once);
outer.addEventListener('click', noneOnceHandler, noneOnce);
middle.addEventListener('click', captureHandler, capture);
middle.addEventListener('click', noneCaptureHandler, noneCapture);
inner1.addEventListener('click', passiveHandler, passive);
inner2.addEventListener('click', nonePassiveHandler, nonePassive);

function onceHandler(event) {
  console.log('extérieur, once');
}
function noneOnceHandler(event) {
  console.log('extérieur, none-once, default');
}
function captureHandler(event) {
  debugger
  // event.stopImmediatePropagation();
  console.log('milieur, capture');
}
function noneCaptureHandler(event) {
  console.log('milieur, none-capture, default');
}
function passiveHandler(event) {
  // Impossible d'utiliser preventDefault à l'intérieur de l'invocation d'un écouteur d'évènements passif.
  event.preventDefault();
  console.log('intérieur1, passive, nouvelle page ouverte');
}
function nonePassiveHandler(event) {
  event.preventDefault();
  // event.stopPropagation();
  console.log('intérieur2, none-passive, default, nouvelle page non ouverte');
}
