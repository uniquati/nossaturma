import Album from './Album';

document.addEventListener("DOMContentLoaded", function(event) {
    const albumController = new Album();
    albumController.init();

    const array = [];
    array.push('https://source.unsplash.com/1600x900/?galaxy');
    array.push('https://source.unsplash.com/1600x900/?robot');
    array.push('https://source.unsplash.com/1600x900/?time');
    array.push('https://source.unsplash.com/1600x900/?colors');
    array.push('https://source.unsplash.com/1600x900/?man');
    array.push('https://source.unsplash.com/1600x900/?woman');
    array.push('https://source.unsplash.com/1600x900/?bird');
    array.push('https://source.unsplash.com/1600x900/?taxi');
    array.push('https://source.unsplash.com/1600x900/?ball');
    array.push('https://source.unsplash.com/1600x900/?dog');
    array.push('https://source.unsplash.com/1600x900/?cat');
    array.push('https://source.unsplash.com/1600x900/?elephant');
    array.push('https://source.unsplash.com/1600x900/?code');
    array.push('https://source.unsplash.com/1600x900/?doctor');
    array.push('https://source.unsplash.com/1600x900/?star');
    array.push('https://source.unsplash.com/1600x900/?car');
    array.push('https://source.unsplash.com/1600x900/?boy');
    array.push('https://source.unsplash.com/1600x900/?yellow');
    array.push('https://source.unsplash.com/1600x900/?goal');
    array.push('https://source.unsplash.com/1600x900/?computer');
    array.push('https://source.unsplash.com/1600x900/?network');
    array.push('https://source.unsplash.com/1600x900/?ipad');
    array.push('https://source.unsplash.com/1600x900/?fire');
    array.push('https://source.unsplash.com/1600x900/?king');
    array.push('https://source.unsplash.com/1600x900/?random');
    array.push('https://source.unsplash.com/1600x900/?word');
    array.push('https://source.unsplash.com/1600x900/?math');
    array.push('https://source.unsplash.com/1600x900/?universe');
    array.push('https://source.unsplash.com/1600x900/?banana');
    array.push('https://source.unsplash.com/1600x900/?monkey');
    array.push('https://source.unsplash.com/1600x900/?draw');
    array.push('https://source.unsplash.com/1600x900/?pencil');
    array.push('https://source.unsplash.com/1600x900/?dark');
    array.push('https://source.unsplash.com/1600x900/?light');
    array.push('https://source.unsplash.com/1600x900/?down');
    array.push('https://source.unsplash.com/1600x900/?floor');
    array.push('https://source.unsplash.com/1600x900/?me');
    array.push('https://source.unsplash.com/1600x900/?sky');
    array.push('https://source.unsplash.com/1600x900/?ocean');
    array.push('https://source.unsplash.com/1600x900/?heart');

    let i = 0;
    const interval = setInterval(() => {
        if(i<array.length)
            albumController.addPhoto(array[i++]);
        else 
            clearInterval(interval);
    }, 4000);
    
});
