import { useContext } from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaMedium } from "react-icons/fa";
import AuthContext from "../stores/authContext";

export const Navbar = () => {
  const { user, login } = useContext(AuthContext);

  return (
    <nav className="divide-y divide-opacity-30  divide-blue-300">
      {/* UP NAV */}
      <div className="flex bg-blue-500 p-5 items-center md:justify-center justify-around md:space-x-96 text-gray-50">
        {/* left */}
        <h1 className="text-3xl font-mono cursor-pointer">Blogger</h1>
        {/* right */}

        <div className="flex text-lg font-semibold items-center space-x-2">
          <p className="hidden md:inline"></p>
          <button className="border-2 border-gray-50 bg-gray-50 text-blue-700 rounded-md py-1 px-2 cursor-pointer">
            Sign out
          </button>
        </div>

        <div className="space-x-5">
          <button
            onClick={login}
            className="border-2 border-gray-50   rounded-md py-1 px-2 cursor-pointer bg-gray-50 text-blue-700"
          >
            Login / Signup
          </button>
        </div>
      </div>
      {/* BOTTOM NAV */}
      <div className="flex space-x-10 bg-blue-500 text-gray-50 items-center justify-center p-2 ">
        <FaFacebook size="20px" className="cursor-pointer" />
        <FaInstagram size="20px" className="cursor-pointer" />
        <FaMedium size="20px" className="cursor-pointer" />
        <FaTwitter size="20px" className="cursor-pointer" />
      </div>
    </nav>
  );
};
