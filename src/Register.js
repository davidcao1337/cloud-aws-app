import { useState } from "react";

const Register = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = { username, password, fname, lname, email };

    fetch('http://localhost:8000/users/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(users)
    }).then(() => {
      console.log('New user registered');
      setSuccess(true);
    })
  }

  return (
    <>
      {success ? (
          <section>
            <h1>Registered</h1>
            <ul>
              <li> First Name: {fname} </li>
              <li> Last Name: {lname} </li>
              <li> Email: {email} </li>
            </ul>
          </section>
      ) : (
        <div className="register">
          <h2>Register Here</h2>
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
            <label>First Name</label>
            <input 
              type="text" 
              required 
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <label>Last Name</label>
            <input 
              type="text" 
              required 
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
            <label>Email</label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Register</button>
          </form>
        </div>
      )}
      </>
  );
}
 
export default Register;