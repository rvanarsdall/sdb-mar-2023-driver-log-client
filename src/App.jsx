import React, { useState, useEffect } from "react";
import Auth from "./components/Auth/Auth";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LogIndex from "./components/Log/LogIndex";

function App() {
  // useState variables
  const [token, setToken] = useState("");
  // uef keyboard shortcut for useEffect snippit
  useEffect(() => {
    // If we have something in our local storage then lets update our State Variable so other other components can use it.
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  function updateToken(newToken) {
    // update the state of token
    setToken(newToken);
    // update our localStorage
    localStorage.setItem("token", newToken);
  }

  return (
    <div>
      <Header />
      <Auth updateToken={updateToken} />
      <LogIndex token={token} />
      <Footer />
    </div>
  );
}

export default App;
