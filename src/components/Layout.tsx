import { ReactNode } from "react";
import styled from "styled-components";
import device from "../theme/device";

import { FlexCenter } from "../styles/mixins";

// import components
import Header from "./Header";

const LayoutContainer = styled.div<{ color?: string }>`
  min-height: 100vh;
  width: 100%;
  padding: 1em 1em 0 1em;

  h1 {
    color: ${({ color }) => color && `${color}`};
  }
  @media ${device.tablet} {
    padding: 1em 2em 0 2em;
  }

  .logo {
    line {
      stroke: ${({ color }) => color && `${color}`};
    }
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  ${FlexCenter};
`;

type Props = {
  children: ReactNode;
  color?: string;
};

export default function Layout({ children, color }: Props) {
  return (
    <LayoutContainer color={color}>
      <Header />

      <Main>{children}</Main>
    </LayoutContainer>
  );
}
