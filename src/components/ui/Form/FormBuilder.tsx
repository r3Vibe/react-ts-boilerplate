/* eslint-disable react-hooks/exhaustive-deps */
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, Radio, RadioGroup } from "@nextui-org/react";
import { Fragment } from "react/jsx-runtime";
import ImageField from "./ImageField";

interface IProps {
  formData: any[];
  values: any;
  errors: any;
  touched: any;
  handleChange: any;
  handleBlur: any;
  setFieldValue?: any;
}

export default function FormBuilder({
  formData,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  setFieldValue,
}: IProps) {
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      {formData?.map((data) => {
        if (["text", "email"].includes(data?.type))
          return (
            <Fragment key={data?.name}>
              <Input
                key={data?.name}
                type={data?.type}
                label={data?.label}
                name={data?.name}
                variant="bordered"
                placeholder={data?.placeholder}
                defaultValue={values[data?.name as keyof typeof values]}
                isInvalid={
                  !!errors[data?.name as keyof typeof values] &&
                  touched[data?.name as keyof typeof values]
                }
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={errors[data?.name as keyof typeof values]}
                className="w-[270px]"
              />
            </Fragment>
          );
        if (["password", "confirm"].includes(data?.type))
          return (
            <Fragment key={data?.name}>
              <Input
                key={data?.name}
                type={data?.visible ? "text" : "password"}
                label={data?.label}
                name={data?.name}
                variant="bordered"
                placeholder={data?.placeholder}
                defaultValue={values[data?.name as keyof typeof values]}
                isInvalid={
                  !!errors[data?.name as keyof typeof values] &&
                  touched[data?.name as keyof typeof values]
                }
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={errors[data?.name as keyof typeof values]}
                className="w-[270px]"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={data.toggleFn}
                  >
                    {data.visible ? (
                      <FontAwesomeIcon icon={faEyeSlash} />
                    ) : (
                      <FontAwesomeIcon icon={faEye} />
                    )}
                  </button>
                }
              />
            </Fragment>
          );
        if (data?.type === "radio")
          return (
            <div className="flex flex-col mx-2" key={data?.name}>
              <RadioGroup
                key={data?.name}
                orientation="horizontal"
                value={values[data?.name as keyof typeof values]}
                onValueChange={(value) => setFieldValue(data?.name, value)}
                isInvalid={
                  !!errors[data?.name as keyof typeof values] &&
                  touched[data?.name as keyof typeof values]
                }
              >
                {data.values.map((r: string) => {
                  return (
                    <Radio key={r} value={r} className="capitalize">
                      {r}
                    </Radio>
                  );
                })}
              </RadioGroup>
              {errors[data?.name as keyof typeof values] &&
              touched[data?.name as keyof typeof values] ? (
                <span className="text-danger text-sm">
                  {errors[data?.name as keyof typeof values]}
                </span>
              ) : null}
            </div>
          );
        if (data?.type === "file")
          return (
            <ImageField
              key={data?.name}
              profile={values[data?.name as keyof typeof values]}
              setProfile={setFieldValue}
              name={data?.name}
            />
          );
      })}
    </div>
  );
}
