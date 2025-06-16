import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { UserContextProvider } from './UserContext';
import { CartContextProvider } from './CartContext';
import { ExchangeRateProvider } from './ExchangeRateContext';
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import FAQ from "./pages/FAQ";
import ProjectPage from "./pages/ProjectPage";
import AdminDashBoard from "./pages/AdminDashBoard";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AboutUs from "./pages/AboutUs";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import CreateProject from "./pages/CreateProject";
import CategoryDetail from "./pages/CategoryDetail";
import CreateCategory from "./pages/CreateCategory";
import ListCategory from "./pages/ListCategory";

const App = () => {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <ExchangeRateProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<Register />} />
              <Route path="/admin/login" element={<Login />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/frequently_asked_questions" element={<FAQ />} />
              <Route path="/dashboard" element={<AdminDashBoard />} />
              <Route path="/projects" element={<ProjectPage />} />
              <Route path="/projects/:id" element={<ProjectDetailsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/create-project" element={<CreateProject/>} />
              <Route path="/category/:id" element={<CategoryDetail />} />
              <Route path="/admin/category" element={<CreateCategory />} />
              <Route path="/categories" element={<ListCategory />} />

            </Routes>
          </Router>
        </ExchangeRateProvider>
      </CartContextProvider>
    </UserContextProvider>
  );
};

export default App;
