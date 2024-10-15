"use client";

// dependencies
import Link from "next/link";
import { useFormik } from "formik";

// components
import { FormInput } from "@/components/global/ui/form-input";
import Button from "@/components/global/ui/button";
import { AdminLoginSchema } from "@/schema";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, firebaseErrorCodes } from "@/firebase/firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/auth/AuthContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { FirebaseError } from "firebase/app";

const initialValues = {
    email: "",
    password: "",
};

const LoginForm = () => {
    const [submitError, setSubmitError] = useState("");
    const [loginLoading, setIsLoginLoading] = useState<boolean>(false);
    const router = useRouter();
    const { authUser, isLoading } = useAuthContext();

    useEffect(() => {
        if (!isLoading && authUser) {
            router.push("/admin");
        }
    }, [authUser, isLoading, router]);

    const fetchUser = async (email: string) => {
        let data: object = {};
        try {
            const q = query(collection(db, "users"), where("email", "==", `${email}`));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc: any) => {
                data = doc.data();
            });
        } catch (error) {
            if (error instanceof Error) {
                console.log(error);
            }
        }
        return data;
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: { ...initialValues },
        validationSchema: AdminLoginSchema,
        onSubmit: async (values, action) => {
            setIsLoginLoading(true);
            try {
                await signInWithEmailAndPassword(auth, values.email, values.password);
                const data: any = await fetchUser(values.email);
                await updateProfile(auth.currentUser, {
                    displayName: data?.username,
                    photoURL: data?.avatarUrl || "",
                });
                setSubmitError("");
                router.push("/admin");
                action.resetForm();
                setIsLoginLoading(false);
            } catch (error) {
                console.log(error, "error");
                if (error instanceof FirebaseError) {
                    console.error("An error occured", error);
                    if (error.code in firebaseErrorCodes) {
                        setSubmitError(firebaseErrorCodes[error.code]);
                    } else {
                        setSubmitError(error.code);
                    }
                    setIsLoginLoading(false);
                }
            }
        },
    });

    return (
        <>
            <form id="login_form" onSubmit={handleSubmit}>
                <FormInput
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="abcd@gmail.com"
                    className="form_input_mb"
                    id="login_email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email}
                    touched={touched.email}
                />
                <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="#1234567"
                    id="login_password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.password}
                    touched={touched.password}
                />

                <Link href="/admin/forgot-password" title="forgot password" className="form_forgot_password">
                    Forgot Password
                </Link>

                <Button type="submit" title="login" name="login" className="w-100 auth_btn" size="lg">
                    {loginLoading ? <div className="btn_loader"></div> : <>Log In</>}
                </Button>

                {submitError && <span className="text-danger text-medium mt-2 d-inline-block">{submitError}</span>}
            </form>
        </>
    );
};

export default LoginForm;
