"use client";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import style from "./create-new-clean-up-event.module.scss";
import { FormInput, FormSelectInput, FormTextareaInput, FormUploadFile } from "@/_components/global/ui/form-input";
import calenderIcon from "@/images/calendar.svg";
import Button from "@/_components/global/ui/button";
import clsx from "clsx";
import { eventSchema } from "@/_assets/schema/events/eventSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import moment from "moment";
import { statusData } from "@/_lib/utils/dropdown-data";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "@/firebase/firebase";

interface DateRange {
    start: string | null;
}

interface eventFormInputs {
    event_name: string;
    location: string;
    description: string;
    status: string;
}

const CreateNewCleanUpEvent = () => {
    const [dateRange, setDateRange] = useState<DateRange>({
        start: moment().startOf("month").format("M/D/YYYY, h:mm A"),
    });
    const [imageFile, setImageFile] = useState();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<eventFormInputs>({
        defaultValues: {
            event_name: "",
            location: "",
            description: "",
            status: statusData[0]?.value,
        },
        resolver: yupResolver(eventSchema),
    });

    const handleEvent = (event: any, picker: any) => {
        setDateRange({
            start: picker.startDate,
        });
    };

    const onSubmit = async (data: eventFormInputs) => {
        try {
            // Date range to store
            const eventDates = {
                start: dateRange.start,
            };

            console.log(data, "data");
            console.log(eventDates, "eventDates");
            console.log(imageFile, "file");

            // Add document to Firestore
            // const docRef = await addDoc(collection(db, "events"), {
            //   ...data,
            //   eventDates,
            //   image: imageFile

            // });

            // console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        if (file?.type === "image/jpg" || file?.type === "image/png" || file?.type === "image/jpeg") {
            setImageFile(file);

            console.log(file, "file");

            const reader = new FileReader();
            reader.onload = (event: any) => {
                // setImage(event.target.result);
                console.log(event.target.result, "event.target.result");
            };
            reader.readAsDataURL(file);
        } else {
            return;
        }
    };

    return (
        <>
            <section className={style.new_clean_up_event}>
                <form className={style.form} method="post" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="h2_title mb-4">Create New Clean-Up Event</h1>
                    <div className="layout_box">
                        <Row className={"row-x-36 row-y-28"}>
                            {/* Event Name */}
                            <Col sm={6}>
                                <FormInput
                                    label="Event Name"
                                    type="text"
                                    placeholder="Name"
                                    name="event_name"
                                    id="event_name"
                                    register={register}
                                    error={errors?.event_name?.message}
                                />
                            </Col>

                            {/* Date & Time */}
                            <Col sm={6}>
                                <FormInput
                                    label="Date Time"
                                    onChange={handleEvent}
                                    type="date"
                                    id="event_name"
                                    inputIcon={calenderIcon}
                                    value={dateRange.start ? moment(dateRange.start).format("M/D/YYYY, h:mm A") : ""}
                                />
                            </Col>

                            {/* Location */}
                            <Col md={6}>
                                <FormInput
                                    label="Location"
                                    type="text"
                                    placeholder="Enter Location"
                                    id="event_location"
                                    name="location"
                                    register={register}
                                    error={errors?.location?.message}
                                />
                            </Col>

                            {/* Image Upload */}
                            <Col md={6}>
                                <FormUploadFile
                                    label="Image Upload"
                                    name="event_image"
                                    onChange={handleFileChange}
                                    // register={register}
                                    // error={errors?.event_image?.message}
                                />
                            </Col>

                            {/* Event Status */}
                            <Col md={6}>
                                <FormSelectInput
                                    label="Event Status"
                                    name="status"
                                    register={register}
                                    error={errors?.status?.message}
                                >
                                    {statusData?.map((e, index) => (
                                        <option key={index} value={e.value}>
                                            {e.label}
                                        </option>
                                    ))}
                                </FormSelectInput>
                            </Col>

                            {/* Description */}
                            <Col md={6}>
                                <FormTextareaInput
                                    label="Description"
                                    placeholder="Description"
                                    name="description"
                                    error={errors?.description?.message}
                                    register={register}
                                    className={style.description}
                                ></FormTextareaInput>
                            </Col>

                            {/* Cancel & Delete Button */}
                            <Col md={12}>
                                <div
                                    className={clsx(
                                        style.form_inner_btn,
                                        "d-flex justify-content-start align-items-start gap-4"
                                    )}
                                >
                                    <Button variant="outline">Cancel</Button>
                                    <Button>Delete</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className={clsx(style.form_outer_btn, "d-flex justify-content-end align-items-start gap-4")}>
                        <Button size="md" variant="outline">
                            Cancel
                        </Button>
                        <Button size="md" type="submit">
                            Save
                        </Button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default CreateNewCleanUpEvent;
