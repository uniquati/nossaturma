/* 
Javascript do SLIDE SHOW
 */
function toggleLegenda(){
    $('.slideshow .slideshow-legenda').slideToggle('fast');
    //$('.slideshow .slideshow-legenda-fechada').slideToggle();
}
function initSlideShow(){
    console.log('INIT SLIDESHOW');
   
    $('body').append("<div class='slideshow' ><div class='slideshow-cortina'><img class='pure-img' onclick='toggleLegenda();' src='media/imagem1.jpg' style='max-height:480px;' /><div class='slideshow-legenda margem-horizontal margem-vertical'>Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  ut labore et dolore magna aliqua. Ut enim ad minim veniam, ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  ut labore et dolore magna aliqua. Ut enim ad minim veniam, ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></div></div>");
}