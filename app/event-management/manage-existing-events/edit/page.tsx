"use client";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import style from "./edit-existing-event.module.scss";
import { DateRangePicker } from "react-bootstrap-daterangepicker";
import { FormInput, FormSelectInput, FormTextareaInput, FormUploadFile } from "@/_components/global/ui/form-input";
import calenderIcon from "@/images/calendar.svg";
import Button from "@/_components/global/ui/button";
import clsx from "clsx";

interface DateRange {
    start: string | null;
    end: string | null;
}

const EditExistingEvent = () => {
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
            <section className={style.edit_existing_event}>
                <h1 className="h2_title mb-4">Manage Existing Events</h1>
                <div className="layout_box">
                    <form className={style.form} action="#">
                        <Row className={style.row}>
                            {/* Event Name */}
                            <Col lg={6}>
                                <FormInput
                                    label="Volunteers Name"
                                    type="text"
                                    placeholder="Volunteers Name"
                                    id="volunteers_name"
                                />
                            </Col>

                            <Col lg={6}>
                                <FormInput label="Event Name" type="text" placeholder="Name" id="event_name" />
                            </Col>

                            <Col lg={6}>
                                <FormInput
                                    label="Volunteers Contact"
                                    type="text"
                                    placeholder="Volunteers Contact"
                                    id="volunteers_contact"
                                />
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
                                    <Button variant="outline" size="md">
                                        Delete
                                    </Button>
                                    <Button size="md">Cancel</Button>
                                </div>
                            </Col>
                        </Row>
                    </form>
                </div>
                {/* <div className={clsx(style.form_outer_btn, "d-flex justify-content-end align-items-start gap-4")}>
                    <Button size="md" variant="outline">
                        Cancel
                    </Button>
                    <Button size="md">Save</Button>
                </div> */}
            </section>
        </>
    );
};

export default EditExistingEvent;
