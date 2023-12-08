import styled from "styled-components";

export const Title = styled("div")`
  margin-top: 100px;
  margin-left: 20px;
  margin-bottom: 15px;
  font-size: 22px;
  font-weight: bold;
`;

export const GraphWrap = styled("div")`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 0 auto;
  border: 1px solid #a451b1;
  border-radius: 17px;
`;

export const Graph = styled("div")`
  width: 90%;
  height: 100px;
  margin: 0 auto;
  padding-top: 15px;
`;

export const Avg = styled("div")`
  display: flex;
  flex-direction: column;

  .all {
    font-weight: bold;
  }

  span.avg {
    color: #fb2d2d;
    font-size: 20px;
    font-weight: bolder;
  }

  span.all_avg {
    color: #b2abab;
    font-size: 13px;
  }
`;

export const ScoreWrap = styled("div")`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
`;
