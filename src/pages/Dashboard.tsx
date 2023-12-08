import React, { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

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
  return (
    <Container>
      {dummy.map((data, index) => {
        return (
          <Card key={index} subject={data.subject} semester={data.semester} />
        );
      })}
    </Container>
  );
};

interface CardProps {
  subject: string;
  semester: string;
}
const Card = ({ subject, semester }: CardProps) => {
  const navigator = useNavigate();

  return (
    <StyledCard>
      <Background />
      <InfoWrap>
        <span className="subject">{subject}</span>
        <span className="semester">{semester}</span>
        <span
          className="notice"
          onClick={() => {
            navigator("/subject");
          }}
        >
          {"> 공지사항 바로가기"}
        </span>
      </InfoWrap>
    </StyledCard>
  );
};

export default Dashboard;
