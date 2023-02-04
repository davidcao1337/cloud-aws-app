import { useState } from "react";
import cloudLogo from './assets/cloud-flat.png'
import winton from './assets/winton.jpg'

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

    fetch('http://http://ec2-3-22-41-174.us-east-2.compute.amazonaws.com:8000/users/', {
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
          <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <img src={winton} alt="" width="230" height="69" />
            <h1 className="mb-5 font-bold text-3xl text-[#525252]">Registered!</h1>
            <ul>
              <li> First Name: {fname} </li>
              <li> Last Name: {lname} </li>
              <li> Email: {email} </li>
            </ul>
          </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <img className="mt-24 mb-10" src={cloudLogo} alt="" width="230" height="69" />
          <h2 className="mb-5 font-bold text-3xl text-[#525252]">Register Here</h2>
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
              className="mb-6 border-2 w-full rounded-[5px] px-2 py-2" 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="font-semibold">First Name</label>
            <input 
              className="mb-6 border-2 w-full rounded-[5px] px-2 py-2" 
              type="text" 
              required 
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <label className="font-semibold">Last Name</label>
            <input 
              className="mb-6 border-2 w-full rounded-[5px] px-2 py-2" 
              type="text" 
              required 
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
            <label className="font-semibold">Email</label>
            <input 
              className="mb-6 border-2 w-full rounded-[5px] px-2 py-2" 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="mt-10 mb-24 w-full font-extrabold text-lg text-white bg-sky-400 rounded-[6px] px-16 py-3" type="submit">Register</button>
          </form>
        </div>
      )}
      </>
  );
}
 
export default Register;
