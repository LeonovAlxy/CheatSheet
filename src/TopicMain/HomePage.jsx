import { useNavigate } from "react-router";
import { TopicsContext } from "../Contexts/TopicsContext";
import { useContext } from "react";
const HomePage = ({ onStart }) => {
  const { topics } = useContext(TopicsContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/CheatSheet/${topics[0].id}`);
    onStart();
  };

  return (
    <div className="app-container">
      <h1>Этот сайт посвящен React</h1>
      <button onClick={handleClick}>Перейти к изучению</button>
    </div>
  );
};
export default HomePage;
