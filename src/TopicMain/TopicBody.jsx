import Buttons from "./Buttons";

const TopicBody = ({ topic }) => {
  return (
    <div>
      <h2>{topic.title}</h2>
      <p>{topic.description}</p>
      <a href={topic.documentation}>Официальная документация</a>
      <Buttons topic={topic} />
    </div>
  );
};
export default TopicBody;
