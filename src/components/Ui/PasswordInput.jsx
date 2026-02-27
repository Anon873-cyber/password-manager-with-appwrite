import React, { useState, forwardRef } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = forwardRef(({ label, className = "", placeholder, ...props }, ref) => {

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  return (

    <div className="w-full">
      {label && (
        <label className="block mb-1 pl-1 text-sm font-medium">
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        <input
          ref={ref}
          type={showPassword ? "text" : "password"}
          className={`w-full px-3 py-2 pr-10 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
          placeholder={placeholder}
          {...props}
        />

        <button
          type="button"
          onClick={togglePassword}
          className="absolute right-3 text-gray-500 hover:text-gray-700"
      
        >
          {showPassword?<EyeOff size={18} />:<Eye size={18} />}

        </button>
      </div>
    </div>
  );
});



export default PasswordInput;