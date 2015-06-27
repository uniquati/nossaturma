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
               resize();
               window.addEventListener('resize', resize);
               ordem = shuffle(ordem);
               rodarSlide();
               
            }
            function resize(){
                innerWidth = window.innerWidth;
                innerHeight = window.innerHeight;
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
                
                var brasao =  document.querySelectorAll(".brasao");
               // brasao[0].style.width = innerWidth+"px";
                brasao[0].style.height = innerHeight+"px";
                var fim =  document.querySelectorAll(".fim");
               // fim[0].style.width = innerWidth+"px";
                fim[0].style.height = innerHeight+"px";
                
                var palco = document.querySelectorAll(".palco");
                palco[0].style.height = innerHeight + "px";
                
                var raios = document.querySelectorAll(".raios div");
                raios[0].classList.add("raios1");
                raios[0].style.height = diagonal + "px";
                raios[0].style.width = diagonal + "px";
                raios[0].style.left = ((innerWidth - diagonal)/2) + "px";
                raios[0].style.top = ((innerHeight - diagonal)/2) + "px";
                
                raios[1].classList.add("raios2");
                raios[1].style.height = diagonal + "px";
                raios[1].style.width = diagonal + "px";
                raios[1].style.left = ((innerWidth - diagonal)/2) + "px";
                raios[1].style.top = ((innerHeight - diagonal)/2) + "px";
                
                var tela = document.querySelectorAll(".tela");
                tela[0].style.width = innerWidth+"px";
                tela[0].style.height = innerHeight+"px";
                tela[1].style.width = innerWidth+"px";
                tela[1].style.height = innerHeight+"px";
                
                
                var linhas = document.querySelectorAll(".linhas");
                linhas[0].style.width = innerWidth+"px";
                linhas[0].style.height = innerHeight+"px";
                linhas[1].style.width = innerWidth+"px";
                linhas[1].style.height = innerHeight+"px";
                
                var linha = document.querySelectorAll(".linha");
                for(var i=0; i< linha.length; i++){
                    linha[i].style.height = diagonal + "px";
                    linha[i].style.marginLeft = ((innerWidth - 13)/2)+"px";
                    linha[i].style.marginTop = (innerHeight/2)+"px";
                }
                
                var circulo = document.querySelectorAll(".circulo");
                circulo[0].style.height = (tamanhoCirculo + 13*2) + "px";
                circulo[0].style.width = (tamanhoCirculo + 13*2)*2 + "px";
                circulo[0].style.marginLeft = (innerWidth - (tamanhoCirculo + 2*13))/2 + "px";
                circulo[0].style.marginTop = (innerHeight - (tamanhoCirculo + 2*13))/2 + "px";
                circulo[1].style.height = (tamanhoCirculo + 13*2) + "px";
                circulo[1].style.width = (tamanhoCirculo + 13*2)*2 + "px";
                circulo[1].style.marginLeft = (innerWidth - (tamanhoCirculo + 2*13))/2 + "px";
                circulo[1].style.marginTop = (innerHeight - (tamanhoCirculo + 2*13))/2 + "px";
                
                var foto = document.querySelectorAll(".foto");
                foto[0].style.height = tamanhoCirculo + "px";
                foto[0].style.width = tamanhoCirculo + "px";
                foto[1].style.height = tamanhoCirculo + "px";
                foto[1].style.width = tamanhoCirculo + "px";
                
                
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
                
            }
            function shuffle(v){
                for(var j, x, i = v.length; i; j = parseInt(Math.random() *i), x = v[--i], v[i]=v[j], v[j]=x );
                return v;
            }
            
            function rodarSlide(){
               console.log(ordem.join(" "));
               
               var fim = document.querySelectorAll(".fim");
               fim[0].classList.remove("animate");
               
               var barra = document.querySelectorAll(".barra");
               barra[0].classList.add("animate");
               
               var brasao = document.querySelectorAll(".brasao");
               brasao[0].classList.add("animate");
               
               
               intervaloBrasao = window.setTimeout(function(){ proximoSlide();}, tempo);
               
               
               //configurações do proximo slide
               var tela = document.querySelectorAll(".tela");
               //var circulo = document.querySelectorAll(".circulo");
               var foto = document.querySelectorAll(".foto");
               //var legenda = document.querySelectorAll(".legenda");
               var strong = document.querySelectorAll(".legenda strong");
               var linhas = document.querySelectorAll(".linhas");
               var linha1 = document.querySelectorAll(".a1");
               var linha2 = document.querySelectorAll(".a2");
               var linha3 = document.querySelectorAll(".a3");
               var linha4 = document.querySelectorAll(".a4");
               
               tela[1].classList.add(estrutura[ordem[0]].tela);
               foto[1].style.backgroundImage = "url('imagens/"+estrutura[ordem[0]].foto+"')";
               strong[1].innerHTML = estrutura[ordem[0]].legenda;
               linhas[1].classList.add(estrutura[ordem[0]].linhas);
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
                   intervaloEntreSlides = window.setTimeout(function(){ fimSlide();}, tempo);
               }else{
                   intervaloEntreSlides = window.setTimeout(function(){ proximoSlide();}, tempo);
                } 
            }
            function fimSlide(){
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
               
               var a,b, indiceAnterior = ordem[ordem.length - 1], indiceAtual = ordem[i];
               if(i%2 == 0){
                   a=0;
                   b=1;
               }else{
                   b=0;
                   a=1;
               }
               
               tela[a].classList.remove(estrutura[indiceAnterior].tela);
               tela[a].classList.remove("animate");
               tela[b].classList.remove("animate");
               
               circulo[a].classList.remove("animate");
               circulo[b].classList.remove("animate");
               
               legenda[a].classList.remove("animate");
               legenda[b].classList.remove("animate");
               
               linhas[a].classList.remove(estrutura[indiceAnterior].linhas);
               
               linhas[a].classList.remove("animate");
               linhas[b].classList.remove("animate");
               
               var barra = document.querySelectorAll(".barra");
               barra[0].classList.remove("animate");
               
               var fim = document.querySelectorAll(".fim");      
               fim[0].classList.add("animate");
              
            }


