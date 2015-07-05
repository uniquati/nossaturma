function abrirTrilhaSonora(){
    if( !$('#trilhasonora').hasClass('aberto') ){
        console.log('abrir trilha sonora');
        //ouvir eventos do teclado
        $(document).keydown(function(ev){
            /*space:32, pageup:33, pagedown:34, end:35, home:36
            left: 37, up:38, right:39, down:40*/
            var teclasNavegacao = [32, 33, 34, 35, 36, 37, 38, 39, 40];

            if(ev.which == 27)
                fecharTrilhaSonora();
            for(var i=0; i<teclasNavegacao.length; i++){
                if(ev.which == teclasNavegacao[i])
                    return false;
            }
        } );
        $('body').addClass('no-scroll');
        $('#trilhasonora').addClass('aberto');
        $('#trilhasonora').fadeIn();
        $('.trilhasonora-container').animate({width:'toggle'},350);
    }
}
function fecharTrilhaSonora(){
    if( $('#trilhasonora').hasClass('aberto') ){
        console.log('fechar trilha sonora');
        $(document).off('keydown');
        $('body').removeClass('no-scroll');
        $('#trilhasonora').removeClass('aberto');
        $('.trilhasonora-container').animate({width:'toggle'},350);
        $('#trilhasonora').fadeOut('slow');
    }
}
function initTrilhaSonora(){
    console.log('init trilha sonora');
    $('#trilhasonora-toggle').click(abrirTrilhaSonora);
    $('#btFecharTrilhaSonora').click(fecharTrilhaSonora);
    $('.trilhasonora-cortina').click(fecharTrilhaSonora);
}
