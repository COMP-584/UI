import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {
    getAuth,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    connectAuthEmulator,
} from 'firebase/auth'

import firebaseApp from '../firebase'

const auth = getAuth(firebaseApp)

const ChatPage = () => {
    const [chats, setChats] = useState([])
    const [user, setUser] = useState()

    const fetchChats = async () => {
        const { data } = await axios.get('/api/chat')

        //console.log(data);
        setChats(data)
    }
    //  useEffect is hook in react which is used when the component is rendered for the first time.
    useEffect(() => {
        fetchChats()
    }, [])

    const monitorAuthState = async () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
                setUser(user)
            } else {
                console.log('ezzz')
            }
        })
    }

    monitorAuthState()

    return (
        <div>
            <h2>welcom {user.email}</h2>

            {chats.map((chat) => (
                <div key={chat._id}>{chat.chatName}</div>
            ))}
        </div>
    )
}

export default ChatPage
