import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: 'AIzaSyAT376A8LJ6f1tr7J6PMz-WyyJy4KhPOAw',
    authDomain: 'chat-app-efccb.firebaseapp.com',
    databaseURL: 'https://chat-app-efccb-default-rtdb.firebaseio.com',
    projectId: 'chat-app-efccb',
    storageBucket: 'chat-app-efccb.appspot.com',
    messagingSenderId: '146543048024',
    appId: '1:146543048024:web:3e8015069d06737cc3212d',
    measurementId: 'G-FW4SFLNRNP',
}

const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp
