import { useEffect, useState } from 'react'
// import axios from 'axios'

import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

import firebaseApp from '../firebase'
import { Button } from '@chakra-ui/react'
import { useHistory } from 'react-router'

const auth = getAuth(firebaseApp)

const ChatPage = () => {
    // const [chats, setChats] = useState([])
    const [user, setUser] = useState({ email: 'loading...' })
    const history = useHistory()

    // const fetchChats = async () => {
    //     const { data } = await axios.get('/api/chat')

    //console.log(data);
    // setChats(data)
    // }
    // useEffect is hook in react which is used when the component is rendered for the first time.
    // useEffect(() => {
    //     fetchChats()
    // }, [])

    const monitorAuthState = async (setUser) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
                setUser(user)
            } else {
                console.log('User fetch Error!!!!')
            }
        })
    }

    useEffect(() => {
        monitorAuthState(setUser)
    }, [])

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log('// Sign-out successful.')
                history.push('/')
                history.go()
            })
            .catch((error) => {
                console.log('// An error happened.')
            })
    }

    return (
        <div>
            <h2>welcom {user.email}</h2>
            <Button onClick={handleSignOut}>Signout</Button>

            {/*chats.map((chat) => (
                <div key={chat._id}>{chat.chatName}</div>
            ))*/}
        </div>
    )
}

export default ChatPage
