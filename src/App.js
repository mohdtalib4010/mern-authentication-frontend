import React, {useState} from 'react';
import Header from './components/Header';
import Register from './components/Register';
import Signin from './components/Signin';
import Profile from './components/Profile';


function App() {

  const adminUser = {
    email: "noobcoder24@gmail.com",
    password: "noob123"
  }
  
  const [user, setUser] = useState({ name: "", email:"" });
  const [error, setError] = useState("");


  const Login = (details)=>{
      console.log(details);

      if (details.email === adminUser.email && details.password === adminUser.password){
        console.log("Logged In!");
        setUser({
          name: details.name,
          email: details.email,
          password: details.password
        });
      }else{
        setError("Details are not match!")
      } 
  }

  const Logout = ()=>{
      setUser({name:"", email:""});
  }

  return (
    <div className="app">
         {(user.email !== "") ? (
          <div className="welcome">
            <Header/> 
            <button onClick={Logout}>Logout</button>
            <Profile name= {user.name} />    
          </div>
        ) : (
          <Signin Login={Login}
                  error={error}
          />
        )} 
      
    </div>
   
  );
}

export default App
