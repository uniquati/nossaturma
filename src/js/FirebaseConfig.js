import * as firebase from 'firebase/app';
import 'firebase/storage';

export default class FirebaseConfig {

    constructor(){
        // Your web app's Firebase configuration
        this.firebaseConfig = {
            apiKey: "AIzaSyAOwvLWqI8X6Sv2M0FsJ5nC1sOlYKAjcdk",
            authDomain: "teste-firebase-321.firebaseapp.com",
            databaseURL: "https://teste-firebase-321.firebaseio.com",
            projectId: "teste-firebase-321",
            storageBucket: "teste-firebase-321.appspot.com",
            messagingSenderId: "617140261644",
            appId: "1:617140261644:web:be08644f2344c243e12f29"
        };

         // Initialize Firebase
         firebase.initializeApp(this.firebaseConfig);
    }

     listAll(ref) {


        // Get a reference to the storage service, which is used to create references in your storage bucket
        const storage = firebase.storage();
            
        // Create a storage reference from our storage service
        var storageRef = storage.ref(ref);

        const array = [];

        return storageRef.listAll();
    }
}
