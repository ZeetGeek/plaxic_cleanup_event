"use client";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import style from "./create-new-clean-up-event.module.scss";
import { DateRangePicker } from "react-bootstrap-daterangepicker";
import { FormInput, FormSelectInput, FormTextareaInput, FormUploadFile } from "@/_components/global/ui/form-input";
import calenderIcon from "@/images/calendar.svg";
import Button from "@/_components/global/ui/button";
import clsx from "clsx";

interface DateRange {
    start: string | null;
    end: string | null;
}

const CreateNewCleanUpEvent = () => {
    const [dateRange, setDateRange] = useState<DateRange>({
        start: null,
        end: null,
    });

    const handleEvent = (event: any, picker: any) => {
        setDateRange({
            start: picker.startDate.format("YYYY-MM-DD HH:mm:ss"),
            end: picker.endDate.format("YYYY-MM-DD HH:mm:ss"),
        });
    };

    return (
        <>
            <section className={style.new_clean_up_event}>
                <h1 className="h2_title mb-4">Create New Clean-Up Event</h1>
                <div className="layout_box">
                    <form className={style.form} action="#">
                        <Row className={style.row}>
                            {/* Event Name */}
                            <Col lg={6}>
                                <FormInput label="Event Name" type="text" placeholder="Name" id="event_name" />
                            </Col>

                            {/* Date & Time */}
                            <Col lg={6}>
                                <DateRangePicker timePicker timePicker24Hour onApply={handleEvent}>
                                    <FormInput
                                        label="Date and Time"
                                        type="text"
                                        placeholder="Select Date & Time"
                                        id="event_date_time"
                                        inputIcon={calenderIcon}
                                    />
                                </DateRangePicker>
                            </Col>

                            {/* Location */}
                            <Col lg={6}>
                                <FormInput
                                    label="Location"
                                    type="text"
                                    placeholder="Enter Location"
                                    id="event_location"
                                />
                            </Col>
                            {/* Image Upload */}
                            <Col lg={6}>
                                <FormUploadFile label="Image Upload" />
                            </Col>

                            {/* Event Status */}
                            <Col lg={6}>
                                <FormSelectInput label="Event Status">
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="Upcoming">Upcoming</option>
                                    <option value="Completed">Completed</option>
                                </FormSelectInput>
                            </Col>

                            {/* Description */}
                            <Col lg={6}>
                                <FormTextareaInput
                                    label="Description"
                                    placeholder="Description"
                                    className={style.description}
                                ></FormTextareaInput>
                            </Col>

                            {/* Cancel & Delete Button */}
                            <Col lg={12}>
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
                    </form>
                </div>
                <div className={clsx(style.form_outer_btn, "d-flex justify-content-end align-items-start gap-4")}>
                    <Button size="md" variant="outline">
                        Cancel
                    </Button>
                    <Button size="md">Save</Button>
                </div>
            </section>
        </>
    );
};

export default CreateNewCleanUpEvent;
