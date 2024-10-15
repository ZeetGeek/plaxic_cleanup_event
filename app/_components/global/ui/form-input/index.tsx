"use client";

// dependencies
import Image from "next/image";

// images
import EyeOpen from "@/images/eye-open.svg";
import EyeClose from "@/images/eye-close.svg";
import DropdownIcon from "@/images/dropdown_dark.svg";
import UploadFileIcon from "@/images/upload-file.svg";

// styles
import style from "./form-input.module.scss";
import { ChangeEventHandler, useState } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";

interface FormInputProps {
    label: string;
    type: string;
    name?: string;
    value?: string;
    placeholder?: string;
    className?: string;
    id: string;
    error?: string;
    touched?: boolean;
    inputIcon?: any;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

interface FormSelectInput {
    children: React.ReactNode;
    label?: React.ReactNode | null;
    dropdownIcon?: any;
    error?: string;
    touched?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

interface FormTextareaInputProps {
    label?: React.ReactNode | null;
    placeholder?: string;
    name?: string;
    className?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
    error?: string;
}

interface FormUploadFileProps {
    label: string;
    name?: string;
    error?: string;
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
    onBlur,
}: FormInputProps): JSX.Element => {
    const [passwordToggle, setPasswordToggle] = useState<boolean>(false);

    return (
        <>
            <div className={`${style.form_input_box} ${className}`}>
                <label htmlFor={id}>{label}</label>
                <div className={style.form_input}>
                    {type === "date" ? (
                        <DateRangePicker>
                            <input type="text" id={id} value={value} onChange={onChange} onBlur={onBlur} />
                        </DateRangePicker>
                    ) : (
                        <input
                            type={type === "password" ? (passwordToggle ? "text" : "password") : type}
                            placeholder={placeholder}
                            id={id}
                            name={name}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
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
                        <span className="text-danger text-medium mt-2 d-inline-block">{error}</span>
                    </>
                ) : null}
            </div>
        </>
    );
};

export const FormSelectInput = ({ children, label = null, dropdownIcon = DropdownIcon, error }: FormSelectInput) => (
    <>
        <div className={style.form_input_box}>
            {label !== null && <label>{label}</label>}
            <div className={`${style.form_select_wp} `}>
                <select className={style.form_select}>{children}</select>
                <Image src={dropdownIcon} className={style.dropdown_icon} height={20} width={20} alt="dropdown icon" />
            </div>
            {error ? (
                <>
                    <span className="text-danger text-medium mt-2 d-inline-block">{error}</span>
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
    onChange,
    error,
}: FormTextareaInputProps) => (
    <div className={style.form_input_box}>
        {label !== null && <label>{label}</label>}
        <div className={style.form_input}>
            <textarea
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                className={className}
            ></textarea>
        </div>
        {error ? (
            <>
                <span className="text-danger text-medium mt-2 d-inline-block">{error}</span>
            </>
        ) : null}
    </div>
);

export const FormUploadFile = ({ label, error, name }: FormUploadFileProps) => (
    <>
        <div className={style.form_input_box}>
            <label>{label}</label>
            <div className={style.upload_file_input}>
                <label htmlFor="upload-file">
                    <Image src={UploadFileIcon} height={16} width={15} alt="Upload File Icon" />
                </label>
                <input type="file" id="upload-file" className="d-none" name={name} />
            </div>
            {error && <span className="text-danger text-medium mt-2 d-inline-block">{error}</span>}
        </div>
    </>
);
