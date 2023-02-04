import {useRef, useState } from "react";
import cloudLogo from './assets/cloud-flat.png'
import winton from './assets/winton.jpg'

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const fNameRef = useRef("");
  const lNameRef = useRef("");
  const emailRef = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:8000/users');
    const users = await response.json();

    for(let i = 0; i < users.length; i++){
      if(username === users[i].username && password === users[i].password){
        console.log("Success!");
        fNameRef.current = users[i].fName;
        lNameRef.current = users[i].lName;
        emailRef.current = users[i].email;
        setSuccess(true);
      }
      else{
        console.log("Failed")
      }
    }
  }

  return (
    <>
      {success ? (
          <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <img src={winton} alt="" width="230" height="69" />
            <h2 className="mb-5 font-bold text-3xl text-[#525252]">Logged In!</h2>
            <ul>
              <li ref={fNameRef}>First Name: {fNameRef.current}</li>
              <li ref={lNameRef}>Last Name: {lNameRef.current}</li>
              <li ref={emailRef}>Email: {emailRef.current}</li>
            </ul>
          </div>
      ) : (
            <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
              <img className="mt-24 mb-10" src={cloudLogo} alt="" width="230" height="69" />
              <h2 className="mb-5 font-bold text-3xl text-[#525252]">Login Here</h2>
              <form onSubmit={handleSubmit}>
                <label className="font-semibold">Username</label>
                <input
                  className="mb-6 border-2 w-full rounded-[5px] px-2 py-2"
                  type="text" 
                  required 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label className="font-semibold">Password</label>
                <input
                  className="border-2 w-full rounded-[5px] px-2 py-2"
                  type="password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="mt-10 mb-24 w-full font-extrabold text-lg text-white bg-sky-400 rounded-[6px] px-16 py-3" type="submit">Login</button>
              </form>
            </div>
      )}
      </>
  );
}

export default Login;