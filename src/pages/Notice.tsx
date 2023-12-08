import React from "react";

import { NoticeWrap } from "../css/Notice";

const dummyData = {
  name: "공지명1",
  content:
    "공지요약1공지요약1 공지요약1 공지요약1 공지요약1공지요약1공지요약1 공지요약1 공지요약1 공지요약1",
  date: "2023.12.02 14:42",
};

const Notice = () => {
  return (
    <NoticeWrap>
      <div className={"container"}>
        <div className={"title"}>
          <span>{dummyData.name}</span>
          <span className={"date"}>{dummyData.date}</span>
        </div>
        <div className={"content"}>{dummyData.content}</div>
      </div>
    </NoticeWrap>
  );
};

export default Notice;
