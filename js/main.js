// copy menu for mobile
function copyMenu(){
    // copy inside .dpt-cat to departements
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departements');
    dptPlace.innerHTML = dptCategory.innerHTML;

    // copy inside nav to nav
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav')
    navPlace.innerHTML = mainNav.innerHTML;

    // copy header-top .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav')
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();
// show mobile menu
const menuButton = document.querySelector('.trigger'),
      closeButton = document.querySelector('.t-close'),
      addClass = document.querySelector('.site');
menuButton.addEventListener('click', function(){
    addClass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function(){
    addClass.classList.remove('showmenu')
});

// Show menu on mobile
const submenu = document.querySelectorAll('.has-child .icon-small');
 submenu.forEach((menu) => menu.addEventListener('click', toggle));

 function toggle(e) {
     e.preventDefault();
     submenu.forEach ((item) => item != this ? item.closest('.has-child').classsList.remove('expand') : null);
     if (this.closest('.has-child').classList != 'expand');
     this.closest('.has-child').classList.toggle('expand')
}

//  slide
const swiper = new Swiper('.swiper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    
});

//Show search
const searchButton = document.querySelector('.t-search'),
      tclose = document.querySelector('.search-close'),
      showClass = document.querySelector('.site');
searchButton.addEventListener('click', function(){
    showClass.classList.toggle('showsearch')
})
tclose.addEventListener('click', function(){
    showClass.classList.remove('showsearch')
})
// show dpt menu
const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
      dptClass = document.querySelector('.site');
dptButton.addEventListener('click', function(){
    dptClass.classList.toggle('showdpt');
})
// product image slider
// var productThumb = new Swiper('.small-image', {
//     loop: true,
//     spaceBetween: 10,
//     slidesPerView: 3,
//     freeMode: true,
//     watchSlidesProgress: true,
//     breakpoints: {
//         481:{
//             spaceBetween: 32,
//         }
//     },
// });
// var productBig = new Swiper ('.big-image', {
//     loop :true,
//     autoheight: true,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     thumbs: {
//         swiper: productThumb,
//     },
// });

var productThumb = new Swiper(".small-image", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        481:{
            spaceBetween: 32,
        }
    }
  });
  var productBig = new Swiper(".big-image", {
    loop: true,
    autoheight: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: productThumb,
    },
  });
//   stock product bar width percentage
// var stocks = document.querySelectorAll('.products .stock');
// for (let x = 0; x = stocks.length; x==) {
//     let stock = stocks[x].dataset.stock,
//     available = stocks[x].querySelector('.qyt-available').innerHTML,
//     sold = stocks[x].querySelector('.qyt-sold').innerHTML,
//     percent = sold*100/stock;

//     stocks[x].querySelector('.available').style.width - percent + '% '
// }