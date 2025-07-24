import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LightboxGallery from "../components/LightboxGallery";
import Head from "../components/Head";
import DeleteProductModal from "../components/modals/DeleteProductModal";
import { UserContext } from "../UserContext";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userInfo } = useContext(UserContext);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (!id) return;

    fetch(`${API_BASE_URL}/api/projects/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProject(data.project);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch project details:", err);
        setLoading(false);
      });
  }, [id]);

  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this project?");
    if (!confirmed) return;

    try {
      const res = await fetch(`${API_BASE_URL}/api/projects/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Project deleted successfully.");
        navigate("/projects");
      } else {
        alert("Failed to delete project.");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("An error occurred while deleting the project.");
    }
  };

  if (loading) return <div className="p-10">Loading project...</div>;
  if (!project) return <div className="p-10">Project not found.</div>;

  return (
    <>
      <Head />
      <div className="px-4 py-10 max-w-6xl mx-auto space-y-10 mt-20">

        {/* Main Image */}
        {project.mainImage && (
          <img
            src={project.mainImage}
            alt={project.title}
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        )}

        {/* Title, Buttons, Category, Description */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-blue-900">
                {project.title}
              </h1>
              {project.category?.name && (
                <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">
                  {project.category.name}
                </p>
              )}
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => navigate(`/edit-project/${project._id}`)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div> */}

            {/* Only show if user is admin */}
           {userInfo && userInfo.is_admin && (
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => navigate(`/edit-project/${project._id}`)}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            )}
          </div>

          <p className="text-gray-700 leading-relaxed">{project.description}</p>
        </div>

        {/* Gallery */}
        {project.images?.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
            <LightboxGallery gallery={project.images} />
          </div>
        )}
      </div>
    </>
  );
}
