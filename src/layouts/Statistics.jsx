/* eslint-disable react/jsx-key */
import ApexChart from "../componemnts/Charts/ApexChart/ApexChart";
import DashCards from "../componemnts/Charts/DashCards/DashCards";
import LineChart from "../componemnts/Charts/LineChart/LineChart";
import BarChart from "../componemnts/Charts/BarChart/BarChart";
import { CardsData } from '../data/CardsData';

const Statistics = () => {
  return (
    <><h1 className="text-2xl font-bold mb-6 text-end mr-80">الاحصائيات |</h1>
    <div className="flex flex-col gap-4 items-end justify-start mr-80 mt-10">
      <div className="flex flex-row gap-16 items-start justify-start">
        <LineChart />
        <div className="p-5 rounded-xl  bg-white shadow-lg flex flex-col gap-4">
          <div className="text-blue-950 font-bold"> احصائيات المشتركين</div>
          {CardsData.map((card, id) => (
            <DashCards
              key={id}
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series} />
          ))}
        </div>
        <BarChart />
      </div>
      <div className="flex flex-row gap-16 items-start justify-start">
        <BarChart />
        <ApexChart />
        <LineChart />
      </div>
    </div></>
  );
};

export default Statistics;
