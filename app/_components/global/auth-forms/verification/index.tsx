// dependencies
import Link from "next/link";

// components
import Button from "@/components/global/ui/button";

// style
import style from "./verification.module.scss";

const VerificationForm = () => {
    return (
        <>
            <form id="verification_form">
                <div className="mb-md-4 mb-3">
                    <h1 className="h1_title mb-2">
                        Verify <br />
                        your email
                    </h1>
                    <p>Please enter the 4 digit code</p>
                </div>
                <div className={` ${style.opt_verification} d-row-start`}>
                    <input type="text" className={`${style.opt_box}`} />
                    <input type="text" className={`${style.opt_box}`} />
                    <input type="text" className={`${style.opt_box}`} />
                    <input type="text" className={`${style.opt_box}`} />
                </div>

                <Link href="/admin/forgot-password" title="resend code" className="resend_otp">
                    Resend Code
                </Link>

                <Button type="submit" title="login" name="login" className="w-100 auth_btn" size="lg">
                    Send
                </Button>
            </form>
        </>
    );
};

export default VerificationForm;
