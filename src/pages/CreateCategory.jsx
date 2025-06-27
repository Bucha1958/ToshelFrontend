import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Head from "../components/Head";

export default function CreateCategory() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/categories`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });

      const data = await response.json();

      if (response.ok && data.category?._id) {
        // Redirect to the category detail page
        navigate(`/categories`);
      } else {
        console.error("Unexpected response:", data);
      }
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  return (
    <>
      <Head />
      <div className="p-4 max-w-md mx-auto bg-white shadow-md mt-8">
        <h2 className="text-xl font-bold mb-4">Create New Category</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Category Name"
            className="border px-4 py-2 mb-4 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
            Create
          </button>
        </form>
      </div>
    </>
  );
}
