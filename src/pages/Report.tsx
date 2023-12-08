import React from "react";

import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";

import { Avg, Graph, GraphWrap, ScoreWrap, Title } from "../css/Report";

const dummyData = [
  {
    id: "score",
    color: "red",
    data: [
      {
        x: 0,
        y: 4.0,
      },
      {
        x: 1,
        y: 3.6,
      },
      {
        x: 2,
        y: 3.8,
      },
    ],
  },
];

const dummyData2 = [
  {
    level: "B+",
    score: 36,
    scoreColor: "#F28572",
  },
  {
    level: "P",
    score: 18,
    scoreColor: "#ECC55C",
  },
  {
    level: "B0",
    score: 18,
    scoreColor: "#A0C661",
  },
  {
    level: "A+",
    score: 14,
    scoreColor: "#82D1C2",
  },
  {
    level: "A-",
    score: 9,
    scoreColor: "#7A9EE0",
  },
];

const Report = () => {
  return (
    <>
      <Title>성적 종합</Title>
      <GraphWrap>
        <ScoreWrap>
          <Avg>
            <div className={"all"}>전체 평점</div>
            <div>
              <span className={"avg"}>3.62</span>
              <span className={"all_avg"}> / 4.5</span>
            </div>
          </Avg>
          <Avg>
            <div className={"all"}>전공 평점</div>
            <div>
              <span className={"avg"}>3.56</span>
              <span className={"all_avg"}> / 4.5</span>
            </div>
          </Avg>
          <Avg>
            <div className={"all"}>취득 학점</div>
            <div>
              <span className={"avg"}>51</span>
              <span className={"all_avg"}> / 150</span>
            </div>
          </Avg>
        </ScoreWrap>
        <Graph>
          <ResponsiveLine
            data={dummyData}
            legends={[]}
            enableGridX={false}
            pointSize={8}
            pointColor={"red"}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: 3,
              max: 4.5,
            }}
            axisLeft={{
              tickValues: "every 1",
            }}
          />
        </Graph>
        <Graph>
          <ResponsiveBar
            data={dummyData2}
            keys={["score"]}
            indexBy="level"
            layout={"horizontal"}
            colorBy="indexValue"
            enableGridY={false}
            enableLabel={true}
            label={(d) => `${d.value}%`}
          />
        </Graph>
      </GraphWrap>
    </>
  );
};

export default Report;
