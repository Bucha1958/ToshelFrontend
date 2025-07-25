import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Head from "../components/Head";


export default function AdminDashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${API_BASE_URL}/api/users/me`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const { data } = await response.json();
        setUser(data);
      } catch (error) {
        console.error(error);
        setError(
          "Attention: You are not authorized to view this page. Please log in as an admin."
        );
        setTimeout(() => {
          navigate("/admin/login");
        }, 1000);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        {loading ? (
          <p className="text-gray-700">Loading...</p>
        ) : (
          <p className="text-red-500">{error}</p>
        )}
      </div>
    );
  }

  return (
    <>
      <Head />
      <div className="min-h-screen p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Welcome back,</h1>

        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
          <Link to="/admin/category" className="text-[#888] bg-[#f8f8f8] py-3 px-5 rounded-lg">
              Create Category
          </Link>
          <Link to="/create-project" className="text-[#888] bg-[#f8f8f8] py-3 px-5 rounded-lg">
              Create Project
          </Link>
          
        </div>
      </div>
    </>
  );
}
