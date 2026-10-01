import { useState } from 'react'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return isLoggedIn
        ? <Home onLogout={() => setIsLoggedIn(false)} />
        : <Login onLogin={() => setIsLoggedIn(true)} />
}

export default App