import styled from "styled-components";

export const InfoWrap = styled("div")`
  width: 390px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 130px auto auto auto;
  border: 1px solid #a451b1;
  border-radius: 17px;

  .wrap {
    padding: 0 20px;

    > *:not(:last-of-type) {
      border-bottom: 2px solid #eff0f2;
    }
  }

  .row {
    display: flex;
    flex-direction: row;
    padding: 20px 0;
  }

  .column {
    width: 70px;
  }
`;
