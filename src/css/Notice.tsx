import styled from "styled-components";

export const NoticeWrap = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 20px;
  gap: 30px;

  .container {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid #a451b1;
  }

  .title {
    width: 100%;
    min-height: 55px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-bottom: 1px solid #a451b1;
    background: rgba(164, 81, 177, 0.15);

    span {
      margin-left: 15px;
      font-weight: bold;
    }

    span.date {
      font-size: 10px;
      font-weight: normal;
      color: #696868;
    }
  }

  .content {
    width: 90%;
    height: 100%;
    min-height: 290px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px;
  }
`;

export const Attendance = styled("div")<{ attendance: boolean }>`
  width: 70px;
  background-color: #f2e5f4;
  color: ${(props) => (props.attendance ? "#a451b1" : "red")};
  border-radius: 10px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px 5px;
    font-size: 13px;
  }
`;
