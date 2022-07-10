import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100%;
`;

export const Grid = styled(motion.ul)`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 48rem));
  grid-gap: 3rem 1rem;
`;

export const MotionListItem = styled(motion.li)``;
