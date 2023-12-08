import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { useNavigate } from "react-router-dom";

import Header from "../Component/Header";

export interface menuProps {
  menu: string;
  onClick: () => void;
}

const Home = () => {
  const navigator = useNavigate();
  const [menu, setMenu] = useState<menuProps[]>([]);
  const [title, setTitle] = useState<string>("대시보드");

  useEffect(() => {
    setMenu([
      {
        menu: "데이터베이스 (대면) (00000000)",
        onClick: () => {
          setTitle("데이터베이스 (대면) (00000000)");
          navigator("/subject");
        },
      },
      {
        menu: "대시보드",
        onClick: () => {
          setTitle("대시보드");
          navigator("/dashboard");
        },
      },
      {
        menu: "내 정보",
        onClick: () => {
          setTitle("내 정보");
          navigator("/myInfo");
        },
      },
      {
        menu: "성적 종합",
        onClick: () => {
          setTitle("성적 종합");
          navigator("/report");
        },
      },
    ]);
    navigator("/dashboard");
  }, []);

  return (
    <>
      <Header title={title} menu={menu} />
      <Outlet />
    </>
  );
};

export default Home;
