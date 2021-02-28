import { works } from "../data/works";
import styled from "styled-components";
import { motion } from "framer-motion";

const Image = styled(motion.img)`
  width: 100%;
  height: calc(100vh - 4em);
`;

export default function WorkPage() {
  const windowLocation = window.location.pathname.substr(6);

  const CURRENTLY_WORK = works.filter(
    (el) => el.name.toLocaleLowerCase() === windowLocation
  )[0];

  return (
    <div>
      <Image layoutId="work-image" src={`${CURRENTLY_WORK.image}`} alt="jdks" />
    </div>
  );
}
