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
    $(document).keydown(function(ev){
        /*space:32, pageup:33, pagedown:34, end:35, home:36
        left: 37, up:38, right:39, down:40*/
        var teclasNavegacao = [32, 33, 34, 35, 36, 37, 38, 39, 40];

        if(ev.which == 37 || ev.which == 38 || ev.which == 33)
            prevSlideShow();
        if(ev.which == 39 || ev.which == 40 || ev.which == 34)
            nextSlideShow();
        if(ev.which == 27)
            fecharSlideShow();
        for(var i=0; i<teclasNavegacao.length; i++){
            if(ev.which == teclasNavegacao[i])
                return false;
        }
    } );
    
    if($(this).attr('data-legenda'))
        $('#slideshow .slideshow-legenda').html( '<div>'+$(this).attr('data-legenda')+'</div>' );
    else
        $('#slideshow .slideshow-legenda').empty();
    
    $('#slideshow .slideshow-imagem').attr('src', $(this).attr('data-imagem') );
    $(this).addClass('ativo');
    $('body').addClass('no-scroll');
    $('#slideshow').fadeIn('slow');
    $('#slideshow').addClass('aberto');
    
    ajustarSetas();
}
function ajustarSetas(){
     if($('.slide-show.ativo').prev('.slide-show').length == 0){
        $('#slideshow .prev').addClass('off');
    }else{
        $('#slideshow .prev').removeClass('off');
    }
    if($('.slide-show.ativo').next('.slide-show').length == 0){
        $('#slideshow .next').addClass('off');
    }else{
        $('#slideshow .next').removeClass('off');
    }
}
function fecharSlideShow(){
    $(document).off('keydown');
    $('.slide-show').removeClass('ativo');
    $('body').removeClass('no-scroll');
    $('#slideshow').fadeOut('slow');
    $('#slideshow').removeClass('aberto');
}
function prevSlideShow(){
    var prev = $('.slide-show.ativo').prev('.slide-show');
    if(prev.length != 0){
        console.log(prev.attr('data-legenda'));
        $('.slide-show.ativo').removeClass('ativo');
        prev.addClass('ativo');
        if(prev.attr('data-legenda'))
            $('#slideshow .slideshow-legenda').html( '<div>'+prev.attr('data-legenda')+'</div>' );
        else
            $('#slideshow .slideshow-legenda').empty();
        $('#slideshow .slideshow-imagem').attr('src', prev.attr('data-imagem') ); 

        ajustarSetas();
    }
    
}
function nextSlideShow(){
    var next = $('.slide-show.ativo').next('.slide-show');
    if(next.length != 0){
        console.log(next.attr('data-legenda'));
        $('.slide-show.ativo').removeClass('ativo');
        next.addClass('ativo');
        if(next.attr('data-legenda'))
            $('#slideshow .slideshow-legenda').html('<div>'+ next.attr('data-legenda')+'</div>' );
        else
            $('#slideshow .slideshow-legenda').empty();
        $('#slideshow .slideshow-imagem').attr('src', next.attr('data-imagem') );

        ajustarSetas();
    }
    
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