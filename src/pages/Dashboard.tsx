import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

import { BaseResponses } from "../client/BaseResponses.model";
import { API_BASE_URL, USER_ID } from "../client/config";
import { GetAllSubjects } from "../client/GetAllSubjects.model";
import { Subject } from "../client/Subject.model";
import { Background, Container, InfoWrap, StyledCard } from "../css/Dashboard";

const dummy = [
  {
    subject: "데이터베이스 (대면) (00000000)",
    semester: "2023-2학기",
  },
  {
    subject: "미디어아트 (대면) (11111111)",
    semester: "2023-2학기",
  },
  {
    subject: "자료구조 (대면) (22222222)",
    semester: "2023-2학기",
  },
  {
    subject: "핀테크 (대면) (33333333)",
    semester: "2023-2학기",
  },
];

const Dashboard = () => {
  const [data, setData] = useState<Subject[]>([]);

  useEffect(() => {
    // 데이터를 서버에서 가져옵니다.
    const fetchData = async () => {
      try {
        const response = await axios.get<BaseResponses<GetAllSubjects>>(
          `${API_BASE_URL}/lms/subjects/users/${USER_ID}`,
        );
        const result = response.data;
        const subjects = result.data.map((item) => {
          return item.subject;
        });
        const sql = result.sql;

        console.log(subjects);

        setData(subjects); // 서버에서 받은 데이터로 상태 업데이트
      } catch (error) {
        console.error(
          "[Dashboard.tsx] 서버로부터 데이터를 가져오는데 실패했습니다.",
          error,
        );
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      {data.map((item, index) => {
        return (
          <Card
            key={index}
            subjectId={item.id}
            subject={item.name}
            year={item.year}
            semester={item.semester}
          />
        );
      })}
    </Container>
  );
};

interface CardProps {
  subjectId: number;
  subject: string;
  year: number;
  semester: number;
}

const Card = ({ subjectId, subject, year, semester }: CardProps) => {
  const navigator = useNavigate();

  return (
    <StyledCard>
      <Background />
      <InfoWrap>
        <span className="subject">{subject}</span>
        <span className="semester">
          {year}-{semester}학기
        </span>
        <span
          className="notice"
          onClick={() => {
            navigator("/subject/" + subjectId);
          }}
        >
          {"> 공지사항 바로가기"}
        </span>
      </InfoWrap>
    </StyledCard>
  );
};

export default Dashboard;
