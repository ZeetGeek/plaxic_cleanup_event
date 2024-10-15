import * as yup from "yup";

export const eventSchema = yup.object({
	event_name: yup.string().required("Event Name is required"),
    location: yup.string().required("Location is required"),
    description: yup.string().required("Description is required"),
        status: yup.string().required("Status is required"),
        event_image: yup.string().required("Event Image is required"),

});
