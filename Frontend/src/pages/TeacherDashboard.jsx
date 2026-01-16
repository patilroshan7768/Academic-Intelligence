import { useState } from "react";
import SearchBar from "../components/SearchBar";
import StudentCard from "../components/StudentCard";
import AttendanceChart from "../components/charts/AttendanceChart";
import PerformanceChart from "../components/charts/PerformanceChart";
import { dummyStudent } from "../services/dummyData";

export default function TeacherDashboard() {
  const [student, setStudent] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6 ">
      <h2 className="text-2xl font-bold mb-6">Teacher Dashboard</h2>
      
      <div className="flex items-center gap-4">
  <SearchBar />

  <button
    onClick={() => setStudent(dummyStudent)}
    className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 whitespace-nowrap"
  >
    Analyze Student
  </button>
</div>
      {student && (
        <>
          <StudentCard student={student} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <AttendanceChart student={student} />
            <PerformanceChart />
          </div>
        </>
      )}
    </div>
  );
}
