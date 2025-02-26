import "./navbar/card1.css";
const Card1 = ({ header, centerSlot, button }) => {
  return (
    <div className="nav-bar">
      <div className="header">{header}</div>
      <div className="center">{centerSlot}</div>
      <div className="button">{button}</div>
    </div>
  );
};
export default Card1;
