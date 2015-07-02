/* 
Javascript do SLIDE SHOW
 */
function toggleTela(){
    $('#slideshow .slideshow-legenda').slideToggle('fast');
    $('#slideshow .fechar').fadeToggle('fast');
    $('#slideshow .prev').fadeToggle('fast');
    $('#slideshow .next').fadeToggle('fast');
}
function abrirSlideShow(){
    if($(this).attr('data-legenda'))
        $('#slideshow .slideshow-legenda').html( '<div>'+$(this).attr('data-legenda')+'</div>' );
    else
        $('#slideshow .slideshow-legenda').empty();
    
    $('#slideshow .slideshow-imagem').attr('src', $(this).attr('data-imagem') );
    $(this).addClass('ativo');
    $('body').addClass('no-scroll');
    $('#slideshow').fadeIn('slow');
    $('#slideshow').addClass('aberto');
    
    checarLimites();
}
function checarLimites(){
     if($('.slide-show.ativo').prev('.slide-show').length == 0){
        $('#slideshow .prev').addClass('off');
        //$('#slideshow .prev').fadeOut();
    }else{
        $('#slideshow .prev').removeClass('off');
        //$('#slideshow .prev').fadeIn();
    }
    if($('.slide-show.ativo').next('.slide-show').length == 0){
        $('#slideshow .next').addClass('off');
        //$('#slideshow .next').fadeOut();
    }else{
        $('#slideshow .next').removeClass('off');
        //$('#slideshow .next').fadeIn();
    }
}
function fecharSlideShow(){
    $('.slide-show').removeClass('ativo');
    $('body').removeClass('no-scroll');
    $('#slideshow').fadeOut('slow');
    $('#slideshow').removeClass('aberto');
}
function prevSlideShow(){
    var prev = $('.slide-show.ativo').prev('.slide-show');
    console.log(prev);
    $('.slide-show.ativo').removeClass('ativo');
    prev.addClass('ativo');
    if(prev.attr('data-legenda'))
        $('#slideshow .slideshow-legenda').html( '<div>'+prev.attr('data-legenda')+'</div>' );
    else
        $('#slideshow .slideshow-legenda').empty();
    $('#slideshow .slideshow-imagem').attr('src', prev.attr('data-imagem') ); 
    
    checarLimites();
}
function nextSlideShow(){
    var next = $('.slide-show.ativo').next('.slide-show');
    console.log(next);
    $('.slide-show.ativo').removeClass('ativo');
    next.addClass('ativo');
    if(next.attr('data-legenda'))
        $('#slideshow .slideshow-legenda').html('<div>'+ next.attr('data-legenda')+'</div>' );
    else
        $('#slideshow .slideshow-legenda').empty();
    $('#slideshow .slideshow-imagem').attr('src', next.attr('data-imagem') );
    
    checarLimites();
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
    $('body').append("<div id='slideshow' class='aberto'><div class='slideshow-cortina' onclick='toggleTela();'><img class='slideshow-imagem pure-img'  src='' /><div class='slideshow-legenda'></div></div><button onclick='fecharSlideShow();' class='fechar'></button><div class='prev' onclick='prevSlideShow()'></div><div class='next' onclick='nextSlideShow();'></div></div>");
    resizeSlideShow();
    
    $('.slide-show').click(abrirSlideShow);
}