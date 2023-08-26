import React from "react";
import ReactDom from "react-dom"; // Corrected import statement
import Header from "./Header"; 
import Body from "./body";
import Footer from "./footer";
import "./index.css";  


function App() {
    return (
        <div>
            
            <Header />
            <Body />
            <Footer />
            
        </div>
    );
}

ReactDom.render(<App />, document.getElementById('root'));
   