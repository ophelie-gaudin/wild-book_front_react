import Skill from "./Skill";

const SkillsList = ({ upvotes }) => {
  return (
    <>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {upvotes.map((upvote) => {
          return (
            <Skill
              key={upvote.id}
              name={upvote.skill.name}
              counter={upvote.counter}
            />
          );
        })}
      </ul>
    </>
  );
};

export default SkillsList;
