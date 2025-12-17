import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TopicsContext } from "../Contexts/TopicsContext";

const Buttons = () => {
  const { topics } = useContext(TopicsContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const initialIndex = topics.findIndex((topic) => topic.id === id);
  const [currIndex, setCurrIndex] = useState(initialIndex);

  const handleClickPrev = () => {
    if (currIndex > 0) {
      const newIndex = currIndex - 1;
      setCurrIndex(newIndex);
      navigate(`/${topics[newIndex].id}`);
    }
  };

  const handleClickNext = () => {
    if (currIndex < topics.length - 1) {
      const newIndex = currIndex + 1;
      setCurrIndex(newIndex);
      navigate(`/${topics[newIndex].id}`);
    }
  };

  return (
    <>
      {currIndex > 0 && (
        <button onClick={handleClickPrev}>
          <p>&larr; {topics[currIndex - 1].title}</p>
        </button>
      )}

      {currIndex < topics.length - 1 && (
        <button onClick={handleClickNext}>
          <p>{topics[currIndex + 1].title} &rarr;</p>
        </button>
      )}
    </>
  );
};
export default Buttons;
