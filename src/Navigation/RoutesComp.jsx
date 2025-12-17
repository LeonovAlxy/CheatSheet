import { Route, Routes } from "react-router";
import { useContext } from "react";
import { TopicsContext } from "../Contexts/TopicsContext";
import TopicBody from "../TopicMain/TopicBody";
const RoutesComp = () => {
  const { topics } = useContext(TopicsContext);

  return (
    <Routes>
      {topics.map((topic) => {
        console.log(topic);
        return (
          <Route
            key={topic.id}
            path={`/${topic.id}`}
            element={<TopicBody topic={topic} />}
          />
        );
      })}
    </Routes>
  );
};
export default RoutesComp;
