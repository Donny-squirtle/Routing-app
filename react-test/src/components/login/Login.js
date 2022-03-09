import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";


async function loginUser() {
    return fetch('./login.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data;
        })
}
function Login({isAuth, fromPage}) {
    const [username, setUsername] = useState(null);
    const [password, setPasswoed] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async evt => { 
        evt.preventDefault();
        const auth = await loginUser();
        if (auth.username != username || auth.password != password) {
            alert("Incorrect username or password!")
        } else {
            sessionStorage.setItem("authStorage", true);
            isAuth(true);
            
            if (fromPage === '/') {
                navigate("/profile", { replace: true })
            } else {
                navigate(`${fromPage}`, { replace: true })
            }
            
        }
        
    }

    return (

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter user name" onChange={(evt)=> setUsername(evt.target.value)}/>
          <input type="password" placeholder="Enter password" onChange={(evt)=> setPasswoed(evt.target.value)}/>
          <input type="checkbox" />
          <button>Submit</button>
        </form>

    );
}

export { Login };
