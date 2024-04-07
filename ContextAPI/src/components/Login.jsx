import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => { 
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder='usename' value={username} onChange={(e) => setUsername(e.target.value)} name="" id="" />
            {" "}
            <input type="text" placeholder='password' alue={password} onChange={(e) => setPassword(e.target.value)} name="" id="" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
