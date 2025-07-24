import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Head from "../components/Head";

export default function CategoryDetail() {
  const { id } = useParams();

  const [category, setCategory] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/categories/${id}`);
        const data = await response.json();
        setCategory(data?.category);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };

    fetchCategory();

    // Optional cleanup logic if needed
    return () => {
      setCategory(null);
    };
  }, [id]);

  if (!category) {
    return (
      <div className="bg-white p-4">
        <h1 className="text-2xl font-bold mb-4 text-[#131313]">Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Head />
      <div className="bg-white p-4">
        <div className="shadow-md w-full md:w-1/2 lg:w-1/3 mx-auto">
          <h1 className="text-2xl font-bold mb-4 text-[#131313]">Category Detail</h1>
          <table>
            <tbody>
              <tr className="border-b border-[#888]">
                <td className="py-2 px-4 text-[#131313]">ID</td>
                <td className="py-2 px-4 text-[#2299fb]">{category._id}</td>
              </tr>
              <tr className="border-b border-[#888]">
                <td className="py-2 px-4 text-[#131313]">Category Name</td>
                <td className="py-2 px-4 text-[#2299fb]">{category.name}</td>
              </tr>
              <tr className="border-b border-[#888]">
                <td className="py-2 px-4 text-[#131313]">Description</td>
                <td className="py-2 px-4 text-[#2299fb]">{category.description}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
