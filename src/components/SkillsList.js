import Skill from "./Skill";

const SkillsList = ({ skills }) => {
  return (
    <>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill) => {
          return <Skill name={skill.title} votes={skill.votes} />;
        })}
        <Skill name="HTML" votes="3" />
        <Skill name="CSS" votes="3" />
        <Skill name="TypeScript" votes="3" />
        <Skill name="React" votes="3" />
        <Skill name="Node" votes="3" />
      </ul>
    </>
  );
};

export default SkillsList;
