// components
import AuthFormWrapper from "@/components/global/auth-form-wrapper";
import ForgotPasswordForm from "@/components/global/auth-forms/forgot-password";
// import VerificationForm from "@/components/global/auth-forms/verification";
// import ConfirmPasswordForm from "@/components/global/auth-forms/confirm-password";

const ForgotPassword: React.FC = (): JSX.Element => {
    return (
        <>
            <AuthFormWrapper title={null} className="forgot_password_form">
                <ForgotPasswordForm />
                {/* <VerificationForm /> */}
                {/* <ConfirmPasswordForm /> */}
            </AuthFormWrapper>
        </>
    );
};

export default ForgotPassword;
