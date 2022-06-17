import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
  width: 15rem;
  height: 15rem;
  animation: ${rotate} 1.5s linear infinite;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
