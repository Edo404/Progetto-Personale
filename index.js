function myFunction(x) {
  x.classList.toggle("change");
}

let btn = document.querySelector('.hamburger');
let box = document.querySelectorAll('.item'), i;

btn.addEventListener('click', function () {
  for(i = 0; i < box.length; ++i){
    box[i].classList.toggle('show');
  }
}, false);

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
      $(".container").addClass("scrolling");
  } else {
      $(".container").removeClass("scrolling");
  }
});



