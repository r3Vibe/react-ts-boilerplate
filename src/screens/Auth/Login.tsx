import PageWrapper from "../../components/layout/PageWrapper";
import { loginSchema } from "../../validator";
import { useState } from "react";
import { useAuthStore } from "../../store/auth.store";
import { useNavigate } from "react-router-dom";
import DynamicForm from "../../components/ui/Form/DynamicForm";
import { LoginUser } from "../../http/api";

export default function Login() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const { setLogin, setUser } = useAuthStore((state) => state);

  const router = useNavigate();

  const formData = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter user email",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter user password",
      toggleFn: toggleVisibility,
      visible: isVisible,
    },
  ];

  const initialValues = {
    email: "",
    password: "",
  };

  const loginUser = async (data: any) => {
      const user = await LoginUser(data);
      const userData = {
        ...user.data.user,
        access_token: user.data.tokens.access.token,
        refresh_token: user.data.tokens.refresh.token,
      };
      setLogin(true);
      setUser(userData);
      router("/");
  };

  return (
    <PageWrapper title="Login" description="Admin Login Page">
      <DynamicForm
        formData={formData}
        initialValues={initialValues}
        submitFn={loginUser}
        title="Moji-Ai Admin Login"
        validationSchema={loginSchema}
        width="400px"
      />
    </PageWrapper>
  );
}
