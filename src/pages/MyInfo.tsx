import React from "react";

import Footer from "../Component/Footer";
import { InfoWrap } from "../css/MyInfo";

const MyInfo = () => {
  return (
    <>
      <InfoWrap>
        <div className={"wrap"}>
          <div className={"row"}>
            <div className={"column"}>아이디:</div>
            <div className={"value"}>20221729</div>
          </div>
          <div className={"row"}>
            <div className={"column"}>이름:</div>
            <div className={"value"}>조세연</div>
          </div>
          <div className={"row"}>
            <div className={"column"}>이메일:</div>
            <div className={"value"}>yscat618@soongsil.ac.kr</div>
          </div>
        </div>
      </InfoWrap>
      <Footer />
    </>
  );
};

export default MyInfo;
