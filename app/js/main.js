// AOS.init();

function collabs_animation() {
  if(document.querySelector('.collabs').getBoundingClientRect().bottom <= window.innerHeight) {
    document.querySelector('.collabs-list').classList.add('active');
    document.querySelectorAll('.collabs-list__el-post').forEach((el, i) => {
    const computedStyles = window.getComputedStyle(el);
    let marginValue;
    const text_el = el.nextElementSibling;
    if(i%2) {//1,3
      marginValue = parseInt(computedStyles.marginRight);
      el.style.transform = `translateX(${text_el.offsetWidth + marginValue}px)`;
      text_el.style.transform = `translateX(-${el.offsetWidth + marginValue}px)`;
    } else {//0,2
      marginValue = parseInt(computedStyles.marginLeft);
      el.style.transform = `translateX(-${text_el.offsetWidth + marginValue}px)`;
      text_el.style.transform = `translateX(${el.offsetWidth + marginValue}px)`;
    }
  })
  } else {
    document.querySelector('.collabs-list').classList.remove('active');
    document.querySelectorAll('.collabs-list__el-post').forEach((el) => {
      const text_el = el.nextElementSibling;
      el.style.transform = `translateX(0px)`;
      text_el.style.transform = `translateX(0px)`;
    })
  }
}


function collabs_animation_mouseover() {
  
    document.querySelector('.collabs-list').classList.add('active');
    document.querySelectorAll('.collabs-list__el-post').forEach((el, i) => {
    const computedStyles = window.getComputedStyle(el);
    let marginValue;
    const text_el = el.nextElementSibling;
    if(i%2) {//1,3
      marginValue = parseInt(computedStyles.marginRight);
      el.style.transform = `translateX(${text_el.offsetWidth + marginValue}px)`;
      text_el.style.transform = `translateX(-${el.offsetWidth + marginValue}px)`;
    } else {//0,2
      marginValue = parseInt(computedStyles.marginLeft);
      el.style.transform = `translateX(-${text_el.offsetWidth + marginValue}px)`;
      text_el.style.transform = `translateX(${el.offsetWidth + marginValue}px)`;
    }
  })
}

function collabs_animation_mouseleave() {
  document.querySelector('.collabs-list').classList.remove('active');
  document.querySelectorAll('.collabs-list__el-post').forEach((el) => {
    const text_el = el.nextElementSibling;
    el.style.transform = `translateX(0px)`;
    text_el.style.transform = `translateX(0px)`;
  })
}





window.onload = function () {
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
    closeButton: false,
    dragToClose: false,
    Thumbs: false,
  });
  document.querySelector('.main').style.marginBottom = `${document.querySelector('.footer').clientHeight}px`;

  document.querySelectorAll('.collabs-list__el').forEach((el, i) => {
    el.addEventListener('mouseover', function(){
      collabs_animation_mouseover();
    })
  });
  document.querySelectorAll('.collabs-list__el').forEach((el, i) => {
    el.addEventListener('mouseleave', function(){
      collabs_animation_mouseleave();
    })
  });
  //Preloader
    /* document.querySelector('.preloader').classList.add('hidden');
    // document.querySelector('html').classList.remove('overflow-hidden');
    document.querySelector('body').classList.remove('overflow-hidden'); */
  
  
  //Header toggle
    document.querySelectorAll('.menu-toggle').forEach(el => el.addEventListener('click', function(){
      document.querySelector('.header').classList.toggle('active');
      document.documentElement.classList.toggle('overflow-hidden');
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


const press_row = document.querySelector('.press__row');
  if(press_row && 
  press_row.getBoundingClientRect().top <= window.innerHeight &&
  press_row.getBoundingClientRect().top >= -press_row.clientHeight * 2) {
    const delta = window.innerHeight - document.querySelector('.press__row').getBoundingClientRect().top;
    document.querySelectorAll('.press__row').forEach((el, i) => {
      if(i%2) {
        
        if(window.innerWidth >= 991) {
          el.style.transform = `translateX(${delta * 1}px)`;
        } else {
          el.style.transform = `translateX(${delta * 1.3}px)`;
        }
      } else {
        el.style.transform = `translateX(-${delta * 0.3}px)`;
      }
    });
  } 



}

window.onresize = function(e) {
  document.querySelector('.main').style.marginBottom = `${document.querySelector('.footer').clientHeight}px`;
}













let curs = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    curs.style.left = x - 25 + "px";
    curs.style.top = y - 25 + "px";
});

let images = document.querySelectorAll(".cursor-special");
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




document.querySelector('.inline-form input').addEventListener('focus', function(e){
  e.currentTarget.closest('.inline-form').classList.add('active');
})

document.querySelector('.inline-form input').addEventListener('focusout', function(e){
  e.currentTarget.closest('.inline-form').classList.remove('active');
})