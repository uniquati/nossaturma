const Blob = require("cross-blob");

new Blob([]);
//=> Blob {size: 0, type: ""}

// Global patch (to support external modules like is-blob).
globalThis.Blob = Blob;
global.Blob = Blob;

global.XMLHttpRequest = require("xhr2");
const firebase = require('firebase/app');
const storage = require('firebase/storage');
const fs = require('fs');
const fsPromises = fs.promises;
const streamToBlob = require('stream-to-blob');

async function createBlob(stream) {
    return await streamToBlob(stream);
}

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOwvLWqI8X6Sv2M0FsJ5nC1sOlYKAjcdk",
    authDomain: "teste-firebase-321.firebaseapp.com",
    databaseURL: "https://teste-firebase-321.firebaseio.com",
    projectId: "teste-firebase-321",
    storageBucket: "teste-firebase-321.appspot.com",
    messagingSenderId: "617140261644",
    appId: "1:617140261644:web:be08644f2344c243e12f29"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storageService = firebase.storage();

// Create a storage reference from our storage service
var storageRef = firebase.storage().ref('photos');
var mountainRef = storageRef.child('mountains.jpg');

fs.readFile('database/placa/adila.jpg', 'utf8', function(err, contents) {
    var blob = new Blob([contents], {type: "image/jpeg"});
    console.log(blob);
    mountainRef.put(blob).then(function(snapshot) {
      console.log('Uploaded a blob or file!');
    });
});

// const stream = fs.createReadStream('database/placa/adila.jpg'); // use the Blob or File API
// createBlob(stream).then(blob => {
//     console.log(blob);
//     var file = blob;
//     mountainRef.put(file).then(function(snapshot) {
//       console.log('Uploaded a blob or file!');
//     });
// });

// console.log(fs.readFileSync('database/placa/adila.jpg', 'utf8'));

// fs.open('gallery.html', 'r', (err, fd) => {
//     if (err) throw err;
//     console.log(fd);
//     fs.close(fd, (err) => {
//       if (err) throw err;
//     });
// });