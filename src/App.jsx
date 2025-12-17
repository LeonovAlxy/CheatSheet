import "./App.css";
import TopicBody from "./TopicMain/TopicBody";
import NavLinks from "./Navigation/NavLinks";
import RoutesComp from "./Navigation/RoutesComp";

function App() {
  return (
    <>
      <NavLinks />
      <RoutesComp />
      <TopicBody />
    </>
  );
}

export default App;
