import { FiUser, FiPhone, FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";


export default function Register() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-10">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT SIDE FORM */}
        <div>
          <h1 className="text-3xl font-bold mb-2">SavoryBites</h1>
          <p className="text-gray-400 mb-8">RESTAURANT MANAGEMENT</p>

          <h2 className="text-3xl font-semibold mb-2">Create Account</h2>
          <p className="text-gray-400 mb-8">Join us and start earning rewards today</p>

          <form className="space-y-6">

            {/* NAME + EMAIL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <label className="text-sm">Full Name</label>
                <div className="flex items-center bg-[#0f1216] border border-gray-700 rounded-lg px-3 py-3 mt-1">
                  <FiUser className="text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm">Email Address</label>
                <div className="flex items-center bg-[#0f1216] border border-gray-700 rounded-lg px-3 py-3 mt-1">
                  <FiMail className="text-gray-400 mr-3" />
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
              </div>

            </div>

            {/* PHONE + PASSWORD */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div>
                <label className="text-sm">Phone Number</label>
                <div className="flex items-center bg-[#0f1216] border border-gray-700 rounded-lg px-3 py-3 mt-1">
                  <FiPhone className="text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="1234567890"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm">Password</label>
                <div className="flex items-center bg-[#0f1216] border border-gray-700 rounded-lg px-3 py-3 mt-1">
                  <FiLock className="text-gray-400 mr-3" />
                  <input
                    type="password"
                    placeholder="********"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Min. 6 characters</p>
              </div>

            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="text-sm">Confirm Password</label>
              <div className="flex items-center bg-[#0f1216] border border-gray-700 rounded-lg px-3 py-3 mt-1">
                <FiLock className="text-gray-400 mr-3" />
                <input
                  type="password"
                  placeholder="********"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            {/* TERMS & CONDITIONS */}
            <div className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" />
              <p>
                I agree to the <a className="text-blue-400 underline">Terms</a> and{" "}
                <Link className="text-blue-400 underline">Privacy Policy</Link>
              </p>
            </div>

            {/* BUTTON */}
            <button className="w-full bg-white text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition">
              <FiUser />
              Create Account
            </button>

          </form>

          {/* SIGN IN */}
          <p className="text-center mt-6 text-gray-400">
            Already have an account?{" "}
            <Link to="/" className="text-blue-400 underline cursor-pointer">Sign In →</Link>
          </p>
        </div>

        {/* RIGHT SIDE BENEFITS SECTION */}
        <div className="space-y-6">

          {/* NEW MEMBER BENEFITS */}
          <div className="bg-[#0f1216] border border-gray-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-1">New Member Benefits</h3>
            <p className="text-gray-300">🎁 20% Welcome Discount</p>
            <p className="text-gray-400 mt-2">Get 20% off on your first order</p>
          </div>

          {/* LOYALTY POINTS */}
          <div className="bg-[#0f1216] border border-gray-700 rounded-xl p-6 space-y-3">
            <h3 className="text-xl font-semibold mb-3">Loyalty Points Program</h3>

            <div className="flex justify-between text-gray-300">
              <p>Earn Points</p> <p>1 Point = ₹1</p>
            </div>

            <div className="flex justify-between text-gray-300">
              <p>Redeem Points</p> <p>100 Points = ₹10</p>
            </div>

            <div className="flex justify-between text-gray-300">
              <p>Bonus Points</p> <p>+50 Points</p>
            </div>
          </div>

          {/* MEMBERSHIP TIERS */}
          <div className="bg-[#0f1216] border border-gray-700 rounded-xl p-6 space-y-3">
            <h3 className="text-xl font-semibold">Membership Tiers</h3>

            <div className="flex justify-between text-gray-300">
              <p>Bronze Member</p> <p>0–500 Points</p>
            </div>

            <div className="flex justify-between text-gray-300">
              <p>Silver Member</p> <p>501–2000 Points</p>
            </div>

            <div className="flex justify-between text-gray-300">
              <p>Gold Member</p> <p>2000+ Points</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
