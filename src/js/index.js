import Album from './Album';
import FirebaseConfig from './FirebaseConfig';

document.addEventListener("DOMContentLoaded", function(event) {

    //firebase code
    const firebase = new FirebaseConfig();

    const placaController = new Album(firebase);
    placaController.init('photos/placa', 'placa-bg.png', 'placa-bg.png', 'Geração Kekulé', 'Informática 2013.2', '', 19, 'album--circle-theme');

    const palacioCulturaController = new Album(firebase);
    palacioCulturaController.init('photos/palaciocultura', 'palaciocultura-bg.jpg', 'palaciocultura-bg.jpg', 'Together Is Better!', 'Visita ao Palácio da Cultura', 'Palácio da Cultura, 2015', 10, '');
    
    const formaturaController = new Album(firebase);
    formaturaController.init('photos/formatura', 'formatura-bg.jpg', 'formatura-bg.jpg', 'Uma Boa Turma', 'Dia da Formatura', 'IFRN, 11 de Abril de 2014', 10, '');
    
    //////////

    const dezAnos = new Album(firebase);
    dezAnos.init('photos/dezAnos2020', '10anos-bg.jpg', '10anos-bg.jpg', '10 anos', 'Como diria o filósofo: "10 anos não são 10 dias. 10 anos são 3653 dias (se contar anos bissextos)"', 'Praia de Perobas, Rio do Fogo/RN, 08 de Março de 2020', 11, '');
    
    const adila2019 = new Album(firebase);
    adila2019.init('photos/adila2019', 'adila-bg.jpg', 'adila-bg.jpg', 'Cheguei, chegaste...', 'Reencontro com Ádila', 'Cachorro Quente, 27 de Setembro de 2019', 11, '');

    const aniversarioMara2016 = new Album(firebase);
    aniversarioMara2016.init('photos/aniversariomara2016', 'aniversariomara-bg.jpg', 'aniversariomara-bg.jpg', 'L\'anniversaire Surprise de Lady M Dark', 'Aniversário de Mara', 'Casa de Irwing, 20 de Agosto de 2016', 10, '');
    
    const aniversarioRuan2016 = new Album(firebase);
    aniversarioRuan2016.init('photos/aniversarioruan2016', 'aniversarioruan-bg.jpg', 'aniversarioruan-bg.jpg', 'Surpriza Naskiĝtago por Ruano', 'Aniversário de Ruan', 'Casa de Mara, 20 de Março de 2016', 10, '');
    
    const confraternizacao2015 = new Album(firebase);
    confraternizacao2015.init('photos/confraternizacao2015', 'confraternizacao-bg.jpg', 'confraternizacao-bg.jpg', 'Um Bom Encontro', '', 'Far Far Away..., 19 de Julho de 2015', 10, '');
    
    const casaAlison2014 = new Album(firebase);
    casaAlison2014.init('photos/casaalison2014', 'casaalison2014-bg.jpg', 'casaalison2014-bg.jpg', 'Só os Negueba ô!', '','Casa de Alison, 18 de Outubro de 2014', 10, '');
    
    const ultimoDia2014 = new Album(firebase);
    ultimoDia2014.init('photos/ultimodia2014', 'ultimodia-bg.jpg', 'ultimodia-bg.jpg', 'Último Dia de Escala Nanométrica', 'Invasão da piscina no último dia de aula!', 'IFRN, 17 de Fevereiro de 2014', 10, '');
    
    const fortaleza2014 = new Album(firebase);
    fortaleza2014.init('photos/fortaleza2014', 'fortaleza-bg.jpg', 'fortaleza-bg.jpg', 'Ai que bom, ai que beleza, Nossa Turma em Fortaleza!', 'Terceira viagem da turma', 'Fortaleza/CE, Janeiro de 2014', 10, '');
    
    const rodizio2013 = new Album(firebase);
    rodizio2013.init('photos/rodizio2013', 'rodizio-bg.jpg', 'rodizio-bg.jpg', 'GeraPizza', 'Rodízio de pizza', 'Dom Gourmet, 21 de Dezembro de 2013', 10, '');
    
    const museucamarcascudo2013 = new Album(firebase);
    museucamarcascudo2013.init('photos/museucamaracascudo2013', 'museucamaracascudo-bg.jpg', 'museucamaracascudo-bg.jpg', 'Drosophila melanogaster', '(Era pra gente estar vendo fotos de Giovanni, Alison e Rafael recebendo as medalhas da OBEMEP)', 'Museu Câmara Cascudo, 28 de Março de 2013', 10, '');
    
    const aniversarioFabio2013 = new Album(firebase);
    aniversarioFabio2013.init('photos/fabio2013', 'fabio-bg.jpg', 'fabio-bg.jpg', 'BD... BD... BD BD BD...', 'Aniversário de Fábio', 'IFRN, 21 de Junho de 2013', 10, '');
    
    const cearamirim2013 = new Album(firebase);
    cearamirim2013.init('photos/cearamirim2013', 'cearamirim-bg.jpg', 'cearamirim-bg.jpg', 'É muita cana!', 'Passeando de trem até Ceará Mirim', 'Ceará Mirim/RN, 1 de Maio de 2013', 10, '');
    
    const restolhoRN2013 = new Album(firebase);
    restolhoRN2013.init('photos/restolho2013', 'restolho.jpg', 'restolho.jpg', 'Restolho, Agave e Turmalina.', 'Segunda viagem da turma', 'Mesorregiões do RN, Abril de 2013', 10, '');
    
    const sorvete2013 = new Album(firebase);
    sorvete2013.init('photos/sorvete2013', 'sorvete-bg.jpg', 'sorvete-bg.jpg', 'Tu qué galfo ou qué culé?', '','Sorveteria ali perto do IF, 18 de Janeiro de 2013', 10, '');
    
    const mataEstrela2012 = new Album(firebase);
    mataEstrela2012.init('photos/mataestrela2012', 'mataestrela-bg.jpg', 'mataestrela-bg.jpg', 'Geração Coca-cola', 'Trilha na Mata Estrela', 'Baía Formosa/RN, 31 de Janeiro de 2012', 10, '');
    
    const olinda2012 = new Album(firebase);
    olinda2012.init('photos/olinda2012', 'olinda-bg.jpg', 'olinda-bg.jpg', 'O quarto do mofo', 'Primeira viagem da turma', 'Recife e Olinda/PE, 19 de Janeiro de 2012', 10, '');
    
    const zueiraFacebook = new Album(firebase);
    zueiraFacebook.init('photos/zueira', 'zueira-bg.jpg', 'zueira-bg.jpg', 'Caaaaaaaara, tu não tá ligado!', 'Eu tenho certeza que vocês estão escondendo mais de um milhão de fotos não compartilhadas. Essa é a minha vingança.', '#TheZueiraNeverEnds', 10, '');
    //Cheguei, chegastes
    //ip do halo
    //negueba ô
    //cara tu não tá ligado
    //integrated together is better
    //escala nanométrica
    //Um bom alguma coisa
    //Drosophila melanogaster
    //the zueira never ends
    //tijolo
    //eu to chutando
});
