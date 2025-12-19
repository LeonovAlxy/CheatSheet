import { useContext } from "react";
import { TopicsContext } from "../Contexts/TopicsContext";
import { NavLink } from "react-router";

const NavLinks = () => {
  const { topics } = useContext(TopicsContext);
  return (
    <nav
      style={{
        width: "250px",
        backgroundColor: "#f2f2f2",
        padding: "20px",
        boxSizing: "border-box",
        overflowY: "auto",
      }}
    >
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {topics.map((topic) => {
          return (
            <li
              key={topic.id}
              style={{
                padding: "10px 15px",
                marginBottom: "5px",
                backgroundColor: "#fff",
                cursor: "pointer",
                borderRadius: "4px",
                transition: "background-color 0.3s",
              }}
            >
              <NavLink to={`/${topic.id}`}>{topic.title} ///</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default NavLinks;
