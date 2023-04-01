import './../styles/styles.css'
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHi24P1mhch53g6QSCGMBnexF3GPztvzQ",
  authDomain: "sda-firebase-876b0.firebaseapp.com",
  projectId: "sda-firebase-876b0",
  storageBucket: "sda-firebase-876b0.appspot.com",
  messagingSenderId: "363216257570",
  appId: "1:363216257570:web:b001f5e8db136c9126807b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const btn = document.getElementById("mySend");
const input = document.getElementById("myFile");
const header = document.getElementById("status");
const fileNameInput = document.getElementById("fileName");

btn.addEventListener("click", () => {
    const file = input.files[0];
    const imageRef = ref(storage, fileNameInput.value);

    header.innerText = "PRZESYŁAM!";
    uploadBytes(imageRef, file).then(() => {

        getDownloadURL(imageRef).then(url => {
            const img = document.createElement("img");
            img.src = url;
            document.body.appendChild(img);
        })

        header.innerText = "PRZESŁANO";
    })
})