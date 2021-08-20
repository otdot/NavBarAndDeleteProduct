import "../App.css"
import NavItem from "./NavItem"


const Navbar = ({ items, showLinks }) => {

  return (
    <div className="links" id={showLinks ? "hidden" : ""}>
      {items.map((item) => (
        <NavItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Navbar
