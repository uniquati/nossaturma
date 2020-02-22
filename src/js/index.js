import Album from './Album';

document.addEventListener("DOMContentLoaded", function(event) {

    
    
    const arrayPlaca = [];
    arrayPlaca.push('placa/adila.jpg');
    arrayPlaca.push('placa/alison.jpg');
    arrayPlaca.push('placa/alyne.jpg');
    arrayPlaca.push('placa/andre.jpg');
    arrayPlaca.push('placa/emerson.jpg');
    arrayPlaca.push('placa/esau.jpg');
    arrayPlaca.push('placa/felipe.jpg');
    arrayPlaca.push('placa/fernando.jpg');
    arrayPlaca.push('placa/gilmar.jpg');
    arrayPlaca.push('placa/giovanni.jpg');
    arrayPlaca.push('placa/iana.jpg');
    arrayPlaca.push('placa/joaopedro.jpg');
    arrayPlaca.push('placa/juarez.jpg');
    arrayPlaca.push('placa/mara.jpg');
    arrayPlaca.push('placa/mateus.jpg');
    arrayPlaca.push('placa/rafael.jpg');
    arrayPlaca.push('placa/ruan.jpg');
    arrayPlaca.push('placa/sanderson.jpg');
    arrayPlaca.push('placa/wendel.jpg');

    const placaController = new Album();
    placaController.init('placa/capa-bg.png', 'placa/capa-bg.png', arrayPlaca);


    const array = [];
    array.push('palaciocultura/_MG_7912.jpg');
    array.push('palaciocultura/_MG_7921.jpg');
    array.push('palaciocultura/_MG_7925essa.jpg');
    array.push('palaciocultura/_MG_7926essa.jpg');
    array.push('palaciocultura/_MG_7930essa.jpg');
    array.push('palaciocultura/_MG_7934.jpg');
    array.push('palaciocultura/_MG_7937essa.jpg');
    array.push('palaciocultura/_MG_7942essa.jpg');
    array.push('palaciocultura/_MG_7946.jpg');
    array.push('palaciocultura/_MG_7948essa.jpg');
    array.push('palaciocultura/_MG_7952essa.jpg');
    array.push('palaciocultura/_MG_7955.jpg');
    array.push('palaciocultura/_MG_7959.jpg');
    array.push('palaciocultura/_MG_7966essa.jpg');
    array.push('palaciocultura/_MG_7967.jpg');
    array.push('palaciocultura/_MG_7969essa.jpg');
    array.push('palaciocultura/_MG_7974.jpg');
    
    const palacioCulturaController = new Album();
    palacioCulturaController.init('palaciocultura/capa-bg.jpg', 'palaciocultura/capa-fg.png', array);


    const formaturaArray = [];
    formaturaArray.push('formatura/DSC00278.jpg');
    formaturaArray.push('formatura/DSC00279.jpg');
    formaturaArray.push('formatura/DSC00280.jpg');
    formaturaArray.push('formatura/DSC00281.jpg');
    formaturaArray.push('formatura/DSC00282.jpg');
    formaturaArray.push('formatura/DSC00283.jpg');
    formaturaArray.push('formatura/DSC00285.jpg');
    formaturaArray.push('formatura/DSC00286.jpg');
    formaturaArray.push('formatura/DSC00289.jpg');
    formaturaArray.push('formatura/DSC00290.jpg');
    formaturaArray.push('formatura/DSC00291.jpg');
    formaturaArray.push('formatura/DSC00292.jpg');
    formaturaArray.push('formatura/DSC00293.jpg');
    formaturaArray.push('formatura/DSC00294.jpg');
    formaturaArray.push('formatura/DSC00295.jpg');
    formaturaArray.push('formatura/DSC00296.jpg');
    formaturaArray.push('formatura/DSC00299.jpg');
    formaturaArray.push('formatura/DSC00302.jpg');
    formaturaArray.push('formatura/DSC00307.jpg');
    formaturaArray.push('formatura/DSC00310.jpg');

    const formaturaController = new Album();
    formaturaController.init('formatura/DSC00283.jpg', 'formatura/DSC00283.jpg', formaturaArray);
    
    const casaAlison2014Array = [];
    casaAlison2014Array.push('casaalison2014/CAM00855.jpg');
    casaAlison2014Array.push('casaalison2014/CAM00856.jpg');
    casaAlison2014Array.push('casaalison2014/CAM00856-SMILE.jpg');
    casaAlison2014Array.push('casaalison2014/CAM00858.jpg');
    casaAlison2014Array.push('casaalison2014/CAM00859.jpg');
    casaAlison2014Array.push('casaalison2014/CAM00860.jpg');
    casaAlison2014Array.push('casaalison2014/CAM00862.jpg');
    casaAlison2014Array.push('casaalison2014/CAM00863.jpg');
    casaAlison2014Array.push('casaalison2014/CAM00864.jpg');
    casaAlison2014Array.push('casaalison2014/CAM00865.jpg');
    casaAlison2014Array.push('casaalison2014/CAM00867.jpg');
    
    const casaAlison2014Controller = new Album();
    casaAlison2014Controller.init('casaalison2014/CAM00859.jpg', 'casaalison2014/CAM00859.jpg', casaAlison2014Array);
    
    const array2 = [];
    array2.push('https://source.unsplash.com/1600x900/?galaxy');
    array2.push('https://source.unsplash.com/900x900/?robot');
    array2.push('https://source.unsplash.com/900X1600/?time');
    array2.push('https://source.unsplash.com/500x800/?colors');
    array2.push('https://source.unsplash.com/1024x768/?man');
    array2.push('https://source.unsplash.com/400x400/?woman');
    array2.push('https://source.unsplash.com/1600x900/?bird');
    array2.push('https://source.unsplash.com/900x900/?taxi');
    array2.push('https://source.unsplash.com/1600x900/?ball');
    array2.push('https://source.unsplash.com/900X1600/?dog');
    array2.push('https://source.unsplash.com/500x800/?cat');
    array2.push('https://source.unsplash.com/900X1600/?elephant');
    array2.push('https://source.unsplash.com/1024x768/?code');
    
    const albumController2 = new Album();
    albumController2.init('https://source.unsplash.com/1600x900/?galaxy', 'https://source.unsplash.com/1600x900/?galaxy', array2);


    
    const array3 = [];
    array3.push('https://source.unsplash.com/900X1600/?time');
    array3.push('https://source.unsplash.com/500x800/?colors');
    array3.push('https://source.unsplash.com/1034x768/?man');
    array3.push('https://source.unsplash.com/400x400/?woman');
    array3.push('https://source.unsplash.com/1600x900/?bird');
    array3.push('https://source.unsplash.com/900x900/?taxi');
    array3.push('https://source.unsplash.com/1600x900/?ball');
    array3.push('https://source.unsplash.com/900X1600/?dog');
    array3.push('https://source.unsplash.com/500x800/?cat');
    array3.push('https://source.unsplash.com/900X1600/?elephant');
    array3.push('https://source.unsplash.com/1034x768/?code');
    
    const albumController3 = new Album();
    albumController3.init('https://source.unsplash.com/1600x900/?man', 'https://source.unsplash.com/1600x900/?man', array3);

    
    const array4 = [];
    array4.push('https://source.unsplash.com/900X1600/?time');
    array4.push('https://source.unsplash.com/500x800/?colors');
    array4.push('https://source.unsplash.com/1044x768/?man');
    array4.push('https://source.unsplash.com/400x400/?woman');
    array4.push('https://source.unsplash.com/1600x900/?bird');
    array4.push('https://source.unsplash.com/900x900/?taxi');
    array4.push('https://source.unsplash.com/1600x900/?ball');
    array4.push('https://source.unsplash.com/900X1600/?dog');
    array4.push('https://source.unsplash.com/500x800/?cat');
    array4.push('https://source.unsplash.com/900X1600/?elephant');
    array4.push('https://source.unsplash.com/1044x768/?code');
    
    const albumController4 = new Album();
    albumController4.init('https://source.unsplash.com/1600x900/?bird', 'https://source.unsplash.com/1600x900/?bird', array4);


    
    const array5 = [];
    array5.push('https://source.unsplash.com/900X1600/?time');
    array5.push('https://source.unsplash.com/500x800/?colors');
    array5.push('https://source.unsplash.com/1055x768/?man');
    array5.push('https://source.unsplash.com/500x500/?woman');
    array5.push('https://source.unsplash.com/1600x900/?bird');
    array5.push('https://source.unsplash.com/900x900/?taxi');
    array5.push('https://source.unsplash.com/1600x900/?ball');
    array5.push('https://source.unsplash.com/900X1600/?dog');
    array5.push('https://source.unsplash.com/500x800/?cat');
    array5.push('https://source.unsplash.com/900X1600/?elephant');
    array5.push('https://source.unsplash.com/1055x768/?code');
    
    const albumController5 = new Album();
    albumController5.init('https://source.unsplash.com/1600x900/?dog', 'xxxhttps://source.unsplash.com/1600x900/?dog', array5);

});
