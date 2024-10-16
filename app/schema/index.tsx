import * as Yup from "yup";

export const HomeFormSchema = Yup.object({
	name: Yup.string().required("Name is required"),
	email: Yup.string().email("Invalid email format").required("Email is required"),
	phone: Yup.string()
		.matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, "Invalid phone number format")
		.required("Phone number is required"),
	message: Yup.string().required("Message is required")
});

export const OtherFormSchema = Yup.object({
	name: Yup.string().required("Name is required"),
	email: Yup.string().email("Invalid email format").required("Email is required"),
	message: Yup.string().required("Message is required")
});


