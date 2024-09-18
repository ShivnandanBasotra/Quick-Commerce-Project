import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const OrderStatsChart = () => {
  const data = {
    labels: ['Cancelled', 'Returned', 'Completed', 'Pending', 'Delivering'],
    datasets: [
      {
        data: [10, 15, 50, 20, 5],
        backgroundColor: ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#9B59B6'],
        borderColor: ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#9B59B6'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: {
            size: 12
          }
        }
      }
    },
    cutout: '70%',
    radius: '70%'
  };

  return (
    <div className="bg-white rounded-lg shadow-md px-2">
      <h3 className="text-2xl font-semibold text-gray-700 text-center pt-6">Orders Statistics</h3>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default OrderStatsChart;