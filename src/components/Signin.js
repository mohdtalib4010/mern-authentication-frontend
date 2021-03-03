import React, { useState } from 'react'

function Signin({Login,error}) {
    const [details, setDetails] = useState({name: "", email: "" , password: ""});

    const handleClick = (e)=>{
        console.log(details);
        Login(details);
    } 

    return (
        <div>
           <div className="login_container">
               {error} 
               <h2>SignIn</h2>
               <input type="text" placeholder="What is your name?"
                   value={details.name}
                   onChange={(e)=>{setDetails({...details, name: e.target.value})}}
               />
               <input type="text" placeholder="What is your email?"
                   value={details.email}
                   onChange={(e)=>{setDetails({...details, email: e.target.value})}}
               />
               <input type="password" placeholder="What is your password?"
                   value={details.passport}
                   onChange={(e)=>{setDetails({...details, password: e.target.value})}}
               />
               <button onClick={handleClick}>Signin</button>
           </div>
        </div>
    )
}

export default Signin
