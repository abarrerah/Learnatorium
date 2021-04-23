import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Donation from "./pages/Donation";
import Stories from "./pages/Stories";
import aboutUs from "./pages/aboutUs";
import signIn from "./pages/signIn";
import Test from "./pages/Test";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <main>
          <Route path="/Home" component={Home} ></Route>
          <Route path="/Stories" component={Stories} ></Route>
          <Route path="/Test" component={Test}></Route>
          <Route path="/Contact" component={Contact} ></Route>
          <Route path="/Donation" component={Donation} ></Route>
          <Route path="/AboutUs" component={aboutUs} ></Route>
          <Route path="/Login" component={signIn} ></Route>
        </main>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
