export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold text-lg mb-2">Manage Students</h3>
          <p className="text-gray-600">Add, update or remove students</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold text-lg mb-2">Manage Teachers</h3>
          <p className="text-gray-600">Add, update or remove teachers</p>
        </div>
      </div>
    </div>
  );
}
