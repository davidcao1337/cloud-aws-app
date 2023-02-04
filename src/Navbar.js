import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-neutral text-neutral-content">
      <div>
        <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;