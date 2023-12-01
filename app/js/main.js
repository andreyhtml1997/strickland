// AOS.init();
const set1VhInPx = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
set1VhInPx();
const smoothAnchorScroll = function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const offset = target.offsetTop - 70; // Add 60 pixels to the offsetTop
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    });
  });
};




let prevScrollPos = window.pageYOffset;
/* function collabs_animation() {
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
} */

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

function blog_animation() {
  gsap.registerPlugin(ScrollTrigger);
  
  let cards = gsap.utils.toArray(".blog__el");
  let stackHeight = 150;
  console.log(gsap.utils.checkPrefix("filter"))
  cards.forEach((card, i) => {
    gsap.fromTo(card, {
      scale: 1,
      transformOrigin: "center top",
      filter: "blur(0px)",
      opacity: 1
    }, {
      y: gsap.utils.mapRange(1, cards.length, -20, -stackHeight + 220, cards.length - i),
      scale: gsap.utils.mapRange(1, cards.lgthen, 0.4, 0.9, i),
      opacity: gsap.utils.mapRange(1, cards.lgthen, 0, 0, i),
      //filter: "blur(" + gsap.utils.mapRange(1, cards.length, 4, 25, cards.length - i) + "px)",
      scrollTrigger: {
        trigger: card,
        scrub: true,
        start: "top " + stackHeight,
        end: "+=" + window.innerHeight * 2,
        invalidateOnRefresh: true
      }
    });
    // pin separately because we want the pinning to last the whole length of the page, but the animation should only be part of it. 
    ScrollTrigger.create({
      trigger: card,
      pin: true,
      start: "top " + stackHeight,
      endTrigger: ".collabs", // when the last card finishes its animation, unpin everything
      end: "top " + (stackHeight + 100),
      pinSpacing: false
    });
  });
}

function prefooter_animation() {
  const prefooter_content = gsap.utils.toArray(".prefooter__content");

  prefooter_content.forEach((image, i) => {
      gsap.fromTo(
          image,
          { scale: 0.5 },
          {
              scale: 1,
              ease: "none",
              force3D: true,
              scrollTrigger: {
                  pin: ".prefooter",
                  trigger: ".prefooter",
                  start: "top 60px",
                  end: "bottom top",
                  scrub: 0.5,
                  markers: false,
              },
          }
      );
  });
}
function footer_animation () {
  document.querySelector('.main').style.marginBottom = `${document.querySelector('.footer').offsetHeight}px`;
}
blog_animation();
prefooter_animation();

window.onload = function () {
  smoothAnchorScroll();
  footer_animation();
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
    closeButton: false,
    dragToClose: false,
    Thumbs: false,
  });
  

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
    document.querySelector('.preloader').classList.add('hidden');
    document.querySelector('html').classList.remove('overflow-hidden');
    document.querySelector('body').classList.remove('overflow-hidden');
  
  
  //Header toggle
    document.querySelectorAll('.header__toggle').forEach(el => el.addEventListener('click', function(){
      document.querySelector('.header').classList.toggle('active');
      document.documentElement.classList.toggle('overflow-hidden');
    }));

    document.querySelectorAll('.header__menu-list-link .menu-toggle').forEach(el => el.addEventListener('click', function(){
      document.querySelector('.header').classList.toggle('active');
      document.documentElement.classList.remove('overflow-hidden');
    }));
    

    const swiper = new Swiper(".bio-carousel", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
}



window.onscroll = function(e) {
  footer_animation();
  let current = "";
  const sections = document.querySelectorAll(".smoothScrollEl");
  const navLi = document.querySelectorAll(".header__menu-list-link");
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 70) {
      if(section.getAttribute("id")) {
        current = section.getAttribute("id"); 
      }
    }
  });
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
	if(pageYOffset >= (document.body.clientHeight - document.documentElement.clientHeight)) {
    navLi.forEach(el => {
      el.classList.remove("active");
      if(el.classList.contains('to-footer')){
        el.classList.add("active")
      }
    })
	}













  if(window.scrollY > 0) {
    document.querySelector('.header').classList.add('fixed');
  } else {
    document.querySelector('.header').classList.remove('fixed');
  }




const blog = document.querySelector('.blog');
if(blog) {
  const blog_offset_top = document.querySelector('.blog').getBoundingClientRect().top;
  const currentScrollPos = window.pageYOffset;
  if(blog_offset_top <= 0 && blog_offset_top >= -document.querySelector('.blog').offsetHeight + window.innerHeight) {
    document.querySelector('.blog__mask').style.position = 'fixed';
    document.querySelector('.blog__mask').style.bottom = '0';
    document.querySelector('.blog__mask').style.top = 'auto';
  } else {
    document.querySelector('.blog__mask').style.position = 'absolute';
    if (blog_offset_top <= window.innerHeight && blog_offset_top >= -blog.innerHeight) {
      // Scrolling down
      document.querySelector('.blog__mask').style.bottom = 'auto';
      document.querySelector('.blog__mask').style.top = '0';
    } else if(blog_offset_top >= 0) {
      document.querySelector('.blog__mask').style.bottom = 'auto';
      document.querySelector('.blog__mask').style.top = '0';
      // Scrolling up
    }
    prevScrollPos = currentScrollPos;
  }
}




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
  set1VhInPx();
  footer_animation();
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
if(events_list) {
  events_list.addEventListener('mouseover', function(e) {
    e.currentTarget.classList.add('active');
  });
  events_list.addEventListener('mouseleave', function(e) {
    e.currentTarget.classList.remove('active');
  });
}




document.querySelector('.inline-form input').addEventListener('focus', function(e){
  e.currentTarget.closest('.inline-form').classList.add('active');
})

document.querySelector('.inline-form input').addEventListener('focusout', function(e){
  e.currentTarget.closest('.inline-form').classList.remove('active');
})



let sticky = new Sticky('.sticky');