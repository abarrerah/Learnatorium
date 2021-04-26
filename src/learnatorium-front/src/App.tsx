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
          <Route path="/" exact component={Home} ></Route>
          <Route path="/Stories" exact component={Stories} ></Route>
          <Route path="/Test" exact component={Test}></Route>
          <Route path="/Contact" exact component={Contact} ></Route>
          <Route path="/Donation" exact component={Donation} ></Route>
          <Route path="/AboutUs" exact component={aboutUs} ></Route>
          <Route path="/Login" exact component={signIn} ></Route>
        </main>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
