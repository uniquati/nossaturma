/* 
Javascript do SLIDE SHOW
 */
function toggleLegenda(){
    $('#slideshow .slideshow-legenda').slideToggle('fast');
}
function abrirSlideShow(){
    $('#slideshow .slideshow-legenda div').html( $(this).attr('data-legenda') );
    $('#slideshow .slideshow-imagem').attr('src', $(this).attr('data-imagem') );
    $('body').addClass('no-scroll');
    $('#slideshow').fadeIn('slow');
    $('#slideshow').addClass('aberto');
}
function fecharSlideShow(){
    $('body').removeClass('no-scroll');
    $('#slideshow').fadeOut('slow');
    $('#slideshow').removeClass('aberto');
}
function resizeSlideShow(){
    console.log('resize slideshow');
    var widthBrowser = getWidthBrowser();
    var heightBrowser = getHeightBrowser();
    $('.slideshow-imagem').attr('style', 'max-width:'+widthBrowser+'px;' +'max-height:'+heightBrowser+'px;');
    $('.slideshow-legenda').css('max-height',(heightBrowser/2-50)+'px');
    $('.prev').css('margin-top', + (heightBrowser/2 - 25)+'px');
    $('.next').css('margin-top', + (heightBrowser/2 - 25)+'px');
}
function initSlideShow(){
    console.log('INIT SLIDESHOW');
    $('body').append("<div id='slideshow' class='aberto'><div class='slideshow-cortina' onclick='toggleLegenda();'><img class='slideshow-imagem pure-img'  src='' /><div class='slideshow-legenda'><div></div></div></div><button onclick='fecharSlideShow();' class='fechar'></button><div class='prev'></div><div class='next'></div></div>");
    //$('body').append("<div id='slideshow' class='aberto'><div class='slideshow-cortina' onclick='toggleLegenda();'><img class='pure-img'  src='media/imagem1.jpg' /><div class='slideshow-legenda'><div>Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  ut labore et dolore magna aliqua. Ut enim ad minim veniam, ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  ut labore et dolore magna aliqua. Ut enim ad minim veniam, ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></div></div><button onclick='fecharSlideShow();' class='fechar'></button><div class='prev'></div><div class='next'></div></div>");
    
    resizeSlideShow();
    
    $('.slide-show').click(abrirSlideShow);
}