var ordem = new Array();
ordem.push( 0, 1, 2, 3, 4, 5, 6, 7 , 8 , 9 , 10, 11, 12, 13, 14, 15, 16, 17, 18);

var estrutura = new Array();
estrutura[0]={
        nome:"Ádila",
        sobrenome:"Gabrielly",
        foto:"adila.jpg"
};
estrutura[1]={
        nome:"Alison",
        sobrenome:"Jhonas",
        foto:"alison.jpg"
};
estrutura[2]={
        nome:"Alyne",
        sobrenome:"Érico",
        foto:"alyne.jpg"
};
estrutura[3]={
        nome:"André",
        sobrenome:"Carvalho",
        foto:"andre.jpg"
};
estrutura[4]={
        nome:"Emerson",
        sobrenome:"Freire",
        foto:"emerson.jpg"
};
estrutura[5]={
        nome:"Esau",
        sobrenome:"Teodoro",
        foto:"esau.jpg"
};
estrutura[6]={
        nome:"Felipe",
        sobrenome:"Ramos",
        foto:"felipe.jpg"
};
estrutura[7]={
        nome:"Fernando",
        sobrenome:"Carlos",
        foto:"fernando.jpg"
};
estrutura[8]={
        nome:"Gilmar",
        sobrenome:"Andrade",
        foto:"gilmar.jpg"
};
estrutura[9]={
        nome:"Giovanni",
        sobrenome:"Begossi",
        foto:"giovanni.jpg"
};
estrutura[10]={
        nome:"Iana",
        sobrenome:"Albuquerque",
        foto:"iana.jpg"
};
estrutura[11]={
        nome:"João Pedro",
        sobrenome:"Lobo",
        foto:"joaopedro.jpg"
};
estrutura[12]={
        nome:"Juarez",
        sobrenome:"Augusto",
        foto:"juarez.jpg"
};
estrutura[13]={
        nome:"Mateus",
        sobrenome:"Patricio",
        foto:"mateus.jpg"
};
estrutura[14]={
        nome:"Mara",
        sobrenome:"Oliveira",
        foto:"mara.jpg"
};
estrutura[15]={
        nome:"Rafael",
        sobrenome:"Ribeiro",
        foto:"rafael.jpg"
};
estrutura[16]={
        nome:"Ruan",
        sobrenome:"Garcia",
        foto:"ruan.jpg"
};
estrutura[17]={
        nome:"Sanderson",
        sobrenome:"Douglas",
        foto:"sanderson.jpg"
};
estrutura[18]={
        nome:"Wendel",
        sobrenome:"Américo",
        foto:"wendel.jpg"
}; 

var i = 0;
var tempo = 10000;
var innerWidth;
var innerHeight;
var diagonal;
var tamanhoCirculo;

