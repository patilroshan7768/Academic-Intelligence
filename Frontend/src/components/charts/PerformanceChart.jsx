import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PerformanceChart() {
  const data = {
    labels: ["Topper", "Average", "Weak"],
    datasets: [
      {
        data: [5, 10, 3],
        backgroundColor: ["#22c55e", "#facc15", "#ef4444"]
      }
    ]
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-center font-semibold mb-2">Performance Distribution</h3>
      <Doughnut data={data} />
    </div>
  );
}
