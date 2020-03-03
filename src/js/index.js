import Album from './Album';
import FirebaseConfig from './FirebaseConfig';

document.addEventListener("DOMContentLoaded", function(event) {


    //firebase code
    const firebase = new FirebaseConfig();

    //FIX TI vai dar erro se o album tiver menos de 10 fotos
    const placaController = new Album(firebase);//TODO o primeiro album está limitado a 10 fotos, mas deveria listar todas as 19
    placaController.init('photos/placa', 'placa-bg.png', 'placa-bg.png', 'Geração Kekulé', 'Informática 2013.2', 19);

    const palacioCulturaController = new Album(firebase);
    palacioCulturaController.init('photos/palaciocultura', 'palaciocultura-bg.jpg', 'palaciocultura-fg.png', 'Nossa Turma é cultura', 'Palácio da Cultura, Natal/RN, 2015', 10);
    
    const formaturaController = new Album(firebase);
    formaturaController.init('photos/formatura', 'formatura-bg.jpg', 'formatura-bg.jpg', 'A Formatura', 'IFRN-ZN, 11 de Abril de 2014', 10);
    
    //////////


    const adila2019 = new Album(firebase);
    adila2019.init('photos/adila2019', 'adila-bg.jpg', 'adila-bg.jpg', 'Ádilaaaaaa!', 'Cachorro Quente, Natal/RN, 27 de Setembro de 2019', 10);

    const aniversarioMara2016 = new Album(firebase);
    aniversarioMara2016.init('photos/aniversariomara2016', 'aniversariomara-bg.jpg', 'aniversariomara-bg.jpg', 'Aniversário Surpresa de Mara', 'Casa de Irwing, 20 de Agosto de 2016', 10);
    
    const aniversarioRuan2016 = new Album(firebase);
    aniversarioRuan2016.init('photos/aniversarioruan2016', 'aniversarioruan-bg.jpg', 'aniversarioruan-bg.jpg', 'Aniversário Surpresa de Ruan', 'Casa de Mara, 20 de Março de 2016', 10);
    
    const casaAlison2014 = new Album(firebase);
    casaAlison2014.init('photos/casaalison2014', 'casaalison2014-bg.jpg', 'casaalison2014-bg.jpg', 'Encontro da Turma (só os Neguebas)', 'Casa de Alison, 18 de Outubro de 2014', 10);
    
    const ultimoDia2014 = new Album(firebase);
    ultimoDia2014.init('photos/ultimodia2014', 'ultimodia-bg.jpg', 'ultimodia-bg.jpg', 'Invasão da piscina no último dia de aula', 'IFRN-ZN, 17 de Fevereiro de 2014', 10);
    
    const fortaleza2014 = new Album(firebase);
    fortaleza2014.init('photos/fortaleza2014', 'fortaleza-bg.jpg', 'fortaleza-bg.jpg', 'Ai que bom, ai que beleza, Nossa Turma em Fortaleza!', 'Fortaleza/CE, Janeiro de 2014', 10);
    
    const rodizio2013 = new Album(firebase);
    rodizio2013.init('photos/rodizio2013', 'rodizio-bg.jpg', 'rodizio-bg.jpg', 'Um Bom Rodízio', 'Dom Gourmet, Natal/RN, 21 de Dezembro de 2013', 10);
    
    const museucamarcascudo2013 = new Album(firebase);
    museucamarcascudo2013.init('photos/museucamaracascudo2013', 'museucamaracascudo-bg.jpg', 'museucamaracascudo-bg.jpg', '"Carpe Diem"', 'Museu Câmara Cascudo (Era pra gente estar vendo fotos de Giovanni, Alison e Rafael recebendo as medalhas da OBEMEP), 28 de Março de 2013', 10);
    
    const aniversarioFabio2013 = new Album(firebase);
    aniversarioFabio2013.init('photos/fabio2013', 'placa-bg.png', 'placa-bg.png', 'BD... BD... BD BD BD...', 'Aniversário de Fábio, 21 de Junho de 2013', 10);
    
    const cearamirim2013 = new Album(firebase);
    cearamirim2013.init('photos/cearamirim2013', 'placa-bg.png', 'placa-bg.png', 'Turistando em Ceará-Mirim', 'Ceará Mirim/RN, 1 de Maio de 2013', 10);
    
    const restolhoRN2013 = new Album(firebase);
    restolhoRN2013.init('photos/restolho2013', 'restolho-bg.jpg', 'restolho-bg.jpg', 'Restolho, Agave e Turmalina', 'Mesorregiões do RN, Abril de 2013', 10);
    
    const sorvete2013 = new Album(firebase);
    sorvete2013.init('photos/sorvete2013', 'sorvete-bg.jpg', 'sorvete-bg.jpg', 'Tu qué galfo ou qué culé?', 'Sorveteria ali perto do IF, 18 de Janeiro de 2013', 10);
    
    const mataEstrela2012 = new Album(firebase);
    mataEstrela2012.init('photos/mataestrela2012', 'mataestrela-bg.jpg', 'mataestrela-bg.jpg', 'Geração Coca-cola', 'Mata Estrela, Baía Formosa/RN, 31 de Janeiro de 2012', 10);
    
    const olinda2012 = new Album(firebase);
    olinda2012.init('photos/olinda2012', 'olinda-bg.jpg', 'olinda-bg.jpg', 'O quarto do mofo', 'Pernambuco, 19 de Janeiro de 2012', 10);
    
    const zueiraFacebook = new Album(firebase);
    zueiraFacebook.init('photos/zueira', 'zueira-bg.jpg', 'zueira-bg.jpg', '#TheZueiraNeverEnds (Caaara, tu não tá ligado no que eu achei!)', 'Eu tenho certeza que vocês estão escondendo mais de um milhão de fotos não compartilhadas. Essa é a minha vingança.', 10);
    //Cheguei, chegastes
    //ip do halo
    //negueba
    //cara tu não tá ligado
});
