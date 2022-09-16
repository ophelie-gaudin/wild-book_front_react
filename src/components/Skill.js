const Skill = ({ name, counter }) => {
  return (
    <li>
      {name}
      <span className="votes">{counter}</span>
    </li>
  );
};

export default Skill;
