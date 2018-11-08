window.onload = masonery()
function masonery(){
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});


$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});
}



function myFunction() {
  let cross = document.getElementById("cross-close");
  let crossOpen = document.getElementById("cross-open");
  cross.classList.toggle("cross-visible")
  crossOpen.classList.toggle("cross-none")
  let container = document.getElementById("picture-section");
  let bouton = document.getElementById("btn-open");
  let element = document.getElementById("modal");
  element.classList.toggle("navbar-fixed-right-close");
  bouton.classList.toggle("btn-open-close");
  container.classList.toggle("picture-section-full");
  setTimeout(masonery, 400);

}


window.onload = function(){
if($(window).width() < 1000){
  myFunction()
}
}
