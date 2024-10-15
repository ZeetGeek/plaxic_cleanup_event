// style
import Link from "next/link";

import style from "./button.module.scss";

interface ButtonProps {
    type?: string;
    className?: string;
    children: React.ReactNode;
    title?: string;
    name?: string;
    onClick?: () => void;
    href?: string | undefined;
    size?: string;
    disabled?: boolean;
    variant?: string;
}

const Button = ({
    type,
    className,
    children,
    title,
    name,
    onClick,
    href,
    size,
    disabled = false,
    variant,
}: ButtonProps): JSX.Element => {
    const defaultClass: string = `d-row-center gap-2 text-capitalize ${style.btn} ${variant === "outline" ? style.btn_outline : ""} ${
        size === "md" ? style.btn_md : size === "lg" ? style.btn_lg : style.btn_sm
    } `;

    return (
        <>
            {type === "link" ? (
                <>
                    <Link href={`${href}`} title={title} className={`${className}  ${style.link_btn} ${defaultClass}`}>
                        {children}
                    </Link>
                </>
            ) : (
                <>
                    <button
                        onClick={onClick}
                        title={title}
                        type={type === "submit" ? "submit" : "button"}
                        name={name}
                        className={`${className}  ${style.normal_btn} ${defaultClass}`}
                        disabled={disabled}
                    >
                        {children}
                    </button>
                </>
            )}
        </>
    );
};

export default Button;
