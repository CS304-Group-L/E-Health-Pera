import React from "react";
import Navbar from "../components/Navbar";

function Login() {
  return (
    <div className="h-screen ">
      <Navbar />
      <div className="flex items-center justify-center h-screen ">
        <div className="max-w-screen-md p-8 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold text-center mb-6 text-blue-900 ">Login</h1>

          <div className="text-center text-cyan-700 mb-6">E-Health Pera</div>

          <input
            type="text"
            placeholder="Username"
            className="w-full py-2 px-3 mb-6 border bg-blue-500 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full py-2 px-3 mb-6 border rounded"
            required
          />

          <div className="flex justify-between mb-6">
            <button className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded">
              Log In
            </button>
            <button className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
