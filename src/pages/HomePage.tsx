import Logo from "../assets/Logo";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import device from "../theme/device";
import { works } from "../data/works";

import GeometricForme from "../assets/svg/GeometricForme";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HighlightSpan = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  height: 85vh;
  position: relative;

  @media ${device.tablet} {
    justify-content: center;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;

    @media ${device.tablet} {
      font-size: 10rem;
    }
  }

  h2 {
    font-size: 2.5rem;

    @media ${device.tablet} {
      font-size: 12.5rem;
    }
  }
`;

const MyNameContainer = styled.div`
  margin-top: 8em;
  margin-bottom: 2em;
  font-weight: light;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;
  }
`;

const rotateAnimate = keyframes`
  from {
    transform: none;
  }
  to {
    transform: rotate(180deg);
  }
`;

const ScrollContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  svg {
    animation: ${rotateAnimate} 6s infinite linear;
  }

  p {
    top: 42%;
    left: 20%;
    font-size: 0.75rem;
    position: absolute;
    font-weight: bold;
  }
`;

const SocialsContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  a {
    &:after {
      display: block;
      content: "";
      margin-top: 0.25em;
      width: inherit;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
  a:not(:last-child) {
    margin-bottom: 1.5em;
  }
`;

const SelectedWorks = styled.div`
  width: 100%;
  overflow-x: hidden;
  margin-top: 4em;

  p {
    width: max-content;

    &:after,
    &:before {
      content: "";
      display: block;
      margin: 1em 0;
      width: 100%;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
`;

const SelectedWorksContainer = styled.div`
  margin-top: 2em;
  display: grid;
  grid-gap: 2em;

  p  {
    font-weight: lighter;
    margin-top: 1em;
    font-size: 0.75rem;
  }

  h4 {
    font-weight: bold;
    margin-top: 0.25em;
  }
`;

const WorkContainer = styled.div`
  position: relative;

  img {
    width: 90%;
  }
`;

const Stack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6em;
  height: 6em;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  font-size: 0.75rem;
  font-weight: normal;
  position: absolute;
  top: 50%;
  right: 0;

  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
`;

export default function HomePage() {
  const renderWorks = works.map((work) => (
    <WorkContainer key={work.id}>
      <img src={require(`../assets/${work.image}`)} alt="works" />
      <p>{work.subtitle}</p>
      <h4>{work.name}</h4>
      <Stack>{work.stack}</Stack>
    </WorkContainer>
  ));

  return (
    <div>
      <HeaderContainer>
        <Logo />
        <Link to="/">about</Link>
      </HeaderContainer>

      <HeroContainer>
        <FlexContainer>
          <MyNameContainer>
            <p>Maëva WOLFF</p>
            <p>
              2000 - 2021 <HighlightSpan>ツ</HighlightSpan>
            </p>
          </MyNameContainer>
          <h2>CREATIVE</h2>
        </FlexContainer>
        <h1>DEVELOPER</h1>

        <ScrollContainer>
          <GeometricForme />
          <p>SCROLL</p>
        </ScrollContainer>

        <SocialsContainer>
          <a href="https://dribbble.com/maevawlf">dribbble</a>
          <a href="https://github.com/MaevaWolff">github</a>
        </SocialsContainer>
      </HeroContainer>

      <>
        <SelectedWorks>
          <p>
            SELECTED WORKS / SELECTED WORKS / SELECTED WORKS / SELECTED WORKS /
            SELECTED WORKS / SELECTED WORKS / SELECTED WORKS / SELECTED WORKS /
            SELECTED WORKS / SELECTED WORKS
          </p>
        </SelectedWorks>

        <SelectedWorksContainer>{renderWorks}</SelectedWorksContainer>
      </>
    </div>
  );
}
