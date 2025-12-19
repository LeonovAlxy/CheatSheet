import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TopicsContext } from "../Contexts/TopicsContext";

const Buttons = ({ topic }) => {
  const { topics } = useContext(TopicsContext);

  const navigate = useNavigate();

  const id = topics.findIndex((item) => item.id === topic.id);

  const [currIndex, setCurrIndex] = useState(id);

  useEffect(() => {
    setCurrIndex(id);
  }, [id]);

  const handleNavigate = (direction) => {
    const newIndex = currIndex + direction;

    setCurrIndex(newIndex);
    navigate(`/${topics[newIndex].id}`);
  };

  return (
    <>
      {currIndex > 0 && (
        <button onClick={() => handleNavigate(-1)}>
          <p>&larr; {topics[currIndex - 1].title}</p>
        </button>
      )}

      {currIndex < topics.length - 1 && (
        <button onClick={() => handleNavigate(1)}>
          <p>{topics[currIndex + 1].title} &rarr;</p>
        </button>
      )}
    </>
  );
};
export default Buttons;
