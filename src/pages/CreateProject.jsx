import { useState, useEffect, useRef } from "react";
import { toast, Toaster } from "sonner";
import Head from "../components/Head";

export default function CreateProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  const ref = useRef(null);

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
    fetchCategories();
  }, []);

  const handleProjectCreation = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);

    images.forEach((image) => {
      formData.append("images", image);
    });

    if (video) {
      formData.append("video", video);
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/projects`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Project created successfully!");
        setTitle("");
        setDescription("");
        setImages([]);
        setVideo(null);
        setCategory("");
        setSuccess("Project created successfully");
        setError(null);
      } else {
        toast.error(data.message || "Failed to create project");
        setError(data.message || "An error occurred");
        setSuccess(null);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
      setError("Something went wrong");
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
            <h1 className="text-2xl font-bold mb-4 text-[#131313]">Create New Project</h1>
            <form
            className="flex flex-col gap-4"
            method="POST"
            encType="multipart/form-data"
            onSubmit={handleProjectCreation}
            >
            <input
                type="text"
                placeholder="Project Title"
                className="border border-gray-300 text-[#888] p-2 rounded placeholder:text-[#888]"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />

            <input
                type="text"
                placeholder="Project Description"
                className="border border-gray-300 text-[#888] p-2 rounded placeholder:text-[#888]"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <input
                type="file"
                accept="image/*"
                multiple
                className="border border-gray-300 text-[#888] p-2 rounded file:text-[#888]"
                onChange={(e) => {
                if (e.target.files) {
                    const selectedFiles = Array.from(e.target.files);
                    setImages((prevImages) => [...prevImages, ...selectedFiles]);
                }
                }}
            />

            <div className="flex flex-wrap gap-2">
                {images.map((img, idx) => (
                <div key={idx} className="relative">
                    <img
                    src={URL.createObjectURL(img)}
                    alt="preview"
                    className="h-24 w-24 object-cover rounded"
                    />
                    <button
                    type="button"
                    onClick={() => setImages(images.filter((_, i) => i !== idx))}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                    >
                    ×
                    </button>
                </div>
                ))}
            </div>

            <input
                type="file"
                accept="video/*"
                className="border border-gray-300 text-[#888] p-2 rounded file:text-[#888]"
                onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                    setVideo(e.target.files[0]);
                }
                }}
            />

            {video && (
                <div className="relative mt-2">
                <video
                    controls
                    src={URL.createObjectURL(video)}
                    className="w-full max-w-xs rounded"
                />
                <button
                    type="button"
                    onClick={() => setVideo(null)}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                >
                    ×
                </button>
                </div>
            )}

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border border-gray-300 p-2 rounded text-[#888]"
            >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                    {cat.name}
                </option>
                ))}
            </select>

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 ease-in-out"
                disabled={loading}
            >
                {loading ? "Creating..." : "Create Project"}
            </button>

            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            </form>
        </div>
        </div>
    </>
  );
}



