import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
    const { isUserAuthenticated, handleUserAuthentication } =
        useContext(UserContext);
    const currentPath = useLocation();

    const handleSignOut = () => {
        handleUserAuthentication("");
    };

    return (
        <nav
            className="flex justify-end items-center h-16 bg-white text-black fixed top-0 w-screen shadow-sm"
            role="navigation"
        >
            {isUserAuthenticated ? (
                <div className="md:block">
                    {currentPath.pathname !== "/profile" && (
                        <Link to="/profile" className="m-4">
                            Profile
                        </Link>
                    )}
                    {currentPath.pathname !== "/" && (
                        <Link to="/" className="m-4">
                            Home
                        </Link>
                    )}
                    <span
                        className="m-4 cursor-pointer"
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </span>
                </div>
            ) : (
                <div className="md:block">
                    {currentPath.pathname !== "/signin" && (
                        <Link to="/signin" className="m-4">
                            Sign In
                        </Link>
                    )}
                    {currentPath.pathname !== "/signup" && (
                        <Link to="/signup" className="m-4">
                            Sign Up
                        </Link>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
