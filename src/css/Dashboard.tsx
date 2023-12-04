import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 88px 20px 20px 20px;
`;

export const StyledCard = styled("div")`
  width: 100%;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
`;

export const Background = styled("div")`
  width: 100%;
  height: 120px;
  background: #f07878;
  border-top-left-radius: 17px;
  border-top-right-radius: 17px;
`;

export const InfoWrap = styled("div")`
  height: 60px;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  border-bottom-left-radius: 17px;
  border-bottom-right-radius: 17px;

  span {
    font-size: 13px;
  }

  .subject {
    color: #f07878;
    font-weight: bold;
  }

  .semester {
    color: #857373;
  }

  .notice {
    color: #a451b1;
    padding-top: 5px;
    font-weight: bold;
  }
`;
