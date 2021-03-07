import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import gsap from "gsap";
import device from "../../theme/device";
import GeometricForm from "../../assets/svg/GeometricForm";

import { FlexCenter, HoverLink } from "../../styles/mixins";

const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 70vh;
  position: relative;

  @media ${device.tablet} {
    height: 90vh;
    ${FlexCenter}
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
    ${HoverLink}

    &:not(:last-child) {
      margin-bottom: 1.5em;
    }
  }
`;

export default function Intro() {
  let tl = gsap.timeline();

  const skewAnimation = {
    y: 100,
    ease: "power4.out",
    skewY: 7,
    opacity: 0,
    duration: 2,
    rotationX: 180,
  };

  function animatedTitle() {
    tl.from(".hero .hero__name", skewAnimation, 0)
      .from(".hero h2", skewAnimation, 0.2)
      .from(".hero h1", skewAnimation, 0.4)
      .from(".hero .hero__company", skewAnimation, 0.6);
  }

  useEffect(() => {
    animatedTitle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
  );
}
