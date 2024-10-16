"use client";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import style from "./create-new-clean-up-event.module.scss";
import { DateRangePicker } from "react-bootstrap-daterangepicker";
import {
    FormDateInput,
    FormInput,
    FormSelectInput,
    FormTextareaInput,
    FormUploadFile,
} from "@/_components/global/ui/form-input";
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

    return (
        <>
            <section className={style.new_clean_up_event}>
                <h1 className="h2_title page_title">Create New Clean-Up Event</h1>
                <div className="layout_box">
                    <form className={style.form} action="#">
                        <Row className={"row-x-36 row-y-28"}>
                            {/* Event Name */}
                            <Col sm={6}>
                                <FormInput label="Event Name" type="text" placeholder="Name" id="event_name" />
                            </Col>

                            {/* Date & Time */}
                            <Col sm={6}>
                                <FormInput label="Date Time" type="date" id="event_name" inputIcon={calenderIcon} />
                            </Col>

                            {/* Location */}
                            <Col md={6}>
                                <FormInput
                                    label="Location"
                                    type="text"
                                    placeholder="Enter Location"
                                    id="event_location"
                                />
                            </Col>

                            {/* Image Upload */}
                            <Col md={6}>
                                <FormUploadFile label="Image Upload" />
                            </Col>

                            {/* Event Status */}
                            <Col md={6}>
                                <FormSelectInput label="Event Status">
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="Upcoming">Upcoming</option>
                                    <option value="Completed">Completed</option>
                                </FormSelectInput>
                            </Col>

                            {/* Description */}
                            <Col md={6}>
                                <FormTextareaInput
                                    label="Description"
                                    placeholder="Description"
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
