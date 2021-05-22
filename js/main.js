/*==================== SWIPER JS ====================*/
let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
    slidesPerView: 0,
})

let galleryTop = new Swiper('.gallery-top', {
    effect: 'fade',
    loop: true,

    thumbs: {
      swiper: galleryThumbs
    }
})

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
})

/*==================== onClick offersCard ====================*/
var cardOverlay = document.getElementsByClassName("cardOverlay");
if(cardOverlay != null ){
  Array.from(cardOverlay).forEach(function(element, index){
    element.style.cursor = 'pointer';
    element.addEventListener("click", ()=>{
      window.scrollTo(0, document.getElementById("destino__" + index).offsetTop);
    })
  })
}

/*==================== ScrollReveal ====================*/
var slideUp = {
  distance: '150%',
  duration: "600" ,
  delay: "200",
  origin: 'right',
  opacity: "0.2"
};
var slideDown = {
  duration: "800",
  opacity: "0",
  origin: 'bottom'
}
ScrollReveal().reveal('.textSectionTwo', slideUp);
ScrollReveal().reveal('.firstSection', slideDown);


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
