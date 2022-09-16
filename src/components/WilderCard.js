import blank_profile from "../assets/blank_profile.png";
import SkillsList from "./SkillsList";

const WilderCard = ({ name, upvotes, city }) => {
  return (
    <article className="card">
      <img src={blank_profile} alt="Jane Doe Profile" />
      <h3>{name}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <SkillsList upvotes={upvotes} />
    </article>
  );
};

export default WilderCard;
