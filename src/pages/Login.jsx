
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faSpinner } from "@fortawesome/free-solid-svg-icons";
import Head from "../components/Head";

export default function AdminLoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    setServerError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      email: !formData.email ? "Email is required" : "",
      password: !formData.password ? "Password is required" : "",
    };

    setErrors(newErrors);

    if (newErrors.email || newErrors.password) return;

    setIsLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/users/login`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (!res.ok) {
        setServerError(data.message || "Login failed");
      } else {
        const accessToken = data?.data?.accessToken;
        localStorage.setItem("accesstoken", accessToken);
        //localStorage.setItem("user", JSON.stringify(data.data.account));
        navigate("/dashboard");
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
      setServerError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head />
      <div className="font-poppins flex items-center justify-center min-h-screen bg-gray-100 mt-[20px]">
        <div className="bg-white p-8 rounded-lg space-y-4 shadow-lg w-full h-[450px] max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            {serverError && <p className="text-red-500 text-sm mb-4 text-center">{serverError}</p>}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="mb-4 relative mt-12">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                name="password"
                type={passwordVisible ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <FontAwesomeIcon
                icon={passwordVisible ? faEyeSlash : faEye}
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute right-3 top-10 cursor-pointer text-gray-600 mt-2"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between mt-10">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-black text-white font-semibold text-sm py-4 px-12 focus:outline-none focus:shadow-outline hover:bg-gray-700"
              >
                {isLoading ? <FontAwesomeIcon icon={faSpinner} spin className="mr-2" /> : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
