import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { axiosPostRequestHandler } from "@lib/axios";
import { LoginRequestSchema } from "@schema/auth";

export const useAdminLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  const initialValue: LoginRequestSchema = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const handleLogin = async (payload:LoginRequestSchema) => {
    setIsLoading((cur) => !cur);
    const { data, message, success } = await axiosPostRequestHandler("/account/admin/login", payload);

    if (success) {
      toast.success(message);
      setIsLoading((cur) => !cur);
      localStorage.setItem("role", data.role);
      setTimeout(() => {
        navigate("/admin");
      }, 3000);
    } else {
      setIsLoading((cur) => !cur);
      toast.error(message);
    }
  };

  const handleShowPassword = () => setShowPassword((cur) => !cur);

  return {
    initialValue,
    showPassword,
    isLoading,

    handleLogin,
    handleShowPassword,
  };
};

export default useAdminLogin;
