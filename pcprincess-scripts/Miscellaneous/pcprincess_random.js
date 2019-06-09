

/* ------------------ Body.Background Random Color ------------------ */
let btn = document.querySelector('button');
function random(num) {
  return Math.floor(Math.random()* (num + 1));
}
btn.onclick = function () {
  document.body.style.backgroundColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
};
btn.addEventListener('click', function () {
  document.body.style.backgroundColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
});
/* ------------------ Body.Background Random Color ------------------ */

