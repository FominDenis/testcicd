import React, { useState } from "react";
import styled from "styled-components";

interface Props {
    children: React.ReactElement<any>;
    content: string;
}

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const TooltipContent = styled.span`
  //visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

const Tooltip: React.FC<Props> = ({ children, content }) => {
    const [isShowingTooltip, setIsShowingTooltip] = useState(false);

    const handleMouseEnter = () => {
        setIsShowingTooltip(true);
    };

    const handleMouseLeave = () => {
        setIsShowingTooltip(false);
    };

    return (
        <TooltipWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
            {isShowingTooltip && <TooltipContent>{content}</TooltipContent>}
        </TooltipWrapper>
    );
};

export default Tooltip;