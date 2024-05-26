import { object, string, ref } from "yup";

export const userSchema = object({
  email: string().email("Invalid email").required("Email is required"),
  name: string().required("Name is required"),
  password: string().required("Password is required"),
  confirm: string()
    .oneOf([ref("password"), ""], "Passwords must match")
    .required("Confirm Password is required"),
  role: string().required("Role is required"),
});

export const loginSchema = object({
  email: string().email("Invalid email").required("Email is required"),
  password: string().required("Password is required"),
});

export const profileSchema = object({
  name: string().required("Name is required"),
  email: string().email("Invalid email").required("Email is required"),
  profile_image: string(),
});

export const passwordSchema = object({
  old_password: string().required("Old Password is required"),
  new_password: string().required("New Password is required"),
  confirm: string()
    .oneOf([ref("new_password"), ""], "Passwords must match")
    .required("Confirm Password is required"),
});
