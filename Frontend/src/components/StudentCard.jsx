export default function StudentCard({ student }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow mt-6">
      <h3 className="text-xl font-semibold mb-4">Student Analysis</h3>

      <div className="grid grid-cols-2 gap-4">
        <p><b>Student ID:</b> {student.student_id}</p>
        <p><b>Average Score:</b> {student.average_score}</p>

        <p><b>Performance Category:</b> {student.performance_category}</p>
        <p><b>Risk Status:</b> {student.risk_status}</p>

        <p><b>Overall Decision:</b> {student.overall_decision}</p>
        <p><b>Needs Support:</b> {student.needs_support}</p>
      </div>
    </div>
  );
}
