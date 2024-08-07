import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { axiosPostRequestHandler } from "@lib/axios";
import { LoginRequestSchema } from "@schema/auth";

export const useAdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("Johndoe@gmail.com");
  const [password, setPassword] = useState(`********`);
  const [rememberMe, setRememberMe] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const initialValue: LoginRequestSchema = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const handleLogin = async () => {
    const response = await axiosPostRequestHandler("/account/admin/login", {
      email,
      password,
    });

    setResponseMessage(response?.message as string);

    if (response?.success) {
      toast.success(response?.message);
      localStorage.setItem("role", response.data.role);
      setTimeout(() => {
        navigate("/admin");
      }, 3000);
    } else {
      toast.error(response?.message);
    }
  };

  return {
    email,
    password,
    rememberMe,
    responseMessage,
    initialValue,

    setEmail,
    setPassword,
    setRememberMe,
    handleLogin,
  };
};

export default useAdminLogin;
