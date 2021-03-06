import { works } from "../data/works";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 70%;
  height: calc(100vh - 4em);
  object-fit: contain;
`;

export default function WorkPage() {
  const windowLocation = window.location.pathname.substr(6);

  const CURRENTLY_WORK = works.filter(
    (el) => el.name.toLocaleLowerCase() === windowLocation
  )[0];

  return (
    <Container>
      <Image src={`${CURRENTLY_WORK.image}`} alt="jdks" />
    </Container>
  );
}
