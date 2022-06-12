import logoIcon from "../../assets/images/logo.png";
import { Wrapper, Logo } from "./Header.styles";

const Header = () => {
  return (
    <Wrapper>
      <Logo src={logoIcon} alt="logo" />
    </Wrapper>
  );
};

export default Header;
