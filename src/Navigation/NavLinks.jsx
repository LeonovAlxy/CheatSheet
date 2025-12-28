import { useContext } from "react";
import { TopicsContext } from "../Contexts/TopicsContext";
import { NavLink } from "react-router";

const NavLinks = ({ onStart }) => {
  const { topics } = useContext(TopicsContext);
  return (
    <nav>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {topics.map((topic) => {
          return (
            <li key={topic.id}>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={onStart}
                to={`/${topic.id}`}
              >
                {topic.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default NavLinks;
