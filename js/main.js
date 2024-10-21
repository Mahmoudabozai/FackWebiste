
//*----------------------------*/
//*--What Are Saying Apout Us--*/
//*----------------------------*/
var swiper = new Swiper(".mySwiper-courses", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
    // when window width is >= 250px
    250: {
        slidesPerView: 1,
        spaceBetween: 20
    },
    // when window width is >= 900px
    620: {
        slidesPerView: 2,
        spaceBetween: 20
    },
    786: {
        slidesPerView: 3,
        spaceBetween: 30
    },
}
});
// // swiper js carousel
var swiper = new Swiper(".mySwiper-testmonial", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      535: {
        slidesPerView: 2,
        spaceBetween: 20
      },
    //   // when window width is >= 640px
    //   940: {
    //     slidesPerView: 3,
    //     spaceBetween: 10
    //   },
    },
    autoplay: {
      delay: 3500,
    },
    loop: true,
});


//*----------------------------*/
//*----------BTN UP------------*/
//*----------------------------*/


window.addEventListener('scroll', btnup);
function btnup(){
    let span = document.querySelector('.btnUpTop');
    let navbar = document.querySelector('#nav');

    if (this.scrollY >= 900) {
        span.classList.add("Show");
    }
    else {
        span.classList.remove("Show");
    }
    if (this.scrollY >= 160) {
        navbar.classList.add("topnav");
    }
    else {
        navbar.classList.remove("topnav");
    }
    span.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
};


// button To Top 
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add( "active" );
        }
        else{
            reveals[i].classList.remove( "active" );
        }
    }
}

// right To left 
window.addEventListener('scroll', revealleft);

function revealleft(){
    var reveals = document.querySelectorAll('.revealleft');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;

        var revealtop = reveals[i].getBoundingClientRect().top;

        var revealpoint = 250;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add( "active" );
        }

        else{
            reveals[i].classList.remove( "active" );
        }
    }
}

// left To right 
window.addEventListener('scroll', revealright);

function revealright(){
    var reveals = document.querySelectorAll('.revealright');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add( "active" );
        }
        else{
            reveals[i].classList.remove( "active" );
        }
    }
}
     // Example starter JavaScript for disabling form submissions if there are invalid fields
     (function() {
      'use strict';
      window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
          }
          form.classList.add('was-validated');
          }, false);
      });
      }, false);
  })();


let profilePic = document.getElementById("img-payment");
let inputFile = document.getElementById("paymentInput");
let pLable = document.getElementById("input-value");
let svgLable = document.getElementById("Capa_1");
inputFile.onchange = function(){
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
    profilePic.style.opacity = "1";
    profilePic.style.visibility = "visible";
    pLable.style.display = "none";
    svgLable.style.display = "none";
}