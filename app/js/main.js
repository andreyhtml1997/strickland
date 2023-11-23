AOS.init();

window.onload = function () {
    
  //Preloader
    /* document.querySelector('.preloader').classList.add('hidden');
    // document.querySelector('html').classList.remove('overflow-hidden');
    document.querySelector('body').classList.remove('overflow-hidden'); */
  
  
  //Header toggle
    document.querySelectorAll('.menu-toggle').forEach(el => el.addEventListener('click', function(){
      document.querySelector('.header').classList.toggle('active');
      document.querySelector('body').classList.toggle('overflow-hidden');
    }));
    


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