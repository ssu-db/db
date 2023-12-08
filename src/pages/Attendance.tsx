import React from "react";

import {
  Container,
  StyledTable,
  TBody,
  TCell,
  THead,
  Title,
  TRow,
} from "../css/Attendance";

const dummyData = [
  {
    date: "9/2 (토)",
    time: "13:30-16:15 정보과학관 21508",
    check: true,
  },
  {
    date: "9/9 (토)",
    time: "13:30-16:15 정보과학관 21508",
    check: true,
  },
  {
    date: "9/16 (토)",
    time: "13:30-16:15 정보과학관 21508",
    check: false,
  },
  {
    date: "9/23 (토)",
    time: "13:30-16:15 정보과학관 21508",
    check: true,
  },
  {
    date: "9/30 (토)",
    time: "13:30-16:15 정보과학관 21508",
    check: true,
  },
  {
    date: "10/7 (토)",
    time: "13:30-16:15 정보과학관 21508",
    check: true,
  },
  {
    date: "10/14 (토)",
    time: "13:30-16:15 정보과학관 21508",
    check: true,
  },
  {
    date: "10/21 (토)",
    time: "13:30-16:15 정보과학관 21508",
    check: false,
  },
];

const Attendance = () => {
  return (
    <>
      <Title>출결 확인</Title>
      <Container>
        <StyledTable>
          <THead>
            <TRow>
              <TCell className={"head_cell"}>주차</TCell>
              <TCell className={"head_cell"}>수업일</TCell>
              <TCell className={"head_cell"}>출결 체크</TCell>
            </TRow>
          </THead>
          <TBody>
            {dummyData.map((data, index) => {
              return (
                <TRow key={index}>
                  <TCell className={"weekly"}>
                    <span>{index + 1}주차</span>
                  </TCell>
                  <TCell className={"info"}>
                    <div className={"date"}>{data.date}</div>
                    <div className={"place"}>{data.time}</div>
                  </TCell>
                  <TCell className={"check"} check={data.check}>
                    <div />
                  </TCell>
                </TRow>
              );
            })}
          </TBody>
        </StyledTable>
      </Container>
    </>
  );
};

export default Attendance;
