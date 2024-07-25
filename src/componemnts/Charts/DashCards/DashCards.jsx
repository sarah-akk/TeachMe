/* eslint-disable react/prop-types */
import { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import { Expandedata } from "../../../data/CardsData";

// Parent Card
const DashCards = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  const cardStyle = {
    background: param.color.background,
    boxShadow: param.color.boxShadow,
    width: param.width || '21rem' 
  };

  return (
    <motion.div
      className="flex h-20 w-20 rounded-md text-[#0A2472] relative cursor-pointer p-4"
      style={cardStyle}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="flex-1 flex flex-col justify-center">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
          className="w-14 overflow-visible"
          styles={{
            path: {
              stroke: '#0A2472',
              strokeWidth: '12px',
              filter: 'drop-shadow(2px 4px 6px white)'
            },
            trail: {
              display: 'none'
            },
            text: {
              fill: '#0A2472'
            }
          }}
        />
        <span className="text-lg font-bold">{param.title}</span>
      </div>
      <div className="flex-1 flex flex-col justify-between items-end">
        <Png />
        <span className="text-2xl font-bold">${param.value}</span>
        <span className="text-xs">Last 24 hours</span>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {
  const cardStyle = {
    background: param.color.background,
    boxShadow: param.color.boxShadow,
    width: param.expandedWidth || '60%'
  };

  return (
    <motion.div
      className="absolute h-[70vh] z-10 left-[13rem] flex rounded-lg flex-col items-center justify-between p-4"
      style={cardStyle}
      layoutId="expandableCard"
    >
      <div
        className="self-end cursor-pointer text-white"
        onClick={setExpanded}
      >
        <UilTimes />
      </div>
      <span className="text-[#0A2472] text-2xl font-bold text-shadow-[0px 0px 15px white]">
        {param.title}
      </span>
      <div className="w-1/2">
        <Chart options={Expandedata.options} series={param.series} type="area" />
      </div>
      <span className="text-[#0A2472] text-base">
        Last 24 hours
      </span>
    </motion.div>
  );
}

export default DashCards;
