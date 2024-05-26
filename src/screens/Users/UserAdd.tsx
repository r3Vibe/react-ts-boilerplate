import { useFormik } from "formik";
import { useState } from "react";
import FormWrapper from "../../components/ui/Form/FormWrapper";
import FormBuilder from "../../components/ui/Form/FormBuilder";
import { userSchema } from "../../validator";
import PageWrapper from "../../components/layout/PageWrapper";
import ImageField from "../../components/ui/Form/ImageField";

export default function UserAdd() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isVisibleC, setIsVisibleC] = useState<boolean>(false);
  const [profile, setProfile] = useState<string | null>(null);
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm: "",
      role: "",
      gender: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      const data: any = { ...values };
      if (profile) {
        data["profile_image"] = profile;
      }

      console.log(data);
    },
  });

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibilityC = () => setIsVisibleC(!isVisibleC);

  const formData = [
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
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter user password",
      toggleFn: toggleVisibility,
      visible: isVisible,
    },
    {
      label: "Confirm Password",
      name: "confirm",
      type: "password",
      placeholder: "Confirm user password",
      toggleFn: toggleVisibilityC,
      visible: isVisibleC,
    },
    {
      label: "Role",
      name: "role",
      type: "radio",
      values: ["user", "admin"],
    },
  ];

  return (
    <PageWrapper title="Add Users" description="">
      <>
        <FormWrapper
          handleSubmit={handleSubmit}
          title="Add New User"
          width="650px"
        >
          <ImageField profile={profile} setProfile={setProfile} />
          <FormBuilder
            formData={formData}
            errors={errors}
            values={values}
            handleBlur={handleBlur}
            handleChange={handleChange}
            setFieldValue={setFieldValue}
            touched={touched}
          />
        </FormWrapper>
      </>
    </PageWrapper>
  );
}
