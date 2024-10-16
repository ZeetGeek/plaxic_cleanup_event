import * as yup from "yup";

export const ResetPasswordEmailSchema = yup.object({
	email: yup.string().email("Invalid email format").required("Email is required")
});
