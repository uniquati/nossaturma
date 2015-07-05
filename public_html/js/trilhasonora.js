var caminhoPlaylist = "media/audio/";
var ordemPlaylist = new Array();

var estruturaPlaylist = new Array();
estruturaPlaylist[0]={
        src:"Technologic-DaftPunk.mp3",
        nome:"Technologic",
        artista:"Daft Punk"
};
estruturaPlaylist[1]={
        src:"MarchaImperial-StarWars.mp3",
        nome:"Marcha Imperial",
        artista:"Star Wars"
};
estruturaPlaylist[2]={
        src:"Paradise-Coldplay&LouisAngelo.mp3",
        nome:"Paradise Remix",
        artista:"Coldplay & Louis Angelo"
};
estruturaPlaylist[3]={
        src:"Calice-ChicoBuarque.mp3",
        nome:"Cálice",
        artista:"Chico Buarque"
};
estruturaPlaylist[4]={
        src:"CancaoPraNaoVoltar-ABandaMaisBonitaDaCidade.mp3",
        nome:"Canção Pra Não Voltar",
        artista:"A Banda Mais Bonita da Cidade"
};
estruturaPlaylist[5]={
        src:"Carapalavra-KarinaBuhr.mp3",
        nome:"Carapalavra",
        artista:"Karina Buhr"
};
estruturaPlaylist[6]={
        src:"Derezzed-DaftPunk.mp3",
        nome:"Derezzed",
        artista:"Daft Punk"
};
estruturaPlaylist[7]={
        src:"ThisIsNotTheEnd-Krewella.mp3",
        nome:"This Is Not The End",
        artista:"Krewella"
};
estruturaPlaylist[8]={
        src:"Unsustainable-Muse.mp3",
        nome:"Unsustainable",
        artista:"Muse"
};

for(var i=0; i<estruturaPlaylist.length; i++ ){
   ordemPlaylist.push(i);
}


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
function nextMusica(){
    var next = $('#trilhasonora-lista li.selected').next();
    if(next.length == 0){
        next = $('#trilhasonora-lista li:first-child');
    }
    tocarMusica(next);
}
function prevMusica(){
    var prev = $('#trilhasonora-lista li.selected').prev();
    if(prev.length == 0){
        prev = $('#trilhasonora-lista li:last-child');
    }
    tocarMusica(prev);
}
function tocarMusica(elemento){
    $('#audio').addClass('play');
    console.log( "tocar musica: "+ estruturaPlaylist[elemento.attr('data-indice')].nome);
    $('#trilhasonora-lista li').removeClass('selected');
    elemento.addClass('selected');
    
    $('#audiosource').attr('src', caminhoPlaylist+estruturaPlaylist[elemento.attr('data-indice')].src);
    document.getElementById('audio').load();
    document.getElementById('audio').play();
}
function initTrilhaSonora(){
    console.log('init trilha sonora');
    
    //ordem aleatória das músicas
    ordemPlaylist = shuffle(ordemPlaylist);
    
    //preenche a lista de músicas
    var ul = $('#trilhasonora-lista');
    for(var i=0; i<ordemPlaylist.length; i++){
        ul.append('<li data-indice="'+ ordemPlaylist[i] +'"><h3>'+ estruturaPlaylist[ordemPlaylist[i]].nome +'</h3><p>'+ estruturaPlaylist[ordemPlaylist[i]].artista +'</p></li>');
    }
    $('.trilhasonora-conteudo').scrollTop(0);
    
    
    //eventos para abrir/fechar menu da trilha sonora
    $('#trilhasonora-toggle').click(abrirTrilhaSonora);
    $('#btFecharTrilhaSonora').click(fecharTrilhaSonora);
    $('.trilhasonora-cortina').click(fecharTrilhaSonora);
    //eventos de play/pause música
    $('#trilhasonora #btPlayTrilhaSonora').click(toggleMusica);
    $('.trilhasonora-botoes #trilhasonora-play').click(toggleMusica);
    document.getElementById('audio').onpause = function(){
        $('#trilhasonora #btPlayTrilhaSonora').addClass('pause');
        $('.trilhasonora-botoes #trilhasonora-play').addClass('pause');
    
        $('#audio').removeClass('play');
    };
    document.getElementById('audio').onplay = function(){
        $('#trilhasonora #btPlayTrilhaSonora').removeClass('pause');
        $('.trilhasonora-botoes #trilhasonora-play').removeClass('pause');
    
        $('#audio').addClass('play');
    };
    //eventos para troca de música
    $('#trilhasonora-lista li').click(function(e){
        e.preventDefault();
        tocarMusica($(this));
    });
    $('#trilhasonora-prev').click(prevMusica);
    $('#btPrevTrilhaSonora').click(prevMusica);
    
    $('#trilhasonora-next').click(nextMusica);
    $('#btNextTrilhaSonora').click(nextMusica);
    
    
    
    
    document.getElementById('audio').addEventListener('ended',nextMusica);
    
    
    document.getElementById('audio').volume = .50;
    
   // tocar primeira música
    $('#trilhasonora-lista li:first-child').trigger('click');
}
function toggleMusica(){
    if($('#audio').hasClass('play') ){
        document.getElementById('audio').pause();
    }else{
        document.getElementById('audio').play(); 
    }
}