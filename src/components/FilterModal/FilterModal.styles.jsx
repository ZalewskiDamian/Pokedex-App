import styled from "styled-components";
import { motion } from "framer-motion";

export const Content = styled(motion.div)`
  position: fixed;
  top: 20%;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  border-top-left-radius: 2.5rem;
  border-top-right-radius: 2.5rem;
  background-color: #fff;
  padding: 2rem 2rem 4rem 2rem;
  z-index: 1001;
  overflow-y: scroll;

  @media (min-width: 625px) {
    top: 0;
    width: 380px;
    left: auto;
    border-top-right-radius: 0;
    border-bottom-left-radius: 2.5rem;
  }
`;
