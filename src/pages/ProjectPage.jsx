import { useEffect, useState } from "react";
import ProjectContent from "../components/ProjectContent";
import ProjectFilter from "../components/ProjectFilter";
import Head from "../components/Head";
import Footer from "../components/Footer";
import SidebarContact from "../components/SidebarContact";

const filterOptions = ["All", "Industry", "Bridges", "Roads", "Building", "Equipment"];

export default function ProjectsPage() {
  const [allProjects, setAllProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/projects`);
        const data = await res.json();

        if (!Array.isArray(data.projects)) {
          console.error("Expected data.projects to be an array, got:", data.projects);
          return;
        }

        const formatted = data.projects.map((p) => ({
          _id: p._id,
          image: p.images?.[0] || "/images/default.jpg",
          title: p.title,
          description: p.category?.name || "General",
        }));

        setAllProjects(formatted);
        console.log("Fetched and formatted projects:", formatted);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter(
          (project) =>
            project.description.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <>
      <Head />
      <div className="px-4 py-8 max-w-7xl mx-auto mt-20">
        <h1 className="text-3xl font-bold text-center mb-6">All Projects</h1>
        <ProjectFilter
          filters={filterOptions}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <ProjectContent projects={filteredProjects} showAll />
      </div>
      <Footer toggleSidebar={toggleSidebar}/>
      <SidebarContact isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
