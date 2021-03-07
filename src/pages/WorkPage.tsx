import { works } from "../data/works";
import styled from "styled-components";

import { FlexCenter } from "../styles/mixins";

const Container = styled.div`
  width: 100%;
  display: flex;
  ${FlexCenter};
`;

const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  ${FlexCenter};
  text-align: center;
`;

const WorkName = styled.h1`
  font-size: 8rem;
  line-height: 6.5rem;
  font-weight: bold;
  max-width: 8em;
`;

export default function WorkPage() {
  const windowLocation = window.location.pathname.substr(6);

  const CURRENTLY_WORK = works.filter(
    (el) => el.name.toLocaleLowerCase() === windowLocation
  )[0];

  function renderWorkName() {
    if (CURRENTLY_WORK.name.length < 7) {
      return `${CURRENTLY_WORK.name} ${CURRENTLY_WORK.subtitle}`;
    }
    return `${CURRENTLY_WORK.name}`;
  }

  return (
    <Container>
      <HeroContainer>
        <WorkName>{renderWorkName()}</WorkName>
      </HeroContainer>
    </Container>
  );
}
