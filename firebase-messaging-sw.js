importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyB9xyIoOgRABCNp9psvCG9PWmFFSowFlWM",
    authDomain: "isuzubib-fc400.firebaseapp.com",
    databaseURL: "https://isuzubib-fc400-default-rtdb.firebaseio.com",
    projectId: "isuzubib-fc400",
    storageBucket: "isuzubib-fc400.appspot.com",
    messagingSenderId: "70786661189",
    appId: "1:70786661189:web:3fe57601c14d790a5f1c2c",
    measurementId: "G-ZWK6P52ES5",
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});