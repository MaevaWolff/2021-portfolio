import Logo from "../assets/Logo";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import device from "../theme/device";
import { works } from "../data/works";
import gsap from "gsap";
import { useEffect } from "react";

import GeometricForm from "../assets/svg/GeometricForm";
import PikachuGif from "../assets/pikachu.gif";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 70vh;
  position: relative;

  @media ${device.tablet} {
    height: 90vh;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;

    @media ${device.tablet} {
      font-size: 5rem;
    }

    @media ${device.laptop} {
      font-size: 9.5rem;
    }
  }

  h2 {
    font-size: 2.5rem;
    color: transparent;
    -webkit-text-stroke: 1px ${({ theme }) => theme.colors.white};

    @media ${device.tablet} {
      font-size: 6rem;
    }

    @media ${device.laptop} {
      font-size: 9rem;
    }
  }
`;

const MyNameContainer = styled.div`
  margin-top: 8em;
  margin-bottom: 2em;
  font-weight: lighter;
  text-align: start;

  @media ${device.tablet} {
    margin-top: 0;
    text-align: center;
  }
`;

const Company = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 2px;

  @media ${device.laptop} {
    margin-top: -0.5em;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media ${device.tablet} {
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
    &:not(:last-child) {
      margin-bottom: 1.5em;
    }
  }
`;

const AboutMeContainer = styled.div`
  margin-top: 8em;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  img {
    width: 4em;
    height: initial;
  }

  p {
    margin-top: 0.5em;
    max-width: 22em;
    font-size: 2.5rem;
    line-height: 3rem;
  }
`;

const SelectedWorksWrapper = styled.div`
  margin-top: 10em;

  @media ${device.laptop} {
    margin-top: 20em;
  }
`;

const SelectedWorksContainer = styled.div`
  display: grid;
  grid-gap: 2em;
  margin-top: 2em;
  grid-template-columns: repeat(1, auto);
  grid-template-areas: "KATANA-SEARCHING" "KATANA" "PIZZA" "LINA";

  p  {
    font-weight: lighter;
    margin-top: 1em;
    font-size: 0.75rem;
  }

  h4 {
    font-weight: bold;
    margin-top: 0.25em;
  }

  a {
    // NOTE: remove link animation
    position: initial;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }

    &:after {
      display: none;
      visibility: hidden;
    }
  }

  @media ${device.laptop} {
    grid-gap: 5em;
    justify-content: center;
    grid-template-columns: repeat(2, auto);
    grid-template-areas: "KATANA-SEARCHING KATANA" "LINA PIZZA";
  }
`;

const WorkContainer = styled.div<{ gridArea: string }>`
  position: relative;
  width: fit-content;
  height: fit-content;
  grid-area: ${({ gridArea }) => gridArea && `${gridArea}`};
  justify-self: center;

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
  right: 0.5em;
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

const renderWorks = works.map((work) => (
  <WorkContainer key={work.id} gridArea={`${work.name}`}>
    <Link to={`/work/${work.name.toLowerCase()}`}>
      <img src={work.image} alt="works" />
      <p>{work.subtitle}</p>
      <h4>{work.name}</h4>
      <Stack>{work.stack}</Stack>
    </Link>
  </WorkContainer>
));

export default function HomePage() {
  let tl = gsap.timeline();

  const skewAnimation = { y: 100, ease: "power4.out", skewY: 7, opacity: 0 };

  function animatedTitle() {
    tl.from(".hero .hero__name", 2, skewAnimation, 0)
      .from(".hero h2", 2, skewAnimation, 0.2)
      .from(".hero h1", 2, skewAnimation, 0.4)
      .from(".hero .hero__company", 2, skewAnimation, 0.6);
  }

  useEffect(() => {
    animatedTitle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <HeaderContainer>
        <Logo />
        <Link to="/">about</Link>
      </HeaderContainer>

      <HeroContainer className="hero">
        <MyNameContainer>
          <p className="hero__name">Maëva WOLFF</p>
        </MyNameContainer>
        <FlexContainer>
          <h2>CREATIVE</h2>
          <h1>DEVELOPER</h1>
          <Company className="hero__company">at @Mansa ツ</Company>
        </FlexContainer>

        <ScrollContainer>
          <GeometricForm />
          <p>SCROLL</p>
        </ScrollContainer>

        <SocialsContainer>
          <a href="https://dribbble.com/maevawlf">dribbble</a>
          <a href="https://github.com/MaevaWolff">github</a>
        </SocialsContainer>
      </HeroContainer>

      <AboutMeContainer>
        {/* <h3>
          001/
          <br />
          ABOUT ME
        </h3> */}

        <img
          src={PikachuGif}
          alt="This is an animated gif, but it does not move"
        />

        <p>
          Bonjour ! My name is Maëva aka Maë.
          <br />
          I'm a french UI Designer and frontend developer at{" "}
          <a href="/">@Mansa</a> based in Paris.
          <br />
          At the same time, I'm currently a student at <a href="/">@HETIC</a> in
          the Bachelor Web.
        </p>
      </AboutMeContainer>

      <SelectedWorksWrapper>
        {/* <h3>
          002/
          <br />
          SELECTED WORKS
        </h3> */}

        <SelectedWorksContainer>{renderWorks}</SelectedWorksContainer>
      </SelectedWorksWrapper>

      <>
        <p>say maeva.wolffpro@gmail.com</p>
      </>
    </div>
  );
}
