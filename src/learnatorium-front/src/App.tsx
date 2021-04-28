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
import profile from './pages/profile'
import './style/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Route path="/" exact component={Home} />
          <Route path="/Stories" exact component={Stories} />
          <Route path="/Test" exact component={Test}/>
          <Route path="/Contact" exact component={Contact} />
          <Route path="/Donation" exact component={Donation} />
          <Route path="/AboutUs" exact component={aboutUs}/>
          <Route path="/Login" exact component={signIn} />
          <Route path="/Profile" exact component={profile}/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
