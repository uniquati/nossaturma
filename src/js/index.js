import Album from './Album';

document.addEventListener("DOMContentLoaded", function(event) {

    
    const albumController = new Album();
    albumController.init('palaciocultura/capa-bg.jpg', 'palaciocultura/capa-fg.png');

    const array = [];
    // array.push('https://source.unsplash.com/1600x900/?galaxy');
    // array.push('https://source.unsplash.com/900x900/?robot');
    // array.push('https://source.unsplash.com/900X1600/?time');
    // array.push('https://source.unsplash.com/500x800/?colors');
    // array.push('https://source.unsplash.com/1024x768/?man');
    // array.push('https://source.unsplash.com/400x400/?woman');
    // array.push('https://source.unsplash.com/1600x900/?bird');
    // array.push('https://source.unsplash.com/900x900/?taxi');
    // array.push('https://source.unsplash.com/1600x900/?ball');
    // array.push('https://source.unsplash.com/900X1600/?dog');
    // array.push('https://source.unsplash.com/500x800/?cat');
    // array.push('https://source.unsplash.com/900X1600/?elephant');
    // array.push('https://source.unsplash.com/1024x768/?code');
    // array.push('https://source.unsplash.com/900x900/?doctor');
    // array.push('https://source.unsplash.com/500x800/?star');
    // array.push('https://source.unsplash.com/400x400/?car');
    // array.push('https://source.unsplash.com/500x800/?boy');
    // array.push('https://source.unsplash.com/1600x900/?yellow');
    // array.push('https://source.unsplash.com/900x900/?goal');
    // array.push('https://source.unsplash.com/900X1600/?computer');
    // array.push('https://source.unsplash.com/1600x900/?network');
    // array.push('https://source.unsplash.com/1024x768/?ipad');
    // array.push('https://source.unsplash.com/1600x900/?fire');
    // array.push('https://source.unsplash.com/900x900/?king');
    // array.push('https://source.unsplash.com/500x800/?random');
    // array.push('https://source.unsplash.com/500x800/?word');
    // array.push('https://source.unsplash.com/400x400/?math');
    // array.push('https://source.unsplash.com/900X1600/?universe');
    // array.push('https://source.unsplash.com/1600x900/?banana');
    // array.push('https://source.unsplash.com/900x900/?monkey');
    // array.push('https://source.unsplash.com/900x900/?draw');
    // array.push('https://source.unsplash.com/500x800/?pencil');
    // array.push('https://source.unsplash.com/1024x768/?dark');
    // array.push('https://source.unsplash.com/500x800/?light');
    // array.push('https://source.unsplash.com/900X1600/?down');
    // array.push('https://source.unsplash.com/900x900/?floor');
    // array.push('https://source.unsplash.com/400x400/?me');
    // array.push('https://source.unsplash.com/1600x900/?sky');
    // array.push('https://source.unsplash.com/900x900/?ocean');
    // array.push('https://source.unsplash.com/400x400/?heart');

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
    array.push('palaciocultura/IMG-20150603-WA0002.jpg');

    // let i = 0;
    // const interval = setInterval(() => {
    //     if(i<array.length)
    //         albumController.loadImage(array[i++]);
    //     else 
    //         clearInterval(interval);
    // }, 4000);
    array.forEach(element => {
        albumController.loadImage(element);
    });


    const albumController2 = new Album();
    albumController2.init('https://source.unsplash.com/1600x900/?galaxy', 'https://source.unsplash.com/1600x900/?galaxy');

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

    // let i2 = 0;
    // const interval2 = setInterval(() => {
    //     if(i2<array.length)
    //         albumController2.loadImage(array2[i2++]);
    //     else 
    //         clearInterval(interval2);
    // }, 4000);
    array2.forEach(element => {
        albumController2.loadImage(element);
    });

    const albumController3 = new Album();
    albumController3.init('https://source.unsplash.com/1600x900/?man', 'https://source.unsplash.com/1600x900/?man');

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

    // let i3 = 0;
    // const interval3 = setInterval(() => {
    //     if(i3<array.length)
    //         albumController3.loadImage(array3[i3++]);
    //     else 
    //         clearInterval(interval3);
    // }, 4000);
    array3.forEach(element => {
        albumController3.loadImage(element);
    });

    const albumController4 = new Album();
    albumController4.init('https://source.unsplash.com/1600x900/?bird', 'https://source.unsplash.com/1600x900/?bird');

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

    // let i4 = 0;
    // const interval4 = setInterval(() => {
    //     if(i4<array.length)
    //         albumController4.loadImage(array4[i4++]);
    //     else 
    //         clearInterval(interval4);
    // }, 4000);
    array4.forEach(element => {
        albumController4.loadImage(element);
    });

    const albumController5 = new Album();
    albumController5.init('https://source.unsplash.com/1600x900/?dog', 'https://source.unsplash.com/1600x900/?dog');

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

    // let i5 = 0;
    // const interval5 = setInterval(() => {
    //     if(i5<array.length)
    //         albumController5.loadImage(array5[i5++]);
    //     else 
    //         clearInterval(interval5);
    // }, 4000);
    array5.forEach(element => {
        albumController5.loadImage(element);
    });
});
