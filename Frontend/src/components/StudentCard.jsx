export default function StudentCard({ student }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow mt-6">
      <h3 className="text-xl font-semibold mb-4">Student Analysis</h3>

      <div className="grid grid-cols-2 gap-4">
        <p><b>Name:</b> {student.name}</p>
        <p><b>Category:</b> {student.category}</p>
        <p><b>Needs Support:</b> {student.support}</p>
        <p><b>Continuation:</b> {student.continuation}</p>
        <p><b>Attendance Impact:</b> {student.attendanceImpact}</p>
      </div>
    </div>
  );
}
