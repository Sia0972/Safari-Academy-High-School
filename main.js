const naviconEl=document.querySelector('.nav--icon');
const navCloseEl= document.querySelector('nav--close');
const navlist = document.querySelector('nav--list');
const navBgOverlayEl = document.querySelector('.nav--bgOverlay');

const nayOpen = () =>{
    navlist.classList.add('show');
    navBgOverlayEl.classList.add('active');
    document.body.style='visibility: visible; height: 100vh; width: 100vw; overflow: hidden;';
}

const navClose = () => {
    navlist.classList.remove('show');
    navBgOverlayEl.classList.remove('active');
    document.body.style='visibility: visible; height: initial; width: 100%; overflow-x: hidden';
}

naviconEl.addEventListener('click',nayOpen);
navCloseEl.addEventListener('click', navClose);
navBgOverlayEl.addEventListener('click', navClose);


//aos
AOS.init({
    offset:200,
    delay: 100,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorplacement: 'top-bottom'
})