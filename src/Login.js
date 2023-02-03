import {useRef, useState } from "react";

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
          <section>
            <h1>Logged In</h1>
            <ul>
              <li ref={fNameRef}>First Name: {fNameRef.current}</li>
              <li ref={lNameRef}>Last Name: {lNameRef.current}</li>
              <li ref={emailRef}>Email: {emailRef.current}</li>
            </ul>
          </section>
      ) : (
            <div className="login">
              <h2>Login Here</h2>
              <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                  type="text" 
                  required 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label>Password</label>
                <input 
                  type="password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
              </form>
            </div>
      )}
      </>
  );
}

export default Login;