import Buttons from "./Buttons";

const TopicBody = ({ topic, onStart }) => {
  return (
    <div className="app-container">
      <h2>{topic.title}</h2>
      <>{topic.description}</>
      <a href={topic.documentation}>Официальная документация</a>
      <Buttons onStart={onStart} topic={topic} />
    </div>
  );
};
export default TopicBody;
