import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login validation
    if (email === "suktara447@gmail.com" && password === "123456") {
      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      toast.error("Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-loginBg">
      <Toaster position="top-right" />
      <Container>
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <Button
              type="submit"
              btnName="Login"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-all"
            />
          </form>

          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Login;
