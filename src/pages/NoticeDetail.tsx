import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { BaseResponse } from "../client/BaseResponse.model";
import { API_BASE_URL } from "../client/config";
import { Notice } from "../client/Notice.model";
import { NoticeWrap } from "../css/Notice";

const NoticeDetail = () => {
  const { noticeId } = useParams();

  const [data, setData] = useState<Notice>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<BaseResponse<Notice>>(
          `${API_BASE_URL}/lms/subjects/notices/notice/${noticeId}`,
        );
        const result = response.data;
        const sql = result.sql;
        setData(result.data);
      } catch (error) {
        console.error(
          "[Notice.tsx] 서버로부터 데이터를 가져오는데 실패했습니다.",
          error,
        );
      }
    };

    fetchData();
  }, []);
  return (
    <NoticeWrap>
      <div className={"container"}>
        <div className={"title"}>
          <span>{data?.title}</span>
          <span className={"date"}>{data?.createdAt}</span>
        </div>
        <div className={"content"}>{data?.description}</div>
      </div>
    </NoticeWrap>
  );
};

export default NoticeDetail;
