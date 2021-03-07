import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/Logo";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />

      <Link to="/">about</Link>
    </HeaderContainer>
  );
}
