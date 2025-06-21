import React, { useState, useEffect } from 'react';
import okxeel1 from '../assets/13.jpg';
import okxeel2 from '../assets/15.jpg';
import ikpere from '../assets/4.jpg';
import chocolate from '../assets/asphalt1.jpg';
import image2 from '../assets/16.jpg';
import image3 from '../assets/33.jpg';
import toshelPlant from '../assets/toshelPlant.jpg';
import '../App.css';
import { Head } from '../components/Head';
import Categories from '../components/Categories';
import Hero from '../components/Hero';
//import { Shop } from '../components/Shop';
import BlogPosts from '../components/Blogposts';
import Footer from '../components/Footer';
import LocationMap from '../components/LocationMap';
import WhatsAppPopup from '../components/WhatsappPopUp';
import Products from '../components/Products';
import SidebarContact from '../components/SidebarContact';
import Services from '../components/Services';
import VisionSidebar from '../components/Vision';
import Team from '../components/Teams';
import ProjectGallery from '../components/ProjectGallery';


const HomePage = () => {
  const images = [toshelPlant, okxeel1, okxeel2, chocolate, ikpere, image2, image3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [initialState, setInitialState] = useState(true);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    setInitialState(true); // Set initial state when component mounts
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((nextImageIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 1000); // Match the duration of the CSS animation
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [nextImageIndex, images.length]);

  useEffect(() => {
    fetch("www.toshel.org/api/projects")
      .then((res) => res.json())
      .then((data) => {
        const formattedProjects = data.projects.map((proj) => ({
          _id: proj._id,
          image: proj.images[0],
          title: proj.title,
          description: proj.category?.name || "No category",
        }));
        setProjects(formattedProjects);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
        setLoading(false);
      });
  }, []);


  return (
    <div className='overflow-hidden App'>
      <div className="relative h-full overflow-hidden">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-image ${isTransitioning ? 'transition-active' : ''}`}
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        />
        <div
          className={`absolute inset-0 bg-cover bg-center transition-image transition-next ${isTransitioning ? 'transition-active' : ''}`}
          style={{ backgroundImage: `url(${images[nextImageIndex]})` }}
        />
        <Head />
        <Hero />
      </div>
      <Services />
      {loading ? (
        <div className="text-center py-10">Loading projects...</div>
      ) : (
        <ProjectGallery projects={projects} />
      )}
      <Team />
      <LocationMap />
      <WhatsAppPopup />
      <Footer toggleSidebar={toggleSidebar}/>
      <SidebarContact isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default HomePage;

