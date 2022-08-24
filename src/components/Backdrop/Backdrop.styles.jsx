import styled from "styled-components";
import { motion } from "framer-motion";

export const Mask = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  overflow-y: hidden;
`;
