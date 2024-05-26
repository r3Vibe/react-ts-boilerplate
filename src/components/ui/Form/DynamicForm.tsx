import { useFormik } from "formik";
import FormBuilder from "./FormBuilder";
import FormWrapper from "./FormWrapper";
import { IDynamicForm } from "../../../@types";

export default function DynamicForm({
  formData,
  initialValues,
  validationSchema,
  submitFn,
  title,
  width,
}: IDynamicForm) {
  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit: submitFn,
  });

  return (
    <FormWrapper handleSubmit={form.handleSubmit} title={title} width={width}>
      <FormBuilder
        formData={formData}
        errors={form.errors}
        values={form.values}
        handleBlur={form.handleBlur}
        handleChange={form.handleChange}
        setFieldValue={form.setFieldValue}
        touched={form.touched}
      />
    </FormWrapper>
  );
}
