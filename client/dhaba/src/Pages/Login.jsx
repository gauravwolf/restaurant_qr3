import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";

import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-10">
      <div className="max-w-3xl w-full bg-[#0f1216] border border-gray-800 rounded-2xl p-10 shadow-xl">
        
        <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
        <p className="text-gray-400 mb-8">Login to continue managing your account</p>

        <form className="space-y-6">

          <div>
            <label className="text-sm">Email Address</label>
            <div className="flex items-center bg-black border border-gray-700 rounded-lg px-3 py-3 mt-1">
              <FiMail className="text-gray-400 mr-3" />
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-sm">Password</label>
            <div className="flex items-center bg-black border border-gray-700 rounded-lg px-3 py-3 mt-1">
              <FiLock className="text-gray-400 mr-3" />
              <input
                type="password"
                placeholder="********"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <p>Remember me</p>
            </div>
            <Link className="text-blue-400 underline cursor-pointer">
              Forgot Password?
            </Link>
          </div>

          <button className="w-full bg-white text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition">
            Login <FiArrowRight />
          </button>
        </form>

        <p className="text-center mt-6 text-gray-400">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-400 underline cursor-pointer">Create Account →</Link>
        </p>
      </div>
    </div>
  );
}
