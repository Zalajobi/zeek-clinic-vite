import axios, {AxiosRequestHeaders} from "axios";
import {BASE_URL} from "@utils/config";
import toast from "react-hot-toast";
import {APIResponsePayload} from "@type/payloads.types";

const userInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
  // withCredentials: true,
});

userInstance.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    } as AxiosRequestHeaders;
  }
  return config;
});

userInstance.interceptors.response.use(
  (response) => {
    const accessToken = response.headers["x-access-token"];
    if (
      accessToken &&
      typeof accessToken === "string" &&
      accessToken.trim() !== ""
    ) {
      localStorage.setItem("accessToken", accessToken);
    }
    return response;
  },
  async (error) => {
    if (axios.isAxiosError(error)) {
      toast.error(
        error?.response?.data?.message || "An unexpected error occurred",
      );
      if (error.response?.status === 403 || error.response?.status === 401) {
        localStorage.removeItem("accessToken");
        window.location.href = "/";
      }
    }
    return Promise.reject(error);
  },
);

export const axiosPostRequestHandler = async (url: string, data: any) => {
  try {
    const { data:responseData } = await userInstance.post(url, data);
    return responseData as APIResponsePayload;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

export const axiosPutRequestHandler = async (url: string, data: never) => {
  try {
    const { data:responseData } = await userInstance.put(url, data);
    return responseData as APIResponsePayload;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

export const axiosDeleteRequestHandler = async (url: string) => {
  try {
    const { data:responseData } = await userInstance.delete(url);
    return responseData as APIResponsePayload;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

export const axiosGetRequestHandler = async (url: string, params?: never) => {
  try {
    const { data:responseData } = await userInstance.get(url, {
      params,
    });
    return responseData as APIResponsePayload;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
