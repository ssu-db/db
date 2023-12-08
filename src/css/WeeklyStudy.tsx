import styled from "styled-components";

export const Title = styled("div")`
  margin-top: 100px;
  margin-left: 20px;
  margin-bottom: 15px;
  font-size: 22px;
  font-weight: bold;
`;

export const WeeklyStudyWrap = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  gap: 30px;

  .container {
    width: 90%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid #a451b1;
  }

  .title {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #a451b1;
    background: rgba(164, 81, 177, 0.15);

    span {
      margin-left: 15px;
      font-weight: bold;
    }
  }

  .content {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }

  .attendance {
    width: 64px;
    height: 18px;
    background-color: #f2e5f4;
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
