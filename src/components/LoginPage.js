import React, { useContext } from 'react'

// actions
import { startLogin, startLogout } from '../actions/auth'

// context
import AppContext from '../context/AppContext'

const LoginPage = () => {
    const { userDispatch } = useContext(AppContext)

    return (
        <div maxWidth="sm">
            <pre>Chat App</pre>
            <button
                variant="contained"
                color="primary"
                onClick={() => startLogin(userDispatch)}
            >
                Login with Google
            </button>
            <hr />
            <button
                variant="contained"
                color="primary"
                onClick={() => startLogout()}
            >
                logout
            </button>
        </div>
    )
}

export default LoginPage
