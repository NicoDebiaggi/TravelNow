/*==================== Swiper JS ====================*/
let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
    slidesPerView: 0,
});

let galleryTop = new Swiper('.gallery-top', {
    effect: 'fade',
    loop: true,

    thumbs: {
      swiper: galleryThumbs
    }
});

let swiper = new Swiper(".swiperPopUp", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*==================== Parallax & Scrolling FX ====================*/
const translate = document.querySelectorAll(".translate")

window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset;
    let screenHeight = screen.height;
    let screenCalc = scroll/screenHeight;

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform  = `translateY(${scroll * speed}px)`;
    })


    let percentage = null;
    if(scroll > 130){
      percentage = ((scroll-130)/11.67)
    }
    indexBorder = document.getElementById("borderSectionTwo");
    if(indexBorder != null){
      document.getElementById("borderSectionTwo").style.width = percentage + "%";
    }

    var navElements = document.getElementsByClassName("navGoUp")
    if(screenCalc >= 0.5 ){
      for (let i = 0; i < navElements.length; i++) {
        navElements[i].classList.add("goUpShow");
      }
    }
    else{
      for (let i = 0; i < navElements.length; i++) {
        navElements[i].classList.remove("goUpShow");
      }
    }
    var navElements = document.getElementsByClassName("navAlt")
    if(screenCalc >= 0.9 ){
      for (let i = 0; i < navElements.length; i++) {
        navElements[i].classList.add("alt");
      }
    }
    else{
      for (let i = 0; i < navElements.length; i++) {
        navElements[i].classList.remove("alt");
      }
    }

/*==================== static background destinos ====================*/
    var subDestinos__imgCero = document.getElementById("subDestinos__imgCero");
    var subDestinos__imgUno = document.getElementById("subDestinos__imgUno");
    var subDestinos__imgDos = document.getElementById("subDestinos__imgDos");
    var markCero = document.getElementById("markCero");
    var markUno = document.getElementById("markUno");
    

    if(subDestinos__imgCero != null){
      subDestinos__imgCero.style.visibility = "visible";
      if(markCero.getBoundingClientRect().top <= 0){
        subDestinos__imgCero.style.visibility = "hidden";
        subDestinos__imgUno.style.visibility = "visible";
      }
      else{
        subDestinos__imgCero.style.visibility = "visible";
        subDestinos__imgUno.style.visibility = "hidden";
      }
    }
    if(subDestinos__imgCero != null){
      if(markUno.getBoundingClientRect().top <= 0){
        subDestinos__imgUno.style.visibility = "hidden";
        subDestinos__imgDos.style.visibility = "visible";
      }
      else{
        subDestinos__imgDos.style.visibility= "hidden";
      }
    }
})

/*==================== onClick FX ====================*/
var cardOverlay = document.getElementsByClassName("cardOverlay");
if(cardOverlay != null ){
  Array.from(cardOverlay).forEach(function(element, index){
    element.style.cursor = 'pointer';
    element.addEventListener("click", ()=>{
      window.scrollTo(0, document.getElementById("destino__" + index).offsetTop);
    })
  })
}

var capsulaImg = document.getElementsByClassName("subDestinos__seccion__capsula__imgContainer");
var popupSubDestinosUno = document.getElementById("popupSubDestinosUno");
var popupClose = document.getElementById("popupClose");
if(capsulaImg != null ){
  Array.from(capsulaImg).forEach(function(element, index){
    element.addEventListener("click", ()=>{
      popupSubDestinosUno.classList.add("popupReveal")
    })
  })
  popupClose.addEventListener("click", ()=>{
    popupSubDestinosUno.classList.remove("popupReveal")
  })
}

/*==================== hover navGradient ====================*/
var hideMenu = document.getElementById("hideMenu").addEventListener("mouseover", mouseOver);;
var hideMenu = document.getElementById("hideMenu").addEventListener("mouseout", mouseOut);;
var subMenu = document.getElementById("subMenu").addEventListener("mouseover", mouseOver);;
var subMenu = document.getElementById("subMenu").addEventListener("mouseout", mouseOut);;

function mouseOver() {
  document.getElementById("gradientNav").style.height = "300px";
}

function mouseOut() {
  document.getElementById("gradientNav").style.height = "100px";
}


/*==================== ScrollReveal ====================*/
var slideLeft = {
  distance: '150%',
  duration: "800" ,
  delay: "200",
  origin: 'right',
  opacity: "0"
};
var slideRight = {
  distance: '150%',
  duration: "800" ,
  delay: "200",
  origin: 'left',
  opacity: "0"
};
var slideDown = {
  duration: "800",
  opacity: "0",
  origin: 'bottom'
}
ScrollReveal().reveal('.subDestinos__seccion__capsula', slideLeft);
ScrollReveal().reveal('.textSectionTwo', slideLeft);
ScrollReveal().reveal('.firstSection', slideDown);
ScrollReveal().reveal('.aboutSubtitle', slideLeft);
ScrollReveal().reveal('.people', slideDown);
ScrollReveal().reveal('.aboutSection', slideRight);


/*==================== Mobile menu toggle ====================*/
const showMenu = (toggleId, navId) =>{
  var toggle = document.getElementById(toggleId);
  var nav = document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener("click", ()=>{
      nav.classList.toggle("showMenu");
    })
  }
}
showMenu("navToggleId", "navMenuId");
