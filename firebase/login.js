const firebaseConfig = {
    apiKey: "AIzaSyA0mEMERPghvJI0ecCEQZhlpSRMYPCqGvY",
    authDomain: "azerbaijan-energy-engine-94f70.firebaseapp.com",
    projectId: "azerbaijan-energy-engine-94f70",
    storageBucket: "azerbaijan-energy-engine-94f70.appspot.com",
    messagingSenderId: "939394426453",
    appId: "1:939394426453:web:8b4c7121ac7004384296dc"
};
firebase.initializeApp(firebaseConfig);

const formtSubmitBtnSignUp = document.querySelector('#form-firebase-signUp');
formtSubmitBtnSignUp.addEventListener('submit', async function (event) {
    event.preventDefault();
    const emailSignUp = document.getElementById("email-signUp").value;
    const passwordSignUp = document.getElementById("password-signUp").value;
    // await initializeFirebase();

    await firebase.auth().createUserWithEmailAndPassword(emailSignUp, passwordSignUp)
        .then((userCredential) => {
            // Yeni kullanıcı oluşturulduğunda yapılacak işlemler
            var user = userCredential.user;
            console.log("Yeni kullanıcı oluşturuldu:", user);
        })
        .catch((error) => {
            // Hata durumunda yapılacak işlemler
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error("Hata:", errorCode, errorMessage);
        })
});