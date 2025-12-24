import { Route, Routes } from "react-router";
import { useContext } from "react";
import { TopicsContext } from "../Contexts/TopicsContext";
import TopicBody from "../TopicMain/TopicBody";
import HomePage from "../TopicMain/HomePage";
const RoutesComp = ({ onStart }) => {
  const { topics } = useContext(TopicsContext);

  return (
    <Routes>
      {topics.map((topic) => {
        return (
          <Route
            key={topic.id}
            path={`/${topic.id}`}
            element={<TopicBody onStart={onStart} topic={topic} />}
          />
        );
      })}
      <Route path="/home" index element={<HomePage />} />
    </Routes>
  );
};
export default RoutesComp;
