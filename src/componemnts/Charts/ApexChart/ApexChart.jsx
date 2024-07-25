import { chartOptions , chartSeries } from '../../../data/ApexChartData'
import Chart from 'react-apexcharts';

const ApexChart = () => {

  return (
 
    <div className="h-72 p-2 bg-white shadow-lg flex justify-around items-end rounded-2xl  flex flex-col text-end">
              <div className="text-blue-950 font-bold p-4"> الدروس</div>
      <Chart options={chartOptions} series={chartSeries} type="pie" height={250} width={350} />
    </div>
  )
}

export default ApexChart
