import Logo from "../assets/Logo";
import styled from "styled-components";
import { Link } from "react-router-dom";
import device from "../theme/device";

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
  justify-content: center;
  flex-direction: column;
  height: 75vh;

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

const MyName = styled.div`
  margin-bottom: 2em;
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

export default function HomePage() {
  return (
    <div>
      <HeaderContainer>
        <Logo />
        <Link to="/">about</Link>
      </HeaderContainer>

      <HeroContainer>
        <FlexContainer>
          <MyName>
            <p>Maëva WOLFF</p>
            <p>
              2000 - 2021 <HighlightSpan>ツ</HighlightSpan>
            </p>
          </MyName>
          <h2>CREATIVE</h2>
        </FlexContainer>
        <h1>DEVELOPER</h1>
      </HeroContainer>
    </div>
  );
}
