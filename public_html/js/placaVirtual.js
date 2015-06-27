var ordem = new Array();
            ordem.push( 0, 1, 2, 3, 4, 5, 6, 7 , 8 , 9 , 10, 11, 12, 13, 14, 15, 16, 17, 18);
            
            var estrutura = new Array();
            estrutura[0]={
                    legenda:"Ádila Gabrielly",
                    foto:"imagem1.jpg",
                    tela:"right-top",
                    linhas:"linha-horario",
                    linha1:1,
                    linha2:0,
                    linha3:0,
                    linha4:0
                };
            estrutura[1]={
                    legenda:"Alison Jhonas",
                    foto:"imagem2.jpg",
                    tela:"right-bottom",
                    linhas:"linha-antihorario",
                    linha1:1,
                    linha2:1,
                    linha3:0,
                    linha4:0
                };
            estrutura[2]={
                    legenda:"Alyne Érico",
                    foto:"imagem3.jpg",
                    tela:"left-top",
                    linhas:"linha-horario",
                    linha1:1,
                    linha2:0,
                    linha3:1,
                    linha4:0
                };
            estrutura[3]={
                    legenda:"André Carvalho",
                    foto:"imagem4.jpg",
                    tela:"left-bottom",
                    linhas:"linha-antihorario",
                    linha1:1,
                    linha2:0,
                    linha3:0,
                    linha4:1
                };
            estrutura[4]={
                    legenda:"Emerson Freire",
                    foto:"imagem1.jpg",
                    tela:"right-bottom",
                    linhas:"linha-horario",
                    linha1:1,
                    linha2:1,
                    linha3:1,
                    linha4:0
                };
            estrutura[5]={
                    legenda:"Esau Teodoro",
                    foto:"imagem2.jpg",
                    tela:"right-top",
                    linhas:"linha-antihorario",
                    linha1:1,
                    linha2:0,
                    linha3:1,
                    linha4:1
                };
                
           
           estrutura[6]={
                    legenda:"Felipe Oliveira",
                    foto:"imagem3.jpg",
                    tela:"right-top",
                    linhas:"linha-horario",
                    linha1:1,
                    linha2:0,
                    linha3:0,
                    linha4:0
                };
            estrutura[7]={
                    legenda:"Fernando Carlos",
                    foto:"imagem4.jpg",
                    tela:"right-bottom",
                    linhas:"linha-antihorario",
                    linha1:1,
                    linha2:1,
                    linha3:0,
                    linha4:0
                };
            estrutura[8]={
                    legenda:"Gilmar Vitor",
                    foto:"imagem1.jpg",
                    tela:"left-top",
                    linhas:"linha-horario",
                    linha1:1,
                    linha2:0,
                    linha3:1,
                    linha4:0
                };
            estrutura[9]={
                    legenda:"Giovanni Begossi",
                    foto:"imagem2.jpg",
                    tela:"left-bottom",
                    linhas:"linha-antihorario",
                    linha1:1,
                    linha2:0,
                    linha3:0,
                    linha4:1
                };
            estrutura[10]={
                    legenda:"Iana Albuquerque",
                    foto:"imagem3.jpg",
                    tela:"right-bottom",
                    linhas:"linha-horario",
                    linha1:1,
                    linha2:1,
                    linha3:1,
                    linha4:0
                };
            estrutura[11]={
                    legenda:"João Pedro",
                    foto:"imagem4.jpg",
                    tela:"right-top",
                    linhas:"linha-antihorario",
                    linha1:1,
                    linha2:0,
                    linha3:1,
                    linha4:1
                };
                
                
             estrutura[12]={
                    legenda:"Juarez Augusto",
                    foto:"imagem1.jpg",
                    tela:"right-top",
                    linhas:"linha-horario",
                    linha1:1,
                    linha2:0,
                    linha3:0,
                    linha4:0
                };
            estrutura[13]={
                    legenda:"Matheus Patrício",
                    foto:"imagem2.jpg",
                    tela:"right-bottom",
                    linhas:"linha-antihorario",
                    linha1:1,
                    linha2:1,
                    linha3:0,
                    linha4:0
                };
            estrutura[14]={
                    legenda:"Mara Cristiane",
                    foto:"imagem3.jpg",
                    tela:"left-top",
                    linhas:"linha-horario",
                    linha1:1,
                    linha2:0,
                    linha3:1,
                    linha4:0
                };
            estrutura[15]={
                    legenda:"Rafael Ribeiro",
                    foto:"imagem4.jpg",
                    tela:"left-bottom",
                    linhas:"linha-antihorario",
                    linha1:1,
                    linha2:0,
                    linha3:0,
                    linha4:1
                };
            estrutura[16]={
                    legenda:"Ruan Garcia",
                    foto:"imagem1.jpg",
                    tela:"right-bottom",
                    linhas:"linha-horario",
                    linha1:1,
                    linha2:1,
                    linha3:1,
                    linha4:0
                };
            estrutura[17]={
                    legenda:"Sanderson Douglas",
                    foto:"imagem2.jpg",
                    tela:"right-top",
                    linhas:"linha-antihorario",
                    linha1:1,
                    linha2:0,
                    linha3:1,
                    linha4:1
                };
               
    
      
                
             estrutura[18]={
                    legenda:"Wendel Américo",
                    foto:"imagem1.jpg",
                    tela:"right-top",
                    linhas:"linha-horario",
                    linha1:1,
                    linha2:0,
                    linha3:0,
                    linha4:0
                }; 
                
            var i = 0;
            var tempo = 10000;
            var innerWidth;
            var innerHeight;
            var diagonal;
            var tamanhoCirculo;
            var intervaloBrasao;
            var intervaloEntreSlides;
            
            function initSlide(){
               console.log('INIT SLIDE');
               $("#placaVirtual").addClass('sucesso');
               resizePlaca();
              
               ordem = shuffle(ordem);
               
               for(var indice = 0; indice<19; indice++){
                    estrutura[ordem[indice]].legenda;
                    estrutura[ordem[indice]].foto;
                    var foto = $('#t'+i+' .foto');
                    foto.css("background", "url('imagens/"+estrutura[ordem[indice]].foto+"')");
                    var legenda = $('#t'+i+' .legenda strong');
                    legenda.html(estrutura[ordem[indice]].legenda);
               }
              
               /*
                * trecho ainda não convertido para jQuery... 
                if(estrutura[ordem[0]].linha1 == 1){
                  linha1[1].style.display = "block"; 
               }else{
                  linha1[1].style.display = "none"; 
               }
               
               if(estrutura[ordem[0]].linha2 == 1){
                  linha2[1].style.display = "block"; 
               }else{
                  linha2[1].style.display = "none"; 
               }
              
               if(estrutura[ordem[0]].linha3 == 1){
                  linha3[1].style.display = "block";
               }else{
                  linha3[1].style.display = "none";  
               }
               
               if(estrutura[ordem[0]].linha4 == 1){
                  linha4[1].style.display = "block";
               }else{
                  linha4[1].style.display = "none"; 
               }
               */
              
              //inicia a execução com a tela de restart
              telaRestartSlide();
               
            }
            function resizePlaca(){
                console.log('resize Placa');
                
                innerWidth = getWidthBrowser();
                innerHeight = getHeightBrowser();
                diagonal = parseInt(Math.sqrt(innerWidth*innerWidth + innerHeight*innerHeight));
                console.log(innerWidth+" x "+innerHeight + " diagonal:"+diagonal);
                
                
                if(innerWidth>=1280){
                    tamanhoCirculo = 350;
                }
                else if(innerWidth>=600){
                    tamanhoCirculo = 250;
                }else{
                    tamanhoCirculo = 150;
                }
                
                var brasao =  $(".brasao");
               // brasao[0].style.width = innerWidth+"px";
                brasao.height(innerHeight);
                var fim =  $(".fim");
               // fim[0].style.width = innerWidth+"px";
                fim.height(innerHeight);
                
                var palco = $(".palco");
                palco.height(innerHeight);
                
                var raios = $(".raios");
                raios.height(diagonal);
                raios.width(diagonal);
               // raios.css("transform", "translate(300px,0)");
                //raios.css("left", "0px");
                //raios.css("top",  "0px");
                raios.css("left", ((innerWidth-diagonal)/2) + "px");
                raios.css("top", ((innerHeight-diagonal )/2) + "px");
                
                
                var tela = $(".tela");
                tela.width( innerWidth);
                tela.height(innerHeight);
                
                
                var linhas = $(".linhas");
                linhas.width( innerWidth);
                linhas.height( innerHeight);
                
                var linha = $(".linha");
                linha.height(diagonal);
                linha.css( "margin-left",((innerWidth - 13)/2)+"px" );
                linha.css( "margin-top",(innerHeight/2)+"px" );
                
                
                var circulo = $(".circulo");
                circulo.height( (tamanhoCirculo + 13*2) );
                circulo.width( (tamanhoCirculo + 13*2)*2 );
                circulo.css( "margin-left", (innerWidth - (tamanhoCirculo + 2*13))/2 + "px" );
                circulo.css( "margin-top", (innerHeight - (tamanhoCirculo + 2*13))/2 + "px" );
           
                
                var foto = $(".foto");
                foto.height( tamanhoCirculo );
                foto.width( tamanhoCirculo );
                
                
                /*
                 * container da playlist 
                 * esse treçho de código ainda não foi convertido para jQuery...
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
               
               var fim = $(".fim");
               //fim.removeClass("animate");
               $(".fim").fadeOut("slow");
               
               var barra = $(".barra");
               barra.addClass("animate");
               
               var brasao = $(".brasao");
               brasao.addClass("animate");
               
               
               //intervaloBrasao = window.setTimeout(function(){ proximoSlide();}, tempo);
               timer = $.timer(function() {
                    
                    console.log('This message was sent by a timer:');
                    //proximoSlide();
                    //timer.stop();
                });

                timer.set({ time : 10000, autostart : false });
                
                timer.play();
               
            }
            function proximoSlide(){
               console.log("Rodar elemento "+ordem[i] +' '+ estrutura[ordem[i]].legenda +  " i="+i );
               var brasao = document.querySelectorAll(".brasao");
               brasao[0].classList.remove("animate");
               
               var tela = document.querySelectorAll(".tela");
               var circulo = document.querySelectorAll(".circulo");
               var foto = document.querySelectorAll(".foto");
               var legenda = document.querySelectorAll(".legenda");
               var strong = document.querySelectorAll(".legenda strong");
               var linhas = document.querySelectorAll(".linhas");
               var linha1 = document.querySelectorAll(".a1");
               var linha2 = document.querySelectorAll(".a2");
               var linha3 = document.querySelectorAll(".a3");
               var linha4 = document.querySelectorAll(".a4");
               
               var a,b, indiceAnterior, indiceAtual = ordem[i], proximoIndice;
               if(i%2 == 0){
                   a=0;
                   b=1;
               }else{
                   b=0;
                   a=1;
               }
               if(i==0){
                   indiceAnterior = ordem[ordem.length - 1];
               }else{
                   indiceAnterior = ordem[i - 1];
               }
               if(i>=ordem.length-1){
                   proximoIndice = ordem[0];
               }else{
                   proximoIndice = ordem[i + 1];
               }
               
               
               tela[a].classList.remove(estrutura[indiceAnterior].tela);
               tela[a].classList.remove("animate");
               tela[a].classList.add(estrutura[proximoIndice].tela);
               //tela[b].classList.add(estrutura[indiceAtual].tela);
               tela[b].classList.add("animate");
               
               circulo[a].classList.remove("animate");
               circulo[b].classList.add("animate");
               
               foto[a].style.backgroundImage = "url('imagens/"+estrutura[proximoIndice].foto+"')";
               //foto[b].style.backgroundImage = "url('../imagens/"+estrutura[indiceAtual].foto+"')";
               
               legenda[a].classList.remove("animate");
               legenda[b].classList.add("animate");
               
               strong[a].innerHTML = estrutura[proximoIndice].legenda;
               //strong[b].innerHTML = estrutura[indiceAtual].legenda;
               
              
               linhas[a].classList.remove(estrutura[indiceAnterior].linhas);
               linhas[a].classList.remove("animate");
               linhas[a].classList.add(estrutura[proximoIndice].linhas);
               //linhas[b].classList.add(estrutura[indiceAtual].linhas);
               linhas[b].classList.add("animate");
               
               if(estrutura[proximoIndice].linha1 == 1){
                  linha1[a].style.display = "block"; 
               }else{
                  linha1[a].style.display = "none"; 
               }
               
               if(estrutura[proximoIndice].linha2 == 1){
                  linha2[a].style.display = "block"; 
               }else{
                  linha2[a].style.display = "none"; 
               }
              
               if(estrutura[proximoIndice].linha3 == 1){
                  linha3[a].style.display = "block";
               }else{
                  linha3[a].style.display = "none";  
               }
               
               if(estrutura[proximoIndice].linha4 == 1){
                  linha4[a].style.display = "block";
               }else{
                  linha4[a].style.display = "none"; 
               }
               
               
               i++;
               if(i >= ordem.length){ 
                   i=0;
                   intervaloEntreSlides = window.setTimeout(function(){ telaRestartSlide();}, tempo);
               }else{
                   intervaloEntreSlides = window.setTimeout(function(){ proximoSlide();}, tempo);
                } 
            }
            function telaRestartSlide(){
               $(".tela").removeClass("animate");
               $(".circulo").removeClass("animate");
               $(".legenda").removeClass("animate");
               $(".linhas").removeClass("animate");
               $(".barra").removeClass("animate");
               //$(".fim").addClass("animate");
               $(".fim").fadeIn("slow");
            }
            
            function tooglePlayPause(){
                console.log('play/pause');
            }


