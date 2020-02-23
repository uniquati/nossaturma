import Album from './Album';
import FirebaseConfig from './FirebaseConfig';

document.addEventListener("DOMContentLoaded", function(event) {

    //firebase code
    const firebase = new FirebaseConfig();

    //FIX TI vai dar erro se o album tiver menos de 10 fotos
    const placaController = new Album(firebase);//TODO o primeiro album está limitado a 10 fotos, mas deveria listar todas as 19
    placaController.init('photos/placa', 'placa-bg.png', 'placa-bg.png', 'Placa Virtual', 'Turma 2013.2', 19);

    const palacioCulturaController = new Album(firebase);
    palacioCulturaController.init('photos/palaciocultura', 'palaciocultura-bg.jpg', 'palaciocultura-fg.png', 'Nossa Turma é cultura', 'Palácio da Cultura, Natal/RN, 2015', 10);
    
    const Adila2019 = new Album(firebase);
    Adila2019.init('photos/adila2019', 'placa-bg.png', 'placa-bg.png', 'Ádila da Turma', 'Cachorro Quente, Natal/RN, 27 de Setembro de 2019', 10);

    const formaturaController = new Album(firebase);
    formaturaController.init('photos/formatura', 'formatura-bg.jpg', 'formatura-bg.jpg', 'Formatura', 'IFRN-ZN, 11 de Abril de 2014', 10);
    
    const casaAlison2014 = new Album(firebase);
    casaAlison2014.init('photos/casaalison2014', 'casaalison2014-bg.jpg', 'casaalison2014-bg.jpg', 'Encontro da Turma (só os Neguebas)', 'Casa de Alison, 18 de Outubro de 2014', 10);
    
    const Rodizio2013 = new Album(firebase);
    Rodizio2013.init('photos/rodizio2013', 'placa-bg.png', 'placa-bg.png', 'Rodízio de Pizza', 'Dom Gourmet, Natal/RN, 21 de Dezembro de 2013', 10);
    
    const MataEstrela2012 = new Album(firebase);
    MataEstrela2012.init('photos/mataestrela2012', 'placa-bg.png', 'placa-bg.png', 'Trilha na Mata Estrela e Lagoa da Coca-cola', 'Mata Estrela, Baía Formosa/RN, 31 de Janeiro de 2012', 10);
});
