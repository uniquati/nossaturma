import Album from './Album';
import FirebaseConfig from './FirebaseConfig';

document.addEventListener("DOMContentLoaded", function(event) {

    //firebase code
    const firebase = new FirebaseConfig();

    //FIX TI vai dar erro se o album tiver menos de 10 fotos
    const placaController = new Album(firebase);//TODO o primeiro album está limitado a 10 fotos, mas deveria listar todas as 19
    placaController.init('photos/placa', 'placa-bg.png', 'placa-bg.png');

    const palacioCulturaController = new Album(firebase);
    palacioCulturaController.init('photos/palaciocultura', 'palaciocultura-bg.jpg', 'palaciocultura-fg.png');
    
    const Rodizio2013 = new Album(firebase);
    Rodizio2013.init('photos/rodizio2013', 'placa-bg.png', 'placa-bg.png');

    const formaturaController = new Album(firebase);
    formaturaController.init('photos/formatura', 'formatura-bg.jpg', 'formatura-bg.jpg');
    
    const casaAlison2014 = new Album(firebase);
    casaAlison2014.init('photos/casaalison2014', 'casaalison2014-bg.jpg', 'casaalison2014-bg.jpg');
    
});
