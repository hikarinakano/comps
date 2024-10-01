import { useContext } from "react";
import NavigationContext from "../context/navigation-context";

const Link = ({to, children}) => {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (event) => {
    event.preventDefault();
    navigate(to);
  };
  return <a onClick={handleClick}>{ children }</a>
}

export default Link;