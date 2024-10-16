"use client";

import { FormInput } from "@/components/global/ui/form-input";
import Button from "@/components/global/ui/button";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { auth, firebaseErrorCodes } from "@/firebase/firebase";
import { FirebaseError } from "firebase/app";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ResetPasswordEmailSchema } from "@/_assets/schema/forgot-Password/forgotPasswordSchema";


interface resetPasswordData{
    email : string
}
const ForgotPasswordForm = () => {
    const [submitError, setSubmitError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: { email: "" },
        resolver: yupResolver(ResetPasswordEmailSchema),
    });

    
    
    const onSubmit = async (data : resetPasswordData) => {
        console.log(data,"data");
        setIsLoading(true);
        try {
            await sendPasswordResetEmail(auth, data.email);
            setSubmitError("");
            setSuccess(`A password reset link has been sent to ${data.email}.`);
            reset();
        } catch (error) {
            if (error instanceof FirebaseError) {
                console.error("An error occurred", error);
                setSuccess("");
                setSubmitError(firebaseErrorCodes[error.code] || error.code);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form id="forgot_password_form" onSubmit={handleSubmit(onSubmit)} method="POST">
            <div className="mb-md-4 mb-3">
                <h1 className="h1_title mb-2">Forgot your password</h1>
                <p>
                    Enter the email address associated with your account and we will send you a link to reset your
                    password.
                </p>
            </div>

            <FormInput
                label="Email Address"
                type="email"
                name="email"
                placeholder="abcd@gmail.com"
                className="form_input_mb"
                id="forgot_password_email"
                register={register}
                error={errors.email?.message}
            />

            <Button size="lg" type="submit" title="forgot password" name="forgot_password" className="auth_btn">
                {isLoading ? <div className="btn_loader"></div> : "Reset Password"}
            </Button>

            {success && <span className="text-success text-medium mt-2 d-inline-block">{success}</span>}
            {submitError && <span className="text-danger text-medium mt-2 d-inline-block">{submitError}</span>}
        </form>
    );
};

export default ForgotPasswordForm;
