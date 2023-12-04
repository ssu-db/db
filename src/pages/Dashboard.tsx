import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

interface TitleProps {
  setTitle: (title: string) => void;
}

const Dashboard = () => {
  const { setTitle } = useOutletContext<TitleProps>();

  useEffect(() => {
    setTitle("대시보드");
  }, []);

  return <div>dashboard</div>;
};

export default Dashboard;
