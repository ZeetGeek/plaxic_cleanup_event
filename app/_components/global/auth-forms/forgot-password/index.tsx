"use client";

import { FormInput } from "@/components/global/ui/form-input";
import Button from "@/components/global/ui/button";
import { sendPasswordResetEmail } from "firebase/auth";
import { useFormik } from "formik";
import { useState } from "react";
import { auth, firebaseErrorCodes } from "@/firebase/firebase";
import { ResetPasswordEmailSchema } from "@/schema";
import { FirebaseError } from "firebase/app";

const initialValues = {
    email: "",
};

const ForgotPasswordForm = () => {
    const [submitError, setSubmitError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState("");

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: { ...initialValues },
        validationSchema: ResetPasswordEmailSchema,
        onSubmit: async (values, action) => {
            setIsLoading(true);
            try {
                await sendPasswordResetEmail(auth, values.email);
                setSubmitError("");
                setSuccess(`A password reset link has been sent to ${values.email}.`);
                // router.push("/admin");
                action.resetForm({ values: { ...initialValues } });
                action.setFieldValue("email", "");
                setIsLoading(false);
            } catch (error) {
                if (error instanceof FirebaseError) {
                    console.error("An error occured", error);
                    setSuccess("");
                    if (error.code in firebaseErrorCodes) {
                        setSubmitError(firebaseErrorCodes[error.code]);
                    } else {
                        setSubmitError(error.code);
                    }
                    setIsLoading(false);
                }
            }
        },
    });

    return (
        <>
            <form id="forgot_password_form" onSubmit={handleSubmit}>
                <div className="mb-md-4 mb-3">
                    <h1 className="h1_title mb-2">Forgot your password</h1>
                    <p>
                        Enter the email address associated with your account and will send you a link to forgot your
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
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email}
                    touched={touched.email}
                />

                <Button size="lg" type="submit" title="forgot password" name="forgot_password" className="auth_btn">
                    {isLoading ? <div className="btn_loader"></div> : "Reset Password"}
                </Button>

                {success && <span className="text-success text-medium mt-2 d-inline-block">{success}</span>}
                {submitError && <span className="text-danger text-medium mt-2 d-inline-block">{submitError}</span>}
            </form>
        </>
    );
};

export default ForgotPasswordForm;
