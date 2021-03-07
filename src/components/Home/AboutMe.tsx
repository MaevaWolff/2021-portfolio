import styled from "styled-components";
import device from "../../theme/device";

import PikachuGif from "../../assets/pikachu.gif";

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

export default function AboutMe() {
  return (
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
  );
}
