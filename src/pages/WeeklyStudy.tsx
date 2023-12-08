import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import { BaseResponses } from "../client/BaseResponses.model";
import { API_BASE_URL, USER_ID } from "../client/config";
import { GetAllAttendance } from "../client/GetAllAttendance.model";
import { Week } from "../client/Week.model";
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
  const navigator = useNavigate();
  const { subjectId } = useParams();

  const [data, setData] = useState<GetAllAttendance[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<BaseResponses<GetAllAttendance>>(
          `${API_BASE_URL}/lms/subjects/attendances/subjects/${subjectId}/users/${USER_ID}`,
        );
        const result = response.data;
        const sql = result.sql;
        console.log(result.data);
        setData(result.data);
      } catch (error) {
        console.error(
          "[SubjectHome.tsx] 서버로부터 데이터를 가져오는데 실패했습니다.",
          error,
        );
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Title>주차 학습</Title>
      <WeeklyStudyWrap>
        {data.map((item, index) => {
          return (
            <div key={index} className={"container"}>
              <div className={"title"}>
                <span>{item.attendance.week.sequence}주차</span>
              </div>
              <div className={"content"}>
                <div className={"subject_content"}>
                  {item.attendance.week.title}
                </div>
                <Attendance attendance={true}>
                  <span>{"출결 완료"}</span>
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
