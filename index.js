
function myFunction(x) {
  x.classList.toggle("change");
}



let btn = document.querySelector('.hamburger');
let box = document.querySelectorAll('.item'), i;

btn.addEventListener('click', function () {
  for(i = 0; i < box.length; ++i){
    box[i].classList.toggle('nascondi');
  }
  

}, false);

// let box = document.getElementById('box'),
//     btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//   box.classList.toggle('hidden');
// }, false);