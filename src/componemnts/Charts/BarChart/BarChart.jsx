import Chart from 'react-apexcharts';
import { options, series } from "../../../data/BarChartData";

const BarChart = () => {
  return (
    <div className="p-8 bg-white shadow-lg flex justify-around items-end rounded-2xl flex flex-col">
      <div className="text-blue-950 font-bold">احصائيات المشتركين</div>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
}

export default BarChart;
