import PageWrapper from "../../components/layout/PageWrapper";
import { useAuthStore } from "../../store/auth.store";
import { passwordSchema, profileSchema } from "../../validator";
import { useState } from "react";
import DynamicForm from "../../components/ui/Form/DynamicForm";
import { updateProfile } from "../../http/api";
import { User } from "../../@types";

export default function Profile() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isVisibleNew, setIsVisibleNew] = useState<boolean>(false);
  const [isVisibleConfirm, setIsVisibleConfirm] = useState<boolean>(false);
  const { user, setUser } = useAuthStore((state) => state);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibilityNew = () => setIsVisibleNew(!isVisibleNew);
  const toggleVisibilityConfirm = () => setIsVisibleConfirm(!isVisibleConfirm);

  const formData = [
    {
      label: "",
      name: "profile_image",
      type: "file",
      placeholder: "",
    },
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Enter user name",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter user email",
    },
  ];

  const initialValuesData = {
    name: user?.name ?? "",
    email: user?.email ?? "",
    profile_image: user?.profile_image ?? "",
  };

  const passwordFormData = [
    {
      label: "Old Password",
      name: "old_password",
      type: "password",
      placeholder: "Enter old password",
      toggleFn: toggleVisibility,
      visible: isVisible,
    },
    {
      label: "New Password",
      name: "new_password",
      type: "password",
      placeholder: "Enter new password",
      toggleFn: toggleVisibilityNew,
      visible: isVisibleNew,
    },
    {
      label: "Confirm Password",
      name: "confirm",
      type: "password",
      placeholder: "Confirm new password",
      toggleFn: toggleVisibilityConfirm,
      visible: isVisibleConfirm,
    },
  ];

  const initialValuesPassword = {
    old_password: "",
    new_password: "",
    confirm: "",
  };

  const handleUserData = async (data: typeof initialValuesData) => {
    const res = await updateProfile(data);
    const updateData = {
      ...user,
      name: res.data.updatedUser.name,
      email: res.data.updatedUser.email,
      profile_image: res.data.updatedUser.profile_image,
    } as User;
    setUser(updateData);
  };

  return (
    <PageWrapper title="Profile" description="User Profile Page">
      <div className="flex gap-3">
        <DynamicForm
          formData={formData}
          initialValues={initialValuesData}
          submitFn={handleUserData}
          title="Update Profile"
          validationSchema={profileSchema}
          width="400px"
        />
        <DynamicForm
          formData={passwordFormData}
          initialValues={initialValuesPassword}
          submitFn={handleUserData}
          title="Update Password"
          validationSchema={passwordSchema}
          width="400px"
        />
      </div>
    </PageWrapper>
  );
}
