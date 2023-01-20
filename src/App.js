import ReactDOM from "react-dom/client";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById('container'));


const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer/>
  </>

)


root.render(<AppLayout />)