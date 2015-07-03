/* 
Javascript do MODAL
 */
function fecharModal(){
    $('body').removeClass('no-scroll');
    $('#modal').fadeOut('fast');
    $(document).off('keydown');
}
function abrirModal(){
    //ouvir eventos do teclado
    $(document).keydown(function(ev){
        /*space:32, pageup:33, pagedown:34, end:35, home:36
        left: 37, up:38, right:39, down:40*/
        var teclasNavegacao = [32, 33, 34, 35, 36, 37, 38, 39, 40];

        if(ev.which == 27)
            fecharModal();
        for(var i=0; i<teclasNavegacao.length; i++){
            if(ev.which == teclasNavegacao[i])
                return false;
        }
    } );
    
    $('#modal .modal-titulo h3').html($(this).attr('data-modal-titulo'));
    $("#modal .modal-conteudo").load($(this).attr('data-modal-src'));
    $('#modal').addClass('aberto');
    $('body').addClass('no-scroll');
    $('#modal').fadeIn('fast');
    
    
}
function initModal(){
    $('.modal').click(abrirModal);
    $('#modal .modal-cortina').click(fecharModal);
    $('#modal .fechar').click(fecharModal);
 }



