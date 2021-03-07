import { works } from "../data/works";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Image = styled.img`
  object-fit: contain;
  position: absolute;
  opacity: 0.3;
`;

const WorkName = styled.h1`
  position: absolute;
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
        <Image src={`${CURRENTLY_WORK.image}`} alt="jdks" />
        <WorkName>{renderWorkName()}</WorkName>
      </HeroContainer>
    </Container>
  );
}
