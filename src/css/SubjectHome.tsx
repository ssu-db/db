import styled from "styled-components";

export const ButtonWrap = styled("div")`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 100px auto auto auto;

  div > div {
    margin: 10px auto;
  }

  span {
    color: #a451b1;
    font-weight: bold;
  }
`;

export const WeeklyStudy = styled("div")`
  background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Cg data-name='MDI / monitor'%3E%3Cpath data-name='Path / monitor' d='M43.75 33.334H6.25v-25h37.5m0-4.167H6.25a4.152 4.152 0 0 0-4.167 4.167v25a4.167 4.167 0 0 0 4.167 4.167h14.583v4.166h-4.167v4.167h16.667v-4.167h-4.167V37.5H43.75a4.167 4.167 0 0 0 4.167-4.167v-25a4.166 4.166 0 0 0-4.167-4.166z' fill='%239c9c9c' opacity='.6'/%3E%3C/g%3E%3C/svg%3E");
  background-size: 50px;
  background-color: rgba(164, 81, 177, 0.15);
  border-radius: 40px;
  width: 50px;
  height: 50px;
`;

export const Attendance = styled("div")`
  background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='47' height='47'%3E%3Cg opacity='.6'%3E%3Cpath data-name='사각형 247' fill='none' d='M0 0h47v47H0z'/%3E%3Cpath data-name='패스 571' d='M43.084 10.144L20.739 32.509l-8.3-8.3 2.761-2.761 5.542 5.542 19.58-19.587zm-4.328 9.873A15.656 15.656 0 1 1 23.5 7.834a15.512 15.512 0 0 1 8.382 2.448l2.82-2.82A19.387 19.387 0 0 0 23.5 3.917a19.635 19.635 0 1 0 18.409 12.945z' fill='%239c9c9c'/%3E%3C/g%3E%3C/svg%3E");
  background-size: 50px;
  background-color: rgba(164, 81, 177, 0.15);
  border-radius: 40px;
  width: 50px;
  height: 50px;
`;

export const Score = styled("div")`
  background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='43' height='43'%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath data-name='사각형 248' fill='%239c9c9c' d='M0 0h43v43H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg data-name='그룹 312'%3E%3Cg data-name='그룹 311' clip-path='url(%23a)' fill='%239c9c9c' opacity='.6'%3E%3Cpath data-name='패스 575' d='M40.937.024l-5.353.868a21.943 21.943 0 0 0-13.441 6.921l-6 6.574-8.174-.478a1.237 1.237 0 0 0-1.1.547L2.76 20.601a1.237 1.237 0 0 0 .516 1.815l5.8 2.637 8.875 8.874 2.64 5.808a1.237 1.237 0 0 0 1.81.519l6.235-4.137a1.237 1.237 0 0 0 .551-1.116l-.544-8.173 6.546-5.974a21.942 21.942 0 0 0 6.919-13.438l.868-5.353A1.777 1.777 0 0 0 40.937.024m-9.861 17.149a3.711 3.711 0 1 1 0-5.248 3.711 3.711 0 0 1 0 5.248'/%3E%3Cpath data-name='패스 576' d='M14.819 35.029l-6.848-6.848a.487.487 0 0 0-.685-.008 108.5 108.5 0 0 0-1.067 1.047A21.99 21.99 0 0 0 .001 43a21.988 21.988 0 0 0 13.78-6.219 108.5 108.5 0 0 0 1.047-1.067.487.487 0 0 0-.008-.685'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-size: 50px;
  background-color: rgba(164, 81, 177, 0.15);
  border-radius: 40px;
  width: 50px;
  height: 50px;
`;

export const Title = styled("div")`
  margin-top: 30px;
  margin-left: 20px;
  margin-bottom: 15px;
  font-size: 22px;
  font-weight: bold;
`;

export const NoticeWrap = styled("div")`
  .notice {
    height: 100px;
    display: flex;
    justify-content: center;
  }

  .container {
    width: 90%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 0 20px;
  }

  > .notice:nth-child(odd) {
    background: rgba(164, 81, 177, 0.15);
  }

  span {
    width: 100%;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  .name {
    font-weight: bold;
  }

  .link {
    color: #a451b1;
    font-size: 15px;
    font-weight: bold;
  }

  .date {
    text-align: right;
  }

  .notice_footer {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
