import Album from './Album';

document.addEventListener("DOMContentLoaded", function(event) {
    const albumController = new Album();
    albumController.init();

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

    array.push('../assets/photos/_MG_7912.JPG');
    array.push('../assets/photos/_MG_7921.JPG');
    array.push('../assets/photos/_MG_7925essa.JPG');
    array.push('../assets/photos/_MG_7926essa.JPG');
    array.push('../assets/photos/_MG_7930essa.JPG');
    array.push('../assets/photos/_MG_7934.JPG');
    array.push('../assets/photos/_MG_7937essa.JPG');
    array.push('../assets/photos/_MG_7942essa.JPG');
    array.push('../assets/photos/_MG_7946.JPG');
    array.push('../assets/photos/_MG_7948essa.JPG');
    array.push('../assets/photos/_MG_7952essa.JPG');
    array.push('../assets/photos/_MG_7955.JPG');
    array.push('../assets/photos/_MG_7959.JPG');
    array.push('../assets/photos/_MG_7966essa.JPG');
    array.push('../assets/photos/_MG_7967.JPG');
    array.push('../assets/photos/_MG_7969essa.JPG');
    array.push('../assets/photos/_MG_7974.JPG');
    array.push('../assets/photos/IMG-20150603-WA0002.jpg');

    let i = 0;
    const interval = setInterval(() => {
        if(i<array.length)
            albumController.loadImage(array[i++]);
        else 
            clearInterval(interval);
    }, 4000);
    
});
