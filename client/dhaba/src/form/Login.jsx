import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import Separator from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";



export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 space-y-6">
        
        <h2 className="text-2xl font-semibold text-center">Login</h2>

        
        <Button
          variant="outline"
          className="w-full flex items-center gap-2"
        >
          <FcGoogle size={22} />
          Login with Google
        </Button>

        <div className="flex items-center gap-2">
          <Separator className="flex-1" />
          <span className="text-sm text-gray-500">OR</span>
          <Separator className="flex-1" />
        </div>

        
        <div className="space-y-2">
          <Label>Email</Label>
          <Input type="email" placeholder="Enter your email" />
        </div>

        
        <div className="space-y-2">
          <Label>Password</Label>
          <Input type="password" placeholder="Enter your password" />
        </div>

    
        <Button className="w-full">Login</Button>

        
        <p className="text-center text-sm">
          Don't have an account?
          <a href="/register" className="text-blue-600 font-medium ml-1">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}
