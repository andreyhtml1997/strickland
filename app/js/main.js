// AOS.init();

window.onload = function () {
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
    closeButton: false,
    dragToClose: false,
    Thumbs: false,
  });

  //Preloader
    /* document.querySelector('.preloader').classList.add('hidden');
    // document.querySelector('html').classList.remove('overflow-hidden');
    document.querySelector('body').classList.remove('overflow-hidden'); */
  
  
  //Header toggle
    document.querySelectorAll('.menu-toggle').forEach(el => el.addEventListener('click', function(){
      document.querySelector('.header').classList.toggle('active');
      document.querySelector('body').classList.toggle('overflow-hidden');
    }));
    

    const swiper = new Swiper(".bio-carousel", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
}



window.onscroll = function(e) {
	if(document.querySelector('.footer').offsetTop < document.documentElement.clientHeight + e.currentTarget.pageYOffset) {
		document.querySelector('.toTop').classList.add('position-absolute');
	} else {
		document.querySelector('.toTop').classList.remove('position-absolute');
	}
  if(e.currentTarget.pageYOffset < 100) {
		document.querySelector('.toTop').classList.add('hidden');
	} else {
		document.querySelector('.toTop').classList.remove('hidden');
	}
}















let curs = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    curs.style.left = x - 25 + "px";
    curs.style.top = y - 25 + "px";
});

let images = document.querySelectorAll(".books--main .books__el");
let servicesImages = "url('img/svg/arrow-right-white-circle.svg')";

images.forEach((image, i) => {
    image.addEventListener("mouseover", (e) => {
        curs.classList.add("cursor-image-show");
        curs.style.backgroundImage = servicesImages;
    });
    image.addEventListener("mouseleave", (e) => {
        curs.classList.remove("cursor-image-show");
        curs.style.backgroundImage = "none";
    });
});



const button_collapses = document.querySelectorAll('.button-collapse');
if(button_collapses) {
  button_collapses.forEach(el => el.querySelector('.button__text').style.width = `0px`);
  button_collapses.forEach(el => el.addEventListener('mouseover', function(){
    const text_width = el.querySelector('.button__text-inner').offsetWidth;
    el.querySelector('.button__text').style.width = `${text_width + 16}px`
  }));

  button_collapses.forEach(el => el.addEventListener('mouseleave', function(){
    el.querySelector('.button__text').style.width = `0px`
  }));
}


const events_list = document.querySelector('.events-list');
events_list.addEventListener('mouseover', function(e) {
  e.currentTarget.classList.add('active');
});
events_list.addEventListener('mouseleave', function(e) {
  e.currentTarget.classList.remove('active');
});