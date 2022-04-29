$(document).ready(function() {
  
  setTimeout(function() {
    $('#ctn-preloader').addClass('loaded');
    // al termine viene visualizzato lo scroll
    $('body').removeClass('no-scroll-y');

    if ($('#ctn-preloader').hasClass('loaded')) {
      // intera sezione del preloader viene eliminata 
      $('#preloader').delay(1000).queue(function() {
        $(this).remove();
      });
    }
  }, 1000);
  
});

window.addEventListener("scroll", (event) => {
  let scrollY = this.scrollY;
  
  if (scrollY >= 100){
      
      $("#logo").css({
        "display": "none",
        });
      $("#logo-white").css({
          "display": "inline",
      });
      
 
  }  else if (scrollY < 100 || scrollY == 0){
    $("#logo-white").css({
      "display": "none",
      });
      $("#logo").css({
        "display": "inline",
        });
  }
  

});



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

    // var img = document.createElement("img");
    //   img.src = 'images/logo_bianco.png';
    //   var parent = document.querySelector(".logo");
    //   parent.appendChild(img);

});

const year = document.getElementById("actualYear");
const actualYear = new Date();
year.innerHTML = actualYear.getFullYear();


