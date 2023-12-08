import React from "react";

import { NoticeWrap, Title } from "../css/SubjectHome";

const dummyData = [
  {
    name: "공지명1",
    content:
      "공지요약1공지요약1 공지요약1 공지요약1 공지요약1공지요약1공지요약1 공지요약1 공지요약1 공지요약1",
    date: "2023.12.02 14:42",
  },
  {
    name: "공지명2",
    content:
      "공지요약2공지요약2 공지요약2 공지요약2 공지요약2공지요약2공지요약2 공지요약2 공지요약2 공지요약2",
    date: "2023.12.02 14:42",
  },
  {
    name: "공지명3",
    content:
      "공지요약3공지요약3 공지요약3 공지요약3 공지요약3공지요약3공지요약3 공지요약3 공지요약3 공지요약3",
    date: "2023.12.02 14:42",
  },
];

const SubjectHome = () => {
  return (
    <>
      <Title>최근 공지사항</Title>
      <NoticeWrap>
        {dummyData.map((data, index) => {
          return (
            <div key={index} className={"notice"}>
              <div className={"container"}>
                <span className={"name"}>{data.name}</span>
                <span>{data.content}</span>
                <div className={"notice_footer"}>
                  <span className={"link"}>바로가기</span>
                  <span className={"date"}>{data.date}</span>
                </div>
              </div>
            </div>
          );
        })}
      </NoticeWrap>
    </>
  );
};

export default SubjectHome;
