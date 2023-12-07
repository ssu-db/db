import styled from "styled-components";

export const StyledFooter = styled("div")`
  width: 100%;
  height: 68px;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  background: #333333;

  span {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-left: 20px;
    align-items: center;
    color: #a2a2a2;
    font-size: 13px;
  }
`;
