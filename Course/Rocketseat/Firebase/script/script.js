firebase.initializeApp({
    apiKey: "AIzaSyD37R1-bOutOfioxUv2bnQ4ucrY1Zxlwp0",
    authDomain: "hight-school-b6f4e.firebaseapp.com",
    databaseURL: "https://hight-school-b6f4e-default-rtdb.firebaseio.com",
    projectId: "hight-school-b6f4e",
    storageBucket: "hight-school-b6f4e.appspot.com",
    messagingSenderId: "136088411",
    appId: "1:136088411:web:4bd03e5ee979f96342687e",
    measurementId: "G-Q3K1NPY4ZZ"
  });

const db = firebase.firestore()
db.collection("turmaA").get().then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log(doc)
    });
})
console.log(db)