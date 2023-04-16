import { initializeApp } from "firebase/app";
import { deleteObject, getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";
import './../styles/styles.css';
import {updateDoc, addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, setDoc, query, where} from "firebase/firestore";
import { getDatabase, onValue, ref as refdb, set } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHi24P1mhch53g6QSCGMBnexF3GPztvzQ",
    authDomain: "sda-firebase-876b0.firebaseapp.com",
    databaseURL: "https://sda-firebase-876b0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sda-firebase-876b0",
    storageBucket: "sda-firebase-876b0.appspot.com",
    messagingSenderId: "363216257570",
    appId: "1:363216257570:web:b001f5e8db136c9126807b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const rdb = getDatabase(app);

// ZADANIE PIERWSZE - PRZESYLANIE PLIKU NA CHMURE I WYSWIETLANIE GO W OKNIE PRZEGLADARKI
// const btn = document.getElementById("mySend");
// const input = document.getElementById("myFile");
// const header = document.getElementById("status");
// const fileNameInput = document.getElementById("fileName");

// btn.addEventListener("click", () => {
//     const file = input.files[0];
//     const imageRef = ref(storage, fileNameInput.value);

//     header.innerText = "PRZESYŁAM!";
//     uploadBytes(imageRef, file).then(() => {

//         getDownloadURL(imageRef).then(url => {
//             const img = document.createElement("img");
//             img.src = url;
//             document.body.appendChild(img);
//         })
//         header.innerText = "PRZESŁANO";
//     })
// })








// ZADANIE DRUGIE - WYSWIETL IMG W OKNIE PRZEGLADARKI PO WPISANIU JEGO NAZWY W INPUCIE (BIERZE IMG Z CLOUDA I WYSWIETLA W OKNIE)
// const searchBtn = document.getElementById("searchBtn");
// const fileNameInput = document.getElementById("fileName");
// const img = document.getElementById("imageView");
// const headerMessage = document.getElementById("message");

// searchBtn.addEventListener("click", () => {
//         const imageRef = ref(storage, fileNameInput.value);

//             getDownloadURL(imageRef).then((url) => {
//                 img.src = url;
//                 img.style.width = "400px";
//                 headerMessage.innerText = "";
//                 fileNameInput.value = "";
//             }).catch(() => {  // GDY ERROR MA BYC SPRAWDZONY TO CATCH
//                 headerMessage.innerText = "NIE MA TAKIEGO PLIKU"
//                 img.src = "";
//             })
//     })








// ZADANIE TRZECIE - STWÓRZ BUTTON PO KLIKNIECIU KTOREGO W CONSOLI POJAWI SIE NAZWA ELEMENTU
// const list = document.getElementById("orderList");
// const storageRef = ref(storage);

// listAll(storageRef).then(res => {
//     res.items.forEach(item => {
//         const listItem = document.createElement("li");
        
//         const btnName = document.createElement("button");
//         btnName.innerText = "Click and check console";

//         btnName.addEventListener('click', () => {
//             console.log(item.fullPath)
//         })

//         listItem.innerText = item.fullPath;
//         list.appendChild(listItem);
//         listItem.appendChild(btnName)
//     })
// })








// ZADANIE CZWARTE - GETDOWNLOAG URL I PRZYPISAC DO ELEMENTU IMG - PO KLIKNIECIU W 'SHOW' POKAZUJE SIE OBRAZEK ZE STORAGE A W CONSOLI WYSWIETLA SIE NAZWA 
// const list = document.getElementById("orderList");
// const storageRef = ref(storage);
// const image = document.getElementById("showImage");

// listAll(storageRef).then(res => {
//     res.items.forEach(item => {
//         const listItem = document.createElement("li");
//         const btnName = document.createElement("button");
//         btnName.innerText = "SHOW";
//         listItem.innerText = item.fullPath;

//         btnName.addEventListener('click', () => {
//             console.log(item.fullPath);

//             getDownloadURL(item).then((url) => {
//                 image.src = url;
//                 image.style.width = "400px";
//             })
//         })

//         list.appendChild(listItem);
//         listItem.appendChild(btnName)
//     })
// })







// ZADANIE PIĄTE WYSWIETL WSZYSTKIE OBRAZKI WRAZ Z NAZWĄ (GALERIA)
// chcemy korzystac z calego storage
// const storageRef = ref(storage);

// listAll(storageRef).then(res => {
//     // są prefixy i itemsy nas interesuja itemy - pliki
//     res.items.forEach(item => {

//         getDownloadURL(item).then((url) => {

//             const card = document.createElement("div");
//             card.classList.add("card");

//             const img = document.createElement("img");
//             card.appendChild(img);

//             const text = document.createElement("h2");
//             text.classList.add("text");
//             card.appendChild(text);

//             card.style.width = "350px";
//             card.style.border = "2px solid black";
//             card.style.margin = "20px";
//             card.style.textAlign = "center";
//             document.body.style.display = "flex";

//             img.src = url;
//             text.innerText = item.fullPath;

//             document.body.appendChild(card);
//         })
//     })
// })






// ZADANIE SZÓSTE - WYSWIETLENIE NAZW FOLDEROW W OPCJACH (res - result)
// const storageRef = ref(storage);
// const select = document.getElementById("select");

// listAll(storageRef).then(res =>{
//     res.prefixes.forEach(prefix => {

//         const option = document.createElement('option');
//         option.innerText = prefix.fullPath;
//         select.appendChild(option)
//     })
// })







// ZADANIE SIÓDME/ ÓSME - Utwórz aplikację, która pozwala na dodawanie zdjęć do predefiniowanych albumów. Albumy utwórz w postaci folderów z pomocą konsoli Firebase

// const albums = document.getElementById("select");
// const sendBtn = document.getElementById("send");
// const fileInput = document.getElementById("file");

// sendBtn.addEventListener("click", () => {
//     // czy uzytkownik wybral album?
//     if(albums.value){
//         //dostajemy si edo pliku wybranego
//         const file = fileInput.files[0];
//         // gdzie przeslac? towrzymy referencje wskazujac konkretny adres pliku
//         const imageRef = ref(storage, `${albums.value}/${file.name}`);
//         uploadBytes(imageRef, file).then(() => {
//             // gdy sie wysle co zrób to co poniżej bo jest then
//             fileInput.value = "";
//             console.log("WYSŁANO!")
//         })
//     }
// })

// const storageRef = ref(storage);
// listAll(storageRef).then(res =>{
//     res.prefixes.forEach(prefix => {
//         const option = document.createElement('option');
//         option.innerText = prefix.fullPath;
//         albums.appendChild(option)
//     })
// })







// ZADANIE DZIEWIATE - utwórz aplikację, która pozwala na utworzenie zgłoszenia awarii. Każde zgłoszenie ma możliwość podpięcia pliku przedstawiającego awarie. Po utworzeniu zgłoszenia wyświetlany jest widok ze szczegółami zgłoszenia. Wszystkie informacje dotyczące zgłoszenia przechowuj w pamięci programu, zdjęcie oczywiście na Storage.

// const albums = document.getElementById("select");
// const sendBtn = document.getElementById("send");
// const fileInput = document.getElementById("file");
// const container = document.getElementById("container");

// sendBtn.addEventListener("click", () => {
//     // czy uzytkownik wybral album?
//     if(albums.value){
//         //dostajemy si edo pliku wybranego
//         const file = fileInput.files[0];
//         // gdzie przeslac? towrzymy referencje wskazujac konkretny adres pliku
//         const imageRef = ref(storage, `${albums.value}/${file.name}`);
//         uploadBytes(imageRef, file).then(() => {
//             // gdy sie wysle co zrób to co poniżej bo jest then
//             fileInput.value = "";
//             console.log("WYSŁANO!");
//         })
//     }
// })

// const storageRef = ref(storage);
// listAll(storageRef).then(res =>{
//     res.prefixes.forEach(prefix => {
//         const option = document.createElement('option');
//         option.innerText = prefix.fullPath;
//         albums.appendChild(option)
//     })
// })

// albums.addEventListener("change", () => {
//     if(albums.value){

//         // tworzenie referencji na folder - albums value
//         const folderRef = ref(storage, albums.value);

//         // listAll tej referencji
//         listAll(folderRef).then(res =>{

//         // iteracja po items
//             container.innerHTML = "";
//             res.items.forEach(item => {

//                 // getDownloadURL per item
//                 getDownloadURL(item).then((url) => {

//                     // utworzenie img/ ustaw src / appendChild
//                     const img = document.createElement("img");
//                     img.src = url;
//                     img.style.width = "200px";
//                     container.appendChild(img);
//                 })
//             })
//         })  
//     }
// })


// ZADANIE 10 - (7). Utwórz aplikację, która będzie wyświetlała bibliotekę dokumentów. Dokumenty są podzielone na kategorie. W momencie wybrania danej kategorii wyświetlane są dokumenty tylko z podanej kategorii. + METODA DELETE NA BUTTON

// const albums = document.getElementById("albums");
// const images = document.getElementById('images');

// const storageRef = ref(storage);
// listAll(storageRef).then(res => {
//     res.prefixes.forEach(prefix => {
//         const listItem = document.createElement('li');
//         listItem.innerText = prefix.name;

//         listItem.addEventListener('click', () =>{
//             listAll(prefix).then(imgRes =>{
//                 images.innerHTML = "";
//                 imgRes.items.forEach(item => {
//                     const imageItem = document.createElement('li');
//                     imageItem.innerText = item.name;
//                     images.appendChild(imageItem);

//                     const deleteBtn = document.createElement('button');
//                     deleteBtn.innerText = "X";
//                     imageItem.appendChild(deleteBtn);

//                     deleteBtn.addEventListener('click', () => {

//                         deleteObject(item).then(() => {
//                             console.log("USUNIĘTO!");
//                             images.removeChild(imageItem);
//                         })
//                     })
//                 })
//             })
//         })
//         albums.appendChild(listItem);
//     })
// })



// ZADANIE 11 -15/04/2023
// const addUserBtn = document.getElementById("addUser");
// const userNameInput = document.getElementById("userName");
// const userSurnameInput = document.getElementById("userSurname");
// const collectionSelect = document.getElementById("select");

// addUserBtn.addEventListener("click", () => {
//     const userName = userNameInput.value;
//     const userSurname = userSurnameInput.value;
//     const collectionName = collectionSelect.value;

//     const jkDoc = doc(db, `${collectionName}`, `Id${userName}${userSurname}`);
//     setDoc(jkDoc, {
//         name: userName,
//         surname: userSurname
//     }).then(()=>{
//         userNameInput.value = "";
//         userSurnameInput.value ="";
//     });
// })



// ZADANIE 12 - 15/04/2023
// const docIdInput = document.getElementById("docId");
// const searchBtn = document.getElementById("searchBtn");
// const dataHeader = document.getElementById("data");

// searchBtn.addEventListener('click', () => {
//     const docId = docIdInput.value;
//     const myDoc = doc(db, "users", `${docId}`);
//     getDoc(myDoc).then(docData => {
//         if(docData.exists()){
//             const data = docData.data();
//             dataHeader.innerText = `name: ${data.name} 
//             surname: ${data.surname}`
//         }
//         else{
//             dataHeader.innerText = "Not found";
//         }
//     })
// })



// ZADANIE 13
// const usersOrderedList = document.getElementById('usersList');

// const usersColl = collection(db, "users");
// getDocs(usersColl).then((dataDocs) => {
//     dataDocs.docs.forEach(dataDoc => {
//         const data = dataDoc.data();
//         const li = document.createElement('li');
//         li.innerText = `name: ${data.name}
//         surname: ${data.surname}`;
//         usersOrderedList.appendChild(li);
//     })
// })


// ZADANIE 14
// const usersOrderedList = document.getElementById('usersList');
// const collectionNameSelect = document.getElementById("select");

// collectionNameSelect.addEventListener("change", () => {
//     const usersColl = collection(db, `${collectionNameSelect.value}`);
//     usersOrderedList.innerHTML = "";
//     getDocs(usersColl).then((dataDocs) => {
//         dataDocs.docs.forEach(dataDoc => {
//             const data = dataDoc.data();
//             const li = document.createElement('li');
//             li.innerText = `name: ${data.name}
//             surname: ${data.surname}`;
//             usersOrderedList.appendChild(li);
//         })
//     })
// })

// ZADANIE 15 - DELETE i EDIT
// const inputName = document.getElementById('name');
// const inputSurname = document.getElementById('surname');
// const addBtn = document.getElementById('addBtn');
// const usersList = document.getElementById("usersList");
// const usersCollection = collection(db, "users");
// let userEditRef;

// function displayUsers() {
//     getDocs(usersCollection).then(docsData => {
//         usersList.innerHTML = "";

//         docsData.docs.forEach((docData) => {
//             const userData = docData.data();
//             const deleteBtn = document.createElement("button");
//             const editBtn = document.createElement("button");
//             const li = document.createElement("li");

//             deleteBtn.addEventListener("click", () => {
//                 deleteDoc(docData.ref).then(() => {
//                     displayUsers();
//                 });
//             });
//             editBtn.addEventListener("click", () => {
//                 inputName.value = userData.name;
//                 inputSurname.value = userData.surname;
//                 userEditRef = docData.ref;
//             })
//             li.innerText = `${userData.name} ${userData.surname} `;
//             usersList.appendChild(li);
//             deleteBtn.innerText = "DELETE";
//             editBtn.innerText = "EDIT";
//             li.appendChild(deleteBtn);
//             li.appendChild(editBtn);
//         })
//     })
// }

// displayUsers();

// addBtn.addEventListener("click", () => {
//     if(userEditRef){
//         updateDoc(userEditRef, {
//             name: `${inputName.value}`,
//             surname: `${inputSurname.value}`
//         }).then(() => {
//             displayUsers();
//             inputName.value = "";
//             inputSurname.value = "";
//             userEditRef = undefined;
//         })
//     }
//     else{
//         addDoc(usersCollection, {
//             name: `${inputName.value}`,
//             surname: `${inputSurname.value}`
//         }).then(() => {
//             displayUsers();
//             inputName.value = "";
//             inputSurname.value = "";
//         })
//     }
// })

// ZADANIE 16 - search 
// const nameInput = document.getElementById("name");
// const searchBtn = document.getElementById("searchBtn");
// const usersList = document.getElementById("users");

// searchBtn.addEventListener('click', () => {
//     const usersColl = collection(db, "users");
//     const usersQuery = query(usersColl, where("name", "==", nameInput.value));
//     getDocs(usersQuery).then((docsData) => {
//         usersList.innerHTML = "";
//         docsData.docs.forEach((docData) => {
//             const user = docData.data();
//             const li = document.createElement('li');
//             li.innerText = docData.id;
//             usersList.appendChild(li);
//         })
//     })
// });


// REAL TIME DATABASE - BAZY DANYCH RZECZYWISTYCH 16042023
// DODAWANIE DO BAZY DANYCH
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const addBtn = document.getElementById("add");
const usersList = document.getElementById("users");



addBtn.addEventListener('click', () => {
    const name = nameInput.value;
    const surname = surnameInput.value;

    const userRef = refdb(rdb, `users/${name}${surname}`);
    set(userRef, {
        name: `${name}`,
        surname: `${surname}`
    }).then(() => {
        nameInput.value = "";
        surnameInput.value= "";
    });
})

const usersRef = refdb(rdb, "users");
onValue(usersRef, (snapshot) => {
    usersList.innerHTML = "";
    snapshot.forEach((userSnapshot) => {
        const user = userSnapshot.val();
        const li = document.createElement('li');
        li.innerText = `${user.name} ${user.surname}`;
        usersList.appendChild(li);
    })
})