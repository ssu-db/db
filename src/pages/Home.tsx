import React, { useState } from "react";
import { Outlet } from "react-router";

import Header from "../Component/Header";

const Home = () => {
  const [title, setTitle] = useState<string>("Home");
  return (
    <>
      <Header title={title} />
      <Outlet context={{ setTitle }} />
    </>
  );
};

export default Home;
