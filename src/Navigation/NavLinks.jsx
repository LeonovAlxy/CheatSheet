import { useContext } from "react";
import { TopicsContext } from "../Contexts/TopicsContext";
import { NavLink } from "react-router";

const NavLinks = () => {
  const { topics } = useContext(TopicsContext);
  return (
    <nav>
      {topics.map((topic) => {
        return (
          <NavLink to={`/${topic.id}`} key={topic.id}>
            {topic.title} ///
          </NavLink>
        );
      })}
    </nav>
  );
};
export default NavLinks;
