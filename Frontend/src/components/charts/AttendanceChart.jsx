import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function AttendanceChart({ student }) {
  const data = {
    labels: ["Attendance", "Average Score"],
    datasets: [
      {
        data: [student.attendance, student.score],
        backgroundColor: ["#6366f1", "#22c55e"]
      }
    ]
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-center font-semibold mb-2">Attendance vs Performance</h3>
      <Bar data={data} />
    </div>
  );
}
