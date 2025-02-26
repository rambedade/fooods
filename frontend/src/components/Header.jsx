import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg relative">
      <Link to="/" className="text-2xl font-bold hover:text-gray-400">RecipeApp</Link>
      
      <div className="hidden md:flex items-center h-22 space-x-6">
        {user ? (
          <>
            <Link to="/profile" className="hover:text-gray-400 text-lg">Profile</Link>
            <button 
              onClick={logout} 
              className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded-lg text-white font-semibold transition duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-gray-400  text-lg">Login</Link>
            <Link 
              to="/register" 
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-semibold transition duration-300"
            >
              Register
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center space-y-4 py-4 md:hidden">
          {user ? (
            <>
              <Link to="/profile" className="hover:text-gray-400 text-lg" onClick={() => setIsOpen(false)}>Profile</Link>
              <button 
                onClick={() => { logout(); setIsOpen(false); }} 
                className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded-lg text-white font-semibold transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-400 text-lg" onClick={() => setIsOpen(false)}>Login</Link>
              <Link 
                to="/register" 
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-semibold transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
