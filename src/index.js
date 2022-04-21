import React, { useReducer, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import { firebase } from './firebase/firebase'

// actions
import { logout, login } from './actions/auth'

// components
import LoginPage from './components/LoginPage'
// import ActivityIndicator from './components/ActivityIndicator'

// context
import AppContext from './context/AppContext'

// reducer
import authReducer from './reducers/authReducer'

// styles
import './index.css'

// for use of login/logout first rendering at `onAuthChange` code
let userDispatchOuter = undefined

const App = () => {
    const [isLoadingData, setLoadingData] = useState(true)

    const [user, userDispatch] = useReducer(authReducer, {})

    userDispatchOuter = userDispatch

    return (
        <div>
            <AppContext.Provider
                value={{
                    user,
                    userDispatch,
                    isLoadingData,
                }}
            >
                <h1>Hello Worlds!</h1>
                <p>{user.uid}</p>
                <LoginPage />
            </AppContext.Provider>
        </div>
    )
}

let hasRendered = false
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(<App />, document.getElementById('root'))
        hasRendered = true
    } else {
        ReactDOM.render(<LoginPage />, document.getElementById('root'))
    }
}

ReactDOM.render(<h1>Loading...</h1>, document.getElementById('root'))

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        renderApp()
        userDispatchOuter(login(user.uid))
    } else {
        renderApp()
        userDispatchOuter(logout())
    }
})
