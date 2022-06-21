import { useState } from "react";
import TabAbout from "../TabAbout/TabAbout";
import TabStats from "../TabStats/TabStats";
import TabEvolution from "../TabEvolution/TabEvolution";
import { Wrapper, TabsNav, Tab, TabsWrapper, Content } from "./Tabs.styles";

const Tabs = ({ pokemon }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const active = true;

  return (
    <Wrapper>
      <TabsNav>
        <Tab
          type="button"
          active={toggleState === 1 && active}
          onClick={() => toggleTab(1)}
        >
          About
        </Tab>
        <Tab
          type="button"
          active={toggleState === 2 && active}
          onClick={() => toggleTab(2)}
        >
          Stats
        </Tab>
        <Tab
          type="button"
          active={toggleState === 3 && active}
          onClick={() => toggleTab(3)}
        >
          Evolution
        </Tab>
      </TabsNav>

      <TabsWrapper>
        <Content active={toggleState === 1 && active}>
          <TabAbout pokemon={pokemon} />
        </Content>
        <Content active={toggleState === 2 && active}>
          <TabStats pokemon={pokemon} />
        </Content>
        <Content active={toggleState === 3 && active}>
          <TabEvolution pokemon={pokemon} />
        </Content>
      </TabsWrapper>
    </Wrapper>
  );
};

export default Tabs;
