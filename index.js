
function myFunction(x) {
    x.classList.toggle("change");
}


let box = document.getElementById('box'),
    btn = document.querySelector('button');

btn.addEventListener('click', function () {
  box.classList.toggle('hidden');
}, false);