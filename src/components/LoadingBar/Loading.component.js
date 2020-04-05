import React, { memo } from "react";
import styled, { keyframes } from "styled-components";

const ProgressBarWrapper = styled.div`
  margin: 24px;
  border: 2px solid lightblue;
  height: 4vh;
  width: 100%;
  border-radius: 10px;
`;
const fill = keyframes`
  0% {width: 0%}
  100% {width: 100%} 
`;
const ProgressBar = styled.div`
  background-image: linear-gradient(to right, #5777ea, #00ffc4);
  height: 100%;
  animation: ${fill} 5s linear 20; //will animate 20 times
`;
const Loading = () => {
  return (
    <ProgressBarWrapper>
      <ProgressBar />
    </ProgressBarWrapper>
  );
};

export default memo(Loading);
