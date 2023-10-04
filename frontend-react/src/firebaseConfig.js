import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyAwSXblLV1ShyR4thEq8LB2rkQ6-9n4RwQ",
    authDomain: "fullstack-social-media-8fb22.firebaseapp.com",
    projectId: "fullstack-social-media-8fb22",
    storageBucket: "fullstack-social-media-8fb22.appspot.com",
    messagingSenderId: "412190681692",
    appId: "1:412190681692:web:9bf0f97769198bfac55499"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage, ref, uploadBytesResumable, getDownloadURL }