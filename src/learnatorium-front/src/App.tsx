/* eslint-disable no-cond-assign */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Donation from "./pages/Donation";
import Stories from "./pages/Stories";
import aboutUs from "./pages/aboutUs";
import signIn from "./pages/signIn";
import Test from "./pages/Test";
import Contact from "./pages/Contact";
import profile from "./pages/profile";
import SignUp from "./pages/signUp";
import Admin from "./pages/admin";
import UserMeta from "./pages/meta/UserMeta";
import DocumentsMeta from "./pages/meta/DocumentsMeta";
import ThemeMeta from "./pages/meta/ThemeMeta";
import CategoriesMeta from "./pages/meta/CategoriesMeta";
import SourceMeta from "./pages/meta/SourceMeta";
import ChapterMeta from "./pages/meta/ChapterMeta";

import "./style/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8050/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if(response.status=== 200){
        setName("200");
      }else{
        setName("");
      }

    })();
  });

  return (
    <div className="App">
      <Router>
        <Navbar name={name} />
        <Route path="/" exact component={Home} />
        <Route path="/Stories" exact component={Stories} />
        <Route path="/Test" exact component={Test} />
        <Route path="/Contact" exact component={Contact} />
        <Route path="/Donation" exact component={Donation} />
        <Route path="/AboutUs" exact component={aboutUs} />
        <Route path="/Login" exact component={signIn} />
        <Route path="/Profile" exact component={profile} />
        <Route path="/Register" exact component={SignUp} />
        <Route path="/Admin" exact component={Admin} />

        <Route path="/Admin-User-Zone" exact component={UserMeta} />
        <Route path="/Admin-Documents-Zone" exact component={DocumentsMeta} />
        <Route path="/Admin-Theme-Zone" exact component={ThemeMeta} />
        <Route path="/Admin-Categories-Zone" exact component={CategoriesMeta} />
        <Route path="/Admin-Source-Zone" exact component={SourceMeta} />
        <Route path="/Admin-Chapter-Zone" exact component={ChapterMeta} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
