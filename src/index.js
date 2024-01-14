import { initializeApp } from 'firebase/app';
import { collection, getDocs, addDoc, getFirestore, doc, deleteDoc } from 'firebase/firestore';

import { getAuth } from 'firebase/auth';


const firebaseDataUI = document.querySelector('.firebase-data');
const addDataBtn = document.querySelector('.add-data');


import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA0mEMERPghvJI0ecCEQZhlpSRMYPCqGvY",
    authDomain: "azerbaijan-energy-engine-94f70.firebaseapp.com",
    projectId: "azerbaijan-energy-engine-94f70",
    storageBucket: "azerbaijan-energy-engine-94f70.appspot.com",
    messagingSenderId: "939394426453",
    appId: "1:939394426453:web:8b4c7121ac7004384296dc"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const colRef = collection(db, 'partners');

getDocs(colRef).then((querySnapshot) => {
    querySnapshot.docs.forEach((doc) => {
        console.log(doc.id);
        // console.log(doc.data());
        firebaseDataUI.innerHTML += `<div id=${doc.id}><span>${doc.data().name}</span> - <img src=${doc.data().img} alt=${doc.data().name} style="width:100px; heigth:100px;"/> - <button class="remove">Delete</button></div>`
        // console.log(doc.id, " => ", doc.data());
    });
}).catch((error) => {
    console.error("Yenede Error!: ", error);
});



///POST ISHLEMI
const newCityData = {
    name: 'New City',
    img: 'https://images.unsplash.com/photo-1695653421421-28f3816b424a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
};

addDataBtn.addEventListener("click", async () => {
    await addDoc(colRef, newCityData);
    console.log("added successfully!");
})

//DELETE ISHLEMI
// Belge referansını oluşturun
document.addEventListener("click", async function (event) {
    if (event.target.classList.contains("remove")) {
        const deleteBtn = event.target;
        const fileElement = deleteBtn.parentElement;
        fileElement.remove();
        const userDocRef = doc(db, 'partners', fileElement.getAttribute("id"));
        await deleteDoc(userDocRef);
        console.log(fileElement.getAttribute("id"));
    }
});

// ...............................

// Sign Up
const formtSubmitBtnSignUp = document.querySelector('#form-firebase-signUp');
formtSubmitBtnSignUp.addEventListener('submit', function (event) {
    event.preventDefault();

    const usernameSignUp = document.getElementById("username-signUp").value;
    const passwordSignUp = document.getElementById("password-signUp").value;

    firebase.initializeApp(firebaseConfig);
    firebase.auth().createUserWithEmailAndPassword(usernameSignUp, passwordSignUp)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User signed up:", user);
        })
        .catch((error) => {
            console.error("Error signing up:", error.message);
        });
})


// Sign In
const formtSubmitBtnSignIn = document.querySelector('#form-firebase-signIn');
formtSubmitBtnSignIn.addEventListener('submit', function (event) {
    event.preventDefault();

    const usernameSignIn = document.getElementById("username-signIn").value;
    const passwordSignIn = document.getElementById("password-signIn").value;

    firebase.initializeApp(firebaseConfig);

    firebase.auth().signInWithEmailAndPassword(usernameSignIn, passwordSignIn)
        .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            console.error(error.message);
        });
})


// Sign Out
const signOut = document.querySelector('#signOut');
signOut.addEventListener('click', function () {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().signOut().then((res) => {
        console.log('Sign-out successful.');
    }).catch((error) => {
        console.error(error.message);
    });

})
