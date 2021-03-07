import { Link } from "react-router-dom";
import styled from "styled-components";
import { works } from "../../data/works";
import device from "../../theme/device";

import { FlexCenter } from "../../styles/mixins";

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
  ${FlexCenter}
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

export default function SelectedWorks() {
  return (
    <SelectedWorksWrapper>
      {/* <h3>
          002/
          <br />
          SELECTED WORKS
        </h3> */}

      <SelectedWorksContainer>{renderWorks}</SelectedWorksContainer>
    </SelectedWorksWrapper>
  );
}
