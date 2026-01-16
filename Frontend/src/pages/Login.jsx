import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <h1 className="text-3xl font-bold mb-8">Academic Intelligence System</h1>

      <div className="flex flex-col gap-6">
        <button
          onClick={() => navigate("/admin")}
          className="w-64 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-200"
        >
          Admin Login
        </button>

        <button
          onClick={() => navigate("/teacher")}
          className="w-64 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-200"
        >
          Teacher Login
        </button>
      </div>
    </div>
  );
}
