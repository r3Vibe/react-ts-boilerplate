import { LazyExoticComponent, ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

export interface IScreenRoute {
  path: string;
  isPrivate: boolean;
  element: LazyExoticComponent<() => ReactNode> | null;
  allowRoles: string[];
  children?: {
    path: string;
    element: LazyExoticComponent<() => ReactNode> | null;
  }[];
  hasChild: boolean;
}

// Define the shape of the store state
export type User = {
  _id: string;
  name: string;
  email: string;
  profile_image: string;
  is_active: boolean;
  is_blocked: boolean;
  role: "user" | "admin";
  access_token: string;
  reresh_token: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
} | null;

export type Store = {
  isLoggedIn: boolean;
  user: User;
  setLogin: (isLoggedIn: boolean) => void;
  setUser: (user: User) => void;
};

export interface IDynamicForm {
  formData: { [key: string]: any }[];
  initialValues: { [key: string]: any };
  validationSchema: any;
  submitFn: (data: any) => Promise<any>;
  title: string;
  width: string;
}
