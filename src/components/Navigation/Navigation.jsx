import { data } from "./Navigation.data";
import { Wrapper, List, ListItem, Link } from "./Navigation.styles";

const Navigation = () => {
  const renderedLinks = data.map((item) => (
    <ListItem key={item.id} className={item.class}>
      <Link to={item.link}>{item.name}</Link>
    </ListItem>
  ));
  return (
    <Wrapper>
      <List>{renderedLinks}</List>
    </Wrapper>
  );
};

export default Navigation;
