import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";
import Head from "../components/Head";

export default function EditProject() {
  const { id: projectId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [newImages, setNewImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [newVideo, setNewVideo] = useState(null);
  const [existingVideo, setExistingVideo] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [removedImages, setRemovedImages] = useState([]);
  const [removeExistingVideo, setRemoveExistingVideo] = useState(false);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/categories`);
        const data = await response.json();
        setCategories(data?.categories || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchProject = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/projects/${projectId}`);
        const data = await res.json();
        const proj = data.project;
        setTitle(proj.title || "");
        setDescription(proj.description || "");
        setCategory(proj.category?._id || "");
        setExistingImages(proj.images || []);
        if (proj.video) setExistingVideo(proj.video);
      } catch (err) {
        console.error("Failed to load project:", err);
      }
    };

    fetchCategories();
    if (projectId) fetchProject();
  }, [projectId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("removeImages", JSON.stringify(removedImages));
    formData.append("removeVideo", removeExistingVideo);


    // Append new images
    newImages.forEach((file) => formData.append("images", file));

    // If new video selected
    if (newVideo) formData.append("video", newVideo);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/projects/${projectId}`, {
        method: "PUT",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Project updated successfully!");
        navigate("/projects");
      } else {
        toast.error(data.message || "Failed to update project.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head />
      <div className="bg-white p-4 mt-20">
        <Toaster richColors />
        <div className="md:w-1/2 mx-auto w-full">
          <h1 className="text-2xl font-bold mb-4">Edit Project</h1>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Project Title"
              required
              className="border border-gray-300 p-2 rounded"
            />

            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Project Description"
                className="border border-gray-300 p-2 rounded"
                rows={4}
            />

            {/* Existing Images */}
            {existingImages.map((img, idx) => (
                <div key={idx} className="relative">
                    <img src={img} className="h-24 w-24 object-cover rounded" />
                    <button
                    type="button"
                    onClick={() => {
                        setRemovedImages((prev) => [...prev, img]);
                        setExistingImages(existingImages.filter((_, i) => i !== idx));
                    }}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6"
                    >
                    ×
                    </button>
                </div>
            ))}


            {/* Upload New Images */}
            <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => {
                    const files = Array.from(e.target.files);
                    if (files.length > 0) {
                    setNewImages(files);
                    setExistingImages([]); // Since backend deletes all old images
                    setRemovedImages([]);  // Clear any previously marked deletions
                    }
                }}
                className="border border-gray-300 p-2 rounded"
            />

            {newImages.length > 0 && (
                <p className="text-sm text-red-500">
                    Note: Uploading new images will replace all existing ones.
                </p>
            )}


            {/* New Image Previews */}
            <div className="flex flex-wrap gap-2">
              {newImages.map((img, idx) => (
                <div key={idx} className="relative">
                  <img
                    src={URL.createObjectURL(img)}
                    className="h-24 w-24 object-cover rounded"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setNewImages(newImages.filter((_, i) => i !== idx))
                    }
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            {/* Existing Video Preview */}
            {existingVideo && !newVideo && (
                <div className="relative mt-2">
                    <video controls src={existingVideo} className="w-full max-w-xs rounded" />
                    <button
                    type="button"
                    onClick={() => {
                        setRemoveExistingVideo(true);
                        setExistingVideo("");
                    }}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6"
                    >
                    ×
                    </button>
                </div>
            )}


            {/* Upload New Video */}
            <input
                type="file"
                accept="video/*"
                className="border border-gray-300 p-2 rounded"
                onChange={(e) => {
                    if (e.target.files?.[0]) {
                    setNewVideo(e.target.files[0]);
                    setExistingVideo("");
                    setRemoveExistingVideo(true);
                    }
                }}
            />

            {/* New Video Preview */}
            {newVideo && (
              <div className="relative mt-2">
                <video
                  controls
                  src={URL.createObjectURL(newVideo)}
                  className="w-full max-w-xs rounded"
                />
                <button
                  type="button"
                  onClick={() => setNewVideo(null)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6"
                >
                  ×
                </button>
              </div>
            )}

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 p-2 rounded"
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                disabled={loading}
              >
                {loading ? "Updating..." : "Update Project"}
              </button>

              <button
                type="button"
                onClick={() => navigate("/projects")}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
