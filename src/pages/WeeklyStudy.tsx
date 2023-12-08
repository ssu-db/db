import React from "react";

import { Attendance, Title, WeeklyStudyWrap } from "../css/WeeklyStudy";

const dummyData = [
  {
    name: "데이터베이스 소개",
    check: true,
  },
  {
    name: "데이터베이스 환경설정",
    check: true,
  },
  {
    name: "데이터베이스 명령어",
    check: true,
  },
  {
    name: "데이터베이스 연동",
    check: true,
  },
  {
    name: "데이터베이스 설계",
    check: false,
  },
  {
    name: "데이터베이스 활용",
    check: false,
  },
];

const WeeklyStudy = () => {
  return (
    <>
      <Title>주차 학습</Title>
      <WeeklyStudyWrap>
        {dummyData.map((data, index) => {
          return (
            <div key={index} className={"container"}>
              <div className={"title"}>
                <span>{index}주차</span>
              </div>
              <div className={"content"}>
                <div className={"subject_content"}>{data.name}</div>
                <Attendance attendance={data.check}>
                  <span>{data.check ? "출결 완료" : "미출결"}</span>
                </Attendance>
              </div>
            </div>
          );
        })}
      </WeeklyStudyWrap>
    </>
  );
};

export default WeeklyStudy;
