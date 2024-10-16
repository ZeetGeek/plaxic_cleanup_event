"use client";

// dependencies
import Image, { StaticImageData } from "next/image";

// images
import EyeOpen from "@/images/eye-open.svg";
import EyeClose from "@/images/eye-close.svg";
import DropdownIcon from "@/images/dropdown_dark.svg";
import UploadFileIcon from "@/images/upload-file.svg";

// styles
import style from "./form-input.module.scss";
import { ChangeEventHandler, useState } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import { UseFormRegister } from "react-hook-form";

interface FormInputProps {
  label: string;
  type: string;
  name?: string | undefined;
  value?: string;
  placeholder?: string;
  className?: string;
  id: string;
  error?: string;
  touched?: boolean;
  inputIcon?: StaticImageData;
 onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | ((event: any, picker: any) => void);
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  register?: UseFormRegister<any>;
}

interface FormSelectInput {
  children: React.ReactNode;
  label?: React.ReactNode | null;
  dropdownIcon?: StaticImageData;
  error?: string;
  touched?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  name?: string;
  register?: UseFormRegister<any>;
}

interface FormTextareaInputProps {
  label?: React.ReactNode | null;
  placeholder?: string;
  name?: string;
  className?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  error?: string;
  register?: UseFormRegister<any>;
}

interface FormUploadFileProps {
  label: string;
  name?: string;
  error?: string;
  register?: UseFormRegister<any>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput = ({
  label,
  type,
  name,
  value,
  placeholder,
  id,
  className,
  error,
  inputIcon,
  onChange,
  // onBlur,
  register,
}: FormInputProps): JSX.Element => {
  const [passwordToggle, setPasswordToggle] = useState<boolean>(false);

  return (
    <>
      <div className={`${style.form_input_box} ${className}`}>
        <label htmlFor={id}>{label}</label>
        <div className={style.form_input}>
          {type === "date" ? (
            <DateRangePicker
              onApply={onChange}
              initialSettings={{
                singleDatePicker: true,
                showDropdowns: true,
                timePicker: true,
                timePicker24Hour: true,
                locale: {
                  format: "MM/DD/YYYY",
                },
                maxDate: new Date(),
              }}
            >
              <input type="text" id={id} value={value} />
            </DateRangePicker>
          ) : (
            <input
              {...(register && name ? register(name) : {})}
              type={
                type === "password"
                  ? passwordToggle
                    ? "text"
                    : "password"
                  : type
              }
              placeholder={placeholder}
              id={id}
              name={name}
              value={value}
            />
          )}

          {type === "password" && (
            <>
              <div
                className={`${style.password_hide_show} d-row-end cursor-pointer`}
                onClick={(e) => {
                  e.preventDefault();
                  setPasswordToggle(!passwordToggle);
                }}
              >
                <Image
                  src={passwordToggle ? EyeOpen : EyeClose}
                  height={20}
                  width={20}
                  alt={passwordToggle ? "eye open" : "eye close"}
                />
              </div>
            </>
          )}
          {inputIcon && (
            <Image
              src={inputIcon}
              className={style.input_icon}
              height={16}
              width={15}
              alt={`${label} icon`}
            />
          )}
        </div>

        {error ? (
          <>
            <span className="text-danger text-medium mt-2 d-inline-block">
              {error}
            </span>
          </>
        ) : null}
      </div>
    </>
  );
};

export const FormSelectInput = ({
  children,
  label = null,
  dropdownIcon = DropdownIcon,
  error,
  name,
  register,
}: FormSelectInput) => (
  <>
    <div className={style.form_input_box}>
      {label !== null && <label>{label}</label>}
      <div className={`${style.form_select_wp} `}>
        <select
          className={style.form_select}
          {...(register && name ? register(name) : {})}
        >
          {children}
        </select>
        <Image
          src={dropdownIcon}
          className={style.dropdown_icon}
          height={20}
          width={20}
          alt="dropdown icon"
        />
      </div>
      {error ? (
        <>
          <span className="text-danger text-medium mt-2 d-inline-block">
            {error}
          </span>
        </>
      ) : null}
    </div>
  </>
);

export const FormTextareaInput = ({
  placeholder,
  value,
  name,
  label = null,
  className,
  // onChange,
  error,
  register,
}: FormTextareaInputProps) => (
  <div className={style.form_input_box}>
    {label !== null && <label>{label}</label>}
    <div className={style.form_input}>
      <textarea
        {...(register && name ? register(name) : {})}
        placeholder={placeholder}
        name={name}
        value={value}
        // onChange={onChange}
        className={className}
      ></textarea>
    </div>
    {error ? (
      <>
        <span className="text-danger text-medium mt-2 d-inline-block">
          {error}
        </span>
      </>
    ) : null}
  </div>
);

export const FormUploadFile = ({
  label,
  error,
  name,
  onChange,
}: FormUploadFileProps) => (
  <>
    <div className={style.form_input_box}>
      <label>{label}</label>
      <div className={style.upload_file_input}>
        <label htmlFor="upload-file">
          <Image
            src={UploadFileIcon}
            height={16}
            width={15}
            alt="Upload File Icon"
          />
        </label>
        <input
          type="file"
          id="upload-file"
          accept="image/jpg, image/png, image/jpeg"
          className="d-none"
          name={name}
          onChange={onChange}
        />
      </div>
      {error && (
        <span className="text-danger text-medium mt-2 d-inline-block">
          {error}
        </span>
      )}
    </div>
  </>
);
