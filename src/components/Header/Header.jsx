import { NavLink } from "react-router-dom";
import { AppRoute } from "../../routing/AppRoute.enum";
import logoIcon from "../../assets/images/logo.png";
import { Wrapper, Logo } from "./Header.styles";

const Header = () => {
  return (
    <Wrapper>
      <NavLink to={AppRoute.home}>
        <Logo src={logoIcon} alt="logo" />
      </NavLink>
    </Wrapper>
  );
};

export default Header;
