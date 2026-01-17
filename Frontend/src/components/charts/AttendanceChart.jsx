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
    labels: ["Math", "Reading", "Writing", "Average"],
    datasets: [
      {
        label: "Scores",
        data: [
          student.math_score,
          student.reading_score,
          student.writing_score,
          student.average_score
        ],
        backgroundColor: "#6366f1"
      }
    ]
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-center font-semibold mb-2">Academic Performance</h3>
      <Bar data={data} />
    </div>
  );
}
