import React, { useState } from "react";
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
function Login({isAuth}) {
    const [username, setUsername] = useState(null);
    const [password, setPasswoed] = useState(null);

    const handleSubmit = async evt => { 
        evt.preventDefault();
        const auth = await loginUser();
        if (auth.username != username || auth.password != password) {
            alert("Incorrect data!")
        } else {
            isAuth(true);
            console.log("isAuth");
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