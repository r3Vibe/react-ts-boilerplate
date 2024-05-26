import instance from "../";
import { toast } from "react-toastify";

export const getProducts = async () => {
  const response = await instance.GET("products");
  throw Error("Something went wrong");
  return response.data;
};

export const LoginUser = async (data: { email: string; password: string }) => {
  try {
    const response = await instance.POST("/auth/login", data);
    return response.data;
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
};

export const testLoader = async (url: string) => {
  const data = await instance.GET(url);
  return data.data.products;
};

export const uploadFiles = async (formData: FormData) => {
  try {
    const response = await instance.POST("/uploads/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
};

export const updateProfile = async (data: any) => {
  try {
    const response = await instance.PATCH("/profile/update-profile-info", data);
    return response.data;
  } catch (e: any) {
    toast.error(e.response.data.message);
  }
};
