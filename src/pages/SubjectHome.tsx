import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import { BaseResponses } from "../client/BaseResponses.model";
import { API_BASE_URL, USER_ID } from "../client/config";
import { GetAllSubjects } from "../client/GetAllSubjects.model";
import { Notice } from "../client/Notice.model";
import {
  Attendance,
  ButtonWrap,
  NoticeWrap,
  Score,
  Title,
  WeeklyStudy,
} from "../css/SubjectHome";

const SubjectHome = () => {
  const navigator = useNavigate();
  const { subjectId } = useParams();

  const [data, setData] = useState<Notice[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<BaseResponses<Notice>>(
          `${API_BASE_URL}/lms/subjects/notices/${subjectId}`,
        );
        const result = response.data;
        const sql = result.sql;
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
      <ButtonWrap>
        <div
          onClick={() => {
            navigator("/study/" + subjectId);
          }}
        >
          <WeeklyStudy />
          <span>주차 학습</span>
        </div>
        <div
          onClick={() => {
            navigator("/attendance");
          }}
        >
          <Attendance />
          <span>출결 확인</span>
        </div>
        <div
          onClick={() => {
            navigator("/report");
          }}
        >
          <Score />
          <span>성적</span>
        </div>
      </ButtonWrap>
      <Title>최근 공지사항</Title>
      <NoticeWrap>
        {data.map((data, index) => {
          return (
            <div key={index} className={"notice"}>
              <div className={"container"}>
                <span className={"name"}>{data.title}</span>
                <span>{data.description}</span>
                <div className={"notice_footer"}>
                  <span
                    className={"link"}
                    onClick={() => {
                      navigator("/notice/" + data.id);
                    }}
                  >
                    바로가기
                  </span>
                  <span className={"date"}>{data.createdAt}</span>
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