function initPlacaVirtual(){
   console.log('INIT PLACA VIRTUAL');
   $("#placaVirtual").addClass('sucesso');
   resizePlaca();

   ordem = shuffle(ordem);
   
   indice=0;
   $("#placaVirtual").children(".tela").each(function(){
        $(this).find('.foto').css("background-image", "url('media/"+estrutura[ordem[indice]].foto+"')");
        $(this).find('.legenda p').html('<strong>'+estrutura[ordem[indice]].nome+'</strong> '+estrutura[ordem[indice]].sobrenome);
        indice++;
   });

  //inicia a execução com a tela de restart
  telaRestartSlide();
}
function resizePlaca(){
    console.log('resize Placa');

    innerWidth = getWidthBrowser();
    innerHeight = getHeightBrowser();
    diagonal = parseInt(Math.sqrt(innerWidth*innerWidth + innerHeight*innerHeight));
    console.log(innerWidth+" x "+innerHeight + " diagonal:"+diagonal);

    var btRestart = $(".fim .btRestart");
    btRestart.css('margin-top', (innerHeight - btRestart.height())/2+"px" );

    if(innerWidth>=1280){
        tamanhoCirculo = 350;
    }
    else if(innerWidth>=600){
        tamanhoCirculo = 250;
    }else{
        tamanhoCirculo = 150;
    }

    $("#placaVirtual .brasao").height(innerHeight);
    $("#placaVirtual .fim").height(innerHeight);

    $("#placaVirtual .palco").height(innerHeight);

    var raios = $("#placaVirtual .raios");
    raios.height(diagonal);
    raios.width(diagonal);
    raios.css("left", ((innerWidth-diagonal)/2) + "px");
    raios.css("top", ((innerHeight-diagonal )/2) + "px");

    var tela = $("#placaVirtual .tela");
    tela.width( innerWidth);
    tela.height(innerHeight);

    var linhas = $("#placaVirtual .linhas");
    linhas.width( innerWidth);
    linhas.height( innerHeight);

    var linha = $("#placaVirtual .linha");
    linha.height(diagonal);
    linha.css( "margin-left",((innerWidth - 13)/2)+"px" );
    linha.css( "margin-top",(innerHeight/2)+"px" );

    var circulo = $("#placaVirtual .circulo");
    circulo.height( (tamanhoCirculo + 13*2) );
    circulo.width( (tamanhoCirculo + 13*2)*2 );
    circulo.css( "margin-left", (innerWidth - (tamanhoCirculo + 2*13))/2 + "px" );
    circulo.css( "margin-top", (innerHeight - (tamanhoCirculo + 2*13))/2 + "px" );

    var foto = $("#placaVirtual .foto");
    foto.height( tamanhoCirculo );
    foto.width( tamanhoCirculo );

    /*
     * container da playlist 
     * esse treçho de código ainda não foi convertido para jQuery...
     * 
    var containerPlaylist = document.getElementById("container-playlist");
    containerPlaylist.style.height = innerHeight+"px";
    if(innerWidth>=600){
        containerPlaylist.style.width = 600+"px";
    }else{
        containerPlaylist.style.width = innerWidth+"px";
    }

    var audio = document.querySelectorAll("#container-playlist audio");
    audio[0].style.width = (parseInt(containerPlaylist.style.width)-20) + "px";

    var playlist = document.querySelectorAll("#container-playlist #playlist");
    playlist[0].style.height = (innerHeight-150) + "px";

    */
}
function shuffle(v){
    for(var j, x, i = v.length; i; j = parseInt(Math.random() *i), x = v[--i], v[i]=v[j], v[j]=x );
    return v;
}
function restart(){
   console.log('RESTART');
   console.log(ordem.join(" "));
   
   $('#placaVirtual .botoes').slideDown('slow');
   $("#placaVirtual .fim").fadeOut("slow");
   $("#placaVirtual .barra").addClass("animate");
   $("#placaVirtual .brasao").addClass("animate");

   timer = $.timer(function() {
        console.log('timer:'+i);
        if(i>=19){
            $('#t'+(i-1)).removeClass("animate");
            $('#t'+(i-1)+' .linhas').removeClass("animate");
            $('#t'+(i-1)+' .circulo').removeClass("animate");
            $('#t'+(i-1)+' .legenda').removeClass("animate");

            //reset
            i=0;
            timer.stop();
            
            //configura tela para exibição a partir da segunda exibição
            $('#placaVirtual #mensagem').slideDown('fast');
            $(window).scrollTop( $('#placaVirtual #mensagem').offset().top + 70 );
            $('#placaVirtual .btRestart').addClass('restart');
            $('#placaVirtual .botoes').slideUp('slow');
            
            //exibe a tela de restart
            telaRestartSlide();
         }else{
            $("#placaVirtual .brasao").removeClass("animate");
            proximoSlide(); 
         }
    });

    timer.set({ time : tempo, autostart : false });
    timer.play();
}
function proximoSlide(){
   console.log("Rodar elemento "+ordem[i] +' '+ estrutura[ordem[i]].nome +  " i="+i );

   $('#t'+i).addClass("animate");
   $('#t'+i+' .linhas').addClass("animate");
   $('#t'+i+' .circulo').addClass("animate");
   $('#t'+i+' .legenda').addClass("animate");

   if(i!=0){
        $('#t'+(i-1)).removeClass("animate");
        $('#t'+(i-1)+' .linhas').removeClass("animate");
        $('#t'+(i-1)+' .circulo').removeClass("animate");
        $('#t'+(i-1)+' .legenda').removeClass("animate");
   }
   i++;
}
function telaRestartSlide(){
   console.log("tela restartSlide");
   $("#placaVirtual .tela").removeClass("animate");
   $("#placaVirtual .circulo").removeClass("animate");
   $("#placaVirtual .legenda").removeClass("animate");
   $("#placaVirtual .linhas").removeClass("animate");
   $("#placaVirtual .barra").removeClass("animate");
   $("#placaVirtual .fim").fadeIn("slow");
}
function tooglePlayPause(){
    if(timer.isActive){
        console.log('paused');
        console.log("faltam: "+timer.remaining);
        $('#placaVirtual .btPlay').addClass('pause');
        timer.pause();
    } 
    else{
        console.log('running');
        $('#placaVirtual .btPlay').removeClass('pause');
        timer.play();
    }
    $('#placaVirtual .barra').toggleClass('paused');
    $('#placaVirtual .brasao').toggleClass('paused');
    $('#placaVirtual .tela').toggleClass('paused');
    $('#placaVirtual .circulo').toggleClass('paused');
    $('#placaVirtual .legenda').toggleClass('paused');
}
function play(){
    if(!timer.isActive){
        console.log('running');
        timer.play();
        $('#placaVirtual .btPlay').removeClass('pause');
        $('#placaVirtual .barra').removeClass('paused');
        $('#placaVirtual .brasao').removeClass('paused');
        $('#placaVirtual .tela').removeClass('paused');
        $('#placaVirtual .circulo').removeClass('paused');
        $('#placaVirtual .legenda').removeClass('paused');
    }
}
function pause(){
    if(timer.isActive){
        console.log('paused');
        console.log("faltam: "+timer.remaining);
        timer.pause();
        $('#placaVirtual .btPlay').addClass('pause');
        $('#placaVirtual .barra').addClass('paused');
        $('#placaVirtual .brasao').addClass('paused');
        $('#placaVirtual .tela').addClass('paused');
        $('#placaVirtual .circulo').addClass('paused');
        $('#placaVirtual .legenda').addClass('paused');
    } 
}