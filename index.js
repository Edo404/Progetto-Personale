// preloader
$(document).ready(function() {
  setTimeout(function() {
    $('#ctn-preloader').addClass('loaded');
    // scroll visualized at the end
    $('body').removeClass('no-scroll-y');

    if ($('#ctn-preloader').hasClass('loaded')) {
      // whole preloader section is deleted
      $('#preloader').delay(1000).queue(function() {
        $(this).remove();
      });
    }
  }, 1000);
});

// change logo color when the navbar is black
window.addEventListener("scroll", (event) => {
  let scrollY = this.scrollY;
  
  if (scrollY >= 100){
    $("#logo").css({
      "display": "none",
    });
    $("#logo-white").css({
      "display": "inline",
    });
  } else if (scrollY < 100 || scrollY == 0){
      $("#logo-white").css({
        "display": "none",
      });
      $("#logo").css({
        "display": "inline",
      });
    }
});

// transition of the hamburger button
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

// navbar background is black if scroll is > 100
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
    $(".container").addClass("scrolling");
  } else {
      $(".container").removeClass("scrolling");
    }
});



// year counter in footer 2
const year = document.getElementById("actualYear");
const actualYear = new Date();
year.innerHTML = actualYear.getFullYear();


