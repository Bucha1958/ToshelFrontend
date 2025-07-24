import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ListCategory() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/categories`);
        const data = await response.json();
        setCategories(data?.categories || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();

    return () => {
      setCategories([]);
    };
  }, []);

  if (!categories || categories.length === 0) {
    return (
      <div className="bg-white p-4">
        <h1 className="text-2xl font-bold mb-4 text-[#131313]">Loading...</h1>
      </div>
    );
  }

  const handleDeleteCategory = async (id) => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/categories/${id}`, {
        method: "DELETE",
      });
      // Refresh list
      setCategories(categories.filter((cat) => cat._id !== id));
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <a href="/category" className="py-2 px-4 bg-[#131313] text-white rounded">
        New Category
      </a>
      <h2 className="text-2xl font-bold mb-4 text-[#131313] mt-3">Project Categories</h2>
      <table className="min-w-full text-[#888] bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-[#131313]">#</th>
            <th className="py-2 px-4 border-b text-[#131313]">Category Name</th>
            <th className="py-2 px-4 border-b text-[#131313]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category._id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">{category.name}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => {
                    setSelectedCategory(category);
                    navigate(`/category/${category._id}`);
                  }}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteCategory(category._id)}
                  className="ml-4 text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
