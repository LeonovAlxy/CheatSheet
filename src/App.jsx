import { useState } from "react";
import NavLinks from "./Navigation/NavLinks";
import RoutesComp from "./Navigation/RoutesComp";
import HomePage from "./TopicMain/HomePage";
import Header from "./Header/Header";
import "./App.css";

function App() {
  const [showHome, setShowHome] = useState(true);

  const handleShowHome = () => {
    setShowHome(!showHome);
  };

  return (
    <>
      <Header />
      <NavLinks onStart={() => setShowHome(false)} />
      {showHome ? (
        <HomePage onStart={handleShowHome} />
      ) : (
        <RoutesComp onStart={handleShowHome} />
      )}
    </>
  );
}

export default App;
