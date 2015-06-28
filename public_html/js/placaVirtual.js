var ordem = new Array();
            ordem.push( 0, 1, 2, 3, 4, 5, 6, 7 , 8 , 9 , 10, 11, 12, 13, 14, 15, 16, 17, 18);
            
            var estrutura = new Array();
            estrutura[0]={
                    nome:"Ádila",
                    sobrenome:"Gabrielly",
                    foto:"imagem1.jpg",
                    tela:"right-top",
                    linhas:"linha-horario",
                    linha1:1,
                    linha2:0,
                    linha3:0,
                    linha4:0
            };
            estrutura[1]={
                    nome:"Alison",
                    sobrenome:"Jhonas",
                    foto:"imagem2.jpg",
                    tela:"right-bottom",
                    linhas:"linha-antihorario",
                    linha1:1,
                    linha2:1,
                    linha3:0,
                    linha4:0
            };
            estrutura[2]={
                    nome:"Alyne",
                    sobrenome:"Érico",
                    foto:"imagem3.jpg",
                    tela:"left-top",
                    linhas:"linha-horario",
                    linha1:1,
                    linha2:0,
                    linha3:1,
                    linha4:0
            };
            estrutura[3]={
                    nome:"André",
                    sobrenome:"Carvalho",
                    foto:"imagem4.jpg",
                    tela:"left-bottom",
                    linhas:"linha-antihorario",
                    linha1:1,
                    linha2:0,
                    linha3:0,
                    linha4:1
            };
            estrutura[4]={
                    nome:"Emerson",
                    sobrenome:"Freire",
                    foto:"imagem1.jpg",
                    tela:"right-bottom",
                    linhas:"linha-horario",
                    linha1:1,
                    linha2:1,
                    linha3:1,
                    linha4:0
            };
            estrutura[5]={
                    nome:"Esau",
                    sobrenome:"Teodoro",
                    foto:"imagem2.jpg",
                    tela:"right-top",
                    linhas:"linha-antihorario",
                    linha1:1,
                    linha2:0,
                    linha3:1,
                    linha4:1
            };
            estrutura[6]={
                    nome:"Felipe",
                    sobrenome:"Ramos",
                    foto:"imagem3.jpg",
                    tela:"right-top",
                    linhas:"linha-horario",
                    linha1:1,
                    linha2:0,
                    linha3:0,
                    linha4:0
            };
            estrutura[7]={
                    nome:"Fernando",
                    sobrenome:"Carlos",
                    foto:"imagem4.jpg",
                    tela:"right-bottom",
                    linhas:"linha-antihorario",
                    linha1:1,
                    linha2:1,
                    linha3:0,
                    linha4:0
            };
            estrutura[8]={
                    nome:"Gilmar",
                    sobrenome:"Andrade",
                    foto:"imagem1.jpg",
                    tela:"left-top",
                    linhas:"linha-horario",
                    linha1:1,
                    linha2:0,
                    linha3:1,
                    linha4:0
            };
            estrutura[9]={
                    nome:"Giovanni",
                    sobrenome:"Begossi",
                    foto:"imagem2.jpg",
                    tela:"left-bottom",
                    linhas:"linha-antihorario",
                    linha1:1,
                    linha2:0,
                    linha3:0,
                    linha4:1
            };
            estrutura[10]={
                    nome:"Iana",
                    sobrenome:"Albuquerque",
                    foto:"imagem3.jpg",
                    tela:"right-bottom",
                    linhas:"linha-horario",
                    linha1:1,
                    linha2:1,
                    linha3:1,
                    linha4:0
            };
            estrutura[11]={
                    nome:"João Pedro",
                    sobrenome:"Lobo",
                    foto:"imagem4.jpg",
                    tela:"right-top",
                    linhas:"linha-antihorario",
                    linha1:1,
                    linha2:0,
                    linha3:1,
                    linha4:1
            };
            estrutura[12]={
                    nome:"Juarez",
                    sobrenome:"Augusto",
                    foto:"imagem1.jpg",
                    tela:"right-top",
                    linhas:"linha-horario",
                    linha1:1,
                    linha2:0,
                    linha3:0,
                    linha4:0
            };
            estrutura[13]={
                    nome:"Mateus",
                    sobrenome:"Patricio",
                    foto:"imagem2.jpg",
                    tela:"right-bottom",
                    linhas:"linha-antihorario",
                    linha1:1,
                    linha2:1,
                    linha3:0,
                    linha4:0
            };
            estrutura[14]={
                    nome:"Mara",
                    sobrenome:"Oliveira",
                    foto:"imagem3.jpg",
                    tela:"left-top",
                    linhas:"linha-horario",
                    linha1:1,
                    linha2:0,
                    linha3:1,
                    linha4:0
            };
            estrutura[15]={
                    nome:"Rafael",
                    sobrenome:"Ribeiro",
                    foto:"imagem4.jpg",
                    tela:"left-bottom",
                    linhas:"linha-antihorario",
                    linha1:1,
                    linha2:0,
                    linha3:0,
                    linha4:1
            };
            estrutura[16]={
                    nome:"Ruan",
                    sobrenome:"Garcia",
                    foto:"imagem1.jpg",
                    tela:"right-bottom",
                    linhas:"linha-horario",
                    linha1:1,
                    linha2:1,
                    linha3:1,
                    linha4:0
            };
            estrutura[17]={
                    nome:"Sanderson",
                    sobrenome:"Douglas",
                    foto:"imagem2.jpg",
                    tela:"right-top",
                    linhas:"linha-antihorario",
                    linha1:1,
                    linha2:0,
                    linha3:1,
                    linha4:1
            };
            estrutura[18]={
                    nome:"Wendel",
                    sobrenome:"Américo",
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
               $('.botoes').slideDown('slow');
               console.log(ordem.join(" "));
               
               $(".fim").fadeOut("slow");
               
               $(".barra").addClass("animate");
               
               $(".brasao").addClass("animate");
               
               
               timer = $.timer(function() {
                    
                    console.log('timer:'+i);
                    if(i>=19){
                        $('#t'+(i-1)).removeClass("animate");
                        $('#t'+(i-1)+' .linhas').removeClass("animate");
                        $('#t'+(i-1)+' .circulo').removeClass("animate");
                        $('#t'+(i-1)+' .legenda').removeClass("animate");
                        
                        //reset
                        i=0;
                        
                        $('.botoes').slideUp('slow');
                        //inicia a execução com a tela de restart
                        telaRestartSlide();
                        
                       timer.stop();
                       console.log('timer stop');
                    }else{
                       $(".brasao").removeClass("animate");
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
               $(".tela").removeClass("animate");
               $(".circulo").removeClass("animate");
               $(".legenda").removeClass("animate");
               $(".linhas").removeClass("animate");
               $(".barra").removeClass("animate");
               $(".fim").fadeIn("slow");
            }
            function tooglePlayPause(){
                
                if(timer.isActive){
                    timer.pause();
                    console.log('paused');
                    console.log("faltam: "+timer.remaining);
                    
                    
                } 
                else{
                    console.log('running');
                    timer.play();
                    
                }
                $('#btPlay').toggleClass('paused');
                $('.barra').toggleClass('paused');
                $('.brasao').toggleClass('paused');
                $('.tela').toggleClass('paused');
                $('.circulo').toggleClass('paused');
                $('.legenda').toggleClass('paused');
            }
            
            function play(){
                if(!timer.isActive){
                    console.log('running');
                    timer.play();
                    $('#btPlay').removeClass('paused');
                    $('.barra').removeClass('paused');
                    $('.brasao').removeClass('paused');
                    $('.tela').removeClass('paused');
                    $('.circulo').removeClass('paused');
                    $('.legenda').removeClass('paused');
                    
                    
                }
            }
            
            function pause(){
                if(timer.isActive){
                    timer.pause();
                    console.log('paused');
                    console.log("faltam: "+timer.remaining);
                    $('#btPlay').addClass('paused');
                    $('.barra').addClass('paused');
                    $('.brasao').addClass('paused');
                    $('.tela').addClass('paused');
                    $('.circulo').addClass('paused');
                    $('.legenda').addClass('paused');
                    
                } 
            }


