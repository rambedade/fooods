import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Header = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="header">
      <Link to="/"><h1>Home</h1></Link>
      {user ? (
        <>
          <Link to="/profile">Profile</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </>
      )}
    </nav>
  );
};
export default Header;
