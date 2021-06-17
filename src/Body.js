import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WrappedRouter from "./routes/WrappedRouter";

const Body = () => {
    return (
        <Router>
            <Navbar />
            <div className="py-16 h-screen">
                <WrappedRouter />
            </div>
            <Footer />
        </Router>
    );
};

export default Body;
