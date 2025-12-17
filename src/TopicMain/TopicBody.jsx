import Buttons from "./Buttons";

const TopicBody = ({ topic }) => {
  if (!topic) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>{topic.title}</h2>
      <p>{topic.description}</p>
      <a href={topic.documentation}>Официальная документация</a>
      <Buttons />
    </div>
  );
};
export default TopicBody;
