import React from 'react'
// import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')]">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl w-full max-w-md rounded-2xl p-8">

        ```
        <h2 className="text-3xl font-semibold text-white text-center mb-6">
          Create Account
        </h2>

        {/* Google Button */}
        <button className="w-full bg-white text-gray-700 py-2 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
            alt="Google Icon"
          />
          Sign up with Google
        </button>

        <div className="flex items-center my-5">
          <div className="flex-grow h-px bg-white/30" />
          <span className="text-white px-3">OR</span>
          <div className="flex-grow h-px bg-white/30" />
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-blue-300"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-blue-300"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-blue-300"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-blue-300"
          />

          <button className="w-full py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition font-medium">
            Register
          </button>
        </div>

        <p className="text-white text-center mt-5">
          Already have an account?{" "}
          <Link className="text-blue-300 hover:underline" to="/login">
            Login
          </Link>
        </p>
        ```
      </div>
    </div>

  )
}

export default Register
