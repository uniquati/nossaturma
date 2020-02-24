import Album from './Album';
import FirebaseConfig from './FirebaseConfig';

document.addEventListener("DOMContentLoaded", function(event) {


    //firebase code
    const firebase = new FirebaseConfig();

    //FIX TI vai dar erro se o album tiver menos de 10 fotos
    const placaController = new Album(firebase);//TODO o primeiro album está limitado a 10 fotos, mas deveria listar todas as 19
    placaController.init('photos/placa', 'placa-bg.png', 'placa-bg.png', 'Geração Kekulé', 'Turma 2013.2', 19);

    const palacioCulturaController = new Album(firebase);
    palacioCulturaController.init('photos/palaciocultura', 'palaciocultura-bg.jpg', 'palaciocultura-fg.png', 'Nossa Turma é cultura', 'Palácio da Cultura, Natal/RN, 2015', 10);
    
    const formaturaController = new Album(firebase);
    formaturaController.init('photos/formatura', 'formatura-bg.jpg', 'formatura-bg.jpg', 'A Formatura', 'IFRN-ZN, 11 de Abril de 2014', 10);
    
    //////////


    const adila2019 = new Album(firebase);
    adila2019.init('photos/adila2019', 'placa-bg.png', 'placa-bg.png', 'Ádilaaaaaa!', 'Cachorro Quente, Natal/RN, 27 de Setembro de 2019', 10);

    const aniversarioMara2016 = new Album(firebase);
    aniversarioMara2016.init('photos/aniversariomara2016', 'placa-bg.png', 'placa-bg.png', 'Aniversário Surpresa de Mara', 'Casa de Irwing, 20 de Agosto de 2016', 10);
    
    const aniversarioRuan2016 = new Album(firebase);
    aniversarioRuan2016.init('photos/aniversarioruan2016', 'placa-bg.png', 'placa-bg.png', 'Aniversário Surpresa de Ruan', 'Casa de Mara, 20 de Março de 2016', 10);
    
    
    const casaAlison2014 = new Album(firebase);
    casaAlison2014.init('photos/casaalison2014', 'casaalison2014-bg.jpg', 'casaalison2014-bg.jpg', 'Encontro da Turma (só os Neguebas)', 'Casa de Alison, 18 de Outubro de 2014', 10);
    
    const ultimoDia2014 = new Album(firebase);
    ultimoDia2014.init('photos/ultimodia2014', 'placa-bg.png', 'placa-bg.png', 'Invasão da piscina no último dia de aula', 'IFRN-ZN, 17 de Fevereiro de 2014', 10);
    
    const fortaleza2014 = new Album(firebase);
    fortaleza2014.init('photos/fortaleza2014', 'placa-bg.png', 'placa-bg.png', 'Ai que bom, ai que beleza, Nossa Turma em Fortaleza!', 'Fortaleza/CE, Janeiro de 2014', 10);
    
    
    
    
    const rodizio2013 = new Album(firebase);
    rodizio2013.init('photos/rodizio2013', 'placa-bg.png', 'placa-bg.png', 'Toma Pizza', 'Dom Gourmet, Natal/RN, 21 de Dezembro de 2013', 10);
    
    const museucamarcascudo2013 = new Album(firebase);
    museucamarcascudo2013.init('photos/museucamaracascudo2013', 'placa-bg.png', 'placa-bg.png', 'Museu Câmara Cascudo', 'Museu Câmara Cascudo, 25 de Agosto de 2013', 10);
    
    const aniversarioFabio2013 = new Album(firebase);
    aniversarioFabio2013.init('photos/fabio2013', 'placa-bg.png', 'placa-bg.png', 'BD... BD... BD BD BD...', 'Aniversário de Fábio, 21 de Junho de 2013', 10);
    
    const cearamirim2013 = new Album(firebase);
    cearamirim2013.init('photos/cearamirim2013', 'placa-bg.png', 'placa-bg.png', 'Turista em Ceará-Mirim', 'Ceaá Mirim/RN, 1 de Maio de 2013', 10);
    
    const restolhoRN2013 = new Album(firebase);
    restolhoRN2013.init('photos/restolho2013', 'placa-bg.png', 'placa-bg.png', 'Restolho, Agave e Carcinicultura Irrigada', 'Tour pelo RN, Abril de 2013', 10);
    
    const mataEstrela2012 = new Album(firebase);
    mataEstrela2012.init('photos/mataestrela2012', 'placa-bg.png', 'placa-bg.png', 'Banho de Coca-cola', 'Mata Estrela, Baía Formosa/RN, 31 de Janeiro de 2012', 10);
    
    const olinda2012 = new Album(firebase);
    olinda2012.init('photos/olinda2012', 'placa-bg.png', 'placa-bg.png', 'O quarto do mofo', 'Pernambuco, 19 de Janeiro de 2012', 10);
    
    const zueiraFacebook = new Album(firebase);
    zueiraFacebook.init('photos/zueiraFacebook', 'placa-bg.png', 'placa-bg.png', '#TheZueiraNeverEnds', 'Eu tenho certeza que vocês estão escondendo mais de um milhão de fotos não compartilhadas. Essa é a minha vingança. Vejam por sua conta e risco...', 10);
});
