"use client";

// dependencies
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


// components
import { FormInput } from "@/components/global/ui/form-input";
import Button from "@/components/global/ui/button";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, firebaseErrorCodes } from "@/firebase/firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/auth/AuthContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { AdminLoginSchema } from "@/_assets/schema/login/loginSchema";


interface LoginFormInputs {
    email: string;
    password: string;
}

const LoginForm = () => {
    const [submitError, setSubmitError] = useState("");
    const [loginLoading, setIsLoginLoading] = useState<boolean>(false);
    const router = useRouter();
    const { authUser, isLoading } = useAuthContext();

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
         defaultValues: {
        email: "",
        password: ""
    },
        resolver: yupResolver(AdminLoginSchema),
    });

    useEffect(() => {
        if (!isLoading && authUser) {
            router.push("/event-management/create-new-clean-up-event");
        }
    }, [authUser, isLoading, router]);

    const fetchUser = async (email: string) => {
        let data: object = {};
        try {
            const q = query(collection(db, "users"), where("email", "==", email));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                data = doc.data();
            });
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
        return data;
    };

    const onSubmit: SubmitHandler<LoginFormInputs> = async (values:LoginFormInputs) => {

        setIsLoginLoading(true);
        try {
            await signInWithEmailAndPassword(auth, values.email, values.password);
            const data: any = await fetchUser(values.email);
            console.log(data,'data');
            
            await updateProfile(auth.currentUser, {
                displayName: data?.username,
                photoURL: data?.avatarUrl || "",
            });
            setSubmitError("");
            router.push("/event-management/create-new-clean-up-event");
            setIsLoginLoading(false);
        } catch (error) {
            console.log("Error during sign-in:", error);
            if (error instanceof FirebaseError) {
                const errorMessage = firebaseErrorCodes[error.code] || error.message;
                setSubmitError(errorMessage);
            }
            setIsLoginLoading(false);
        }
    };

    return (
        <form id="login_form" onSubmit={handleSubmit(onSubmit)} method="POST">
            <FormInput
                label="Email Address"
                type="email"
                placeholder="abcd@gmail.com"
                className="form_input_mb"
                id="login_email"
                name = "email"
                error={errors.email?.message}
                register={register}
            />
            <FormInput
                label="Password"
                type="password"
                placeholder="#1234567"
                name="password"
                id="login_password"
                error={errors.password?.message}
                register={register}
            />

            <Link href="/forgot-password" title="forgot password" className="form_forgot_password">
                Forgot Password
            </Link>

            <Button type="submit" title="login" name="login" className="w-100 auth_btn" size="lg">
                {loginLoading ? <div className="btn_loader"></div> : <>Log In</>}
            </Button>

            {submitError && <span className="text-danger text-medium mt-2 d-inline-block">{submitError}</span>}
        </form>
    );
};

export default LoginForm;
