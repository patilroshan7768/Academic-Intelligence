import { useState } from "react";
import SearchBar from "../components/SearchBar";
import StudentCard from "../components/StudentCard";
import AttendanceChart from "../components/charts/AttendanceChart";
import PerformanceChart from "../components/charts/PerformanceChart";

export default function TeacherDashboard() {
  const [studentId, setStudentId] = useState("");
  const [studentData, setStudentData] = useState(null);
  const [error, setError] = useState("");

  const analyzeStudent = async () => {
    if (!studentId) {
      setError("Please enter student ID");
      return;
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:5000/analyze/${studentId}`
      );

      if (!response.ok) {
        throw new Error("Student not found");
      }

      const data = await response.json();
      setStudentData(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setStudentData(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6">Teacher Dashboard</h2>

      {/* Search Bar */}
      <SearchBar value={studentId} onChange={setStudentId} />

      {/* Analyze Button */}
      <button
        onClick={analyzeStudent}
        className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      >
        Analyze Student
      </button>

      {/* Error */}
      {error && <p className="text-red-600 mt-4">{error}</p>}

      {/* Results */}
      {studentData && (
        <>
          <StudentCard student={studentData} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <AttendanceChart student={studentData} />
            <PerformanceChart />
          </div>
        </>
      )}
    </div>
  );
}
