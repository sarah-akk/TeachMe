import Chart from "react-apexcharts";
import { data } from "../../../data/LineChartData";

const LineChart = () => {
  return (
    <div className="p-3 rounded-xl  bg-white shadow-lg">
      <div className="text-blue-950 font-bold">ربح المنصة</div>
      <Chart options={data.options} series={data.series} type="area" width={500} />
    </div>
  );
};

export default LineChart;
