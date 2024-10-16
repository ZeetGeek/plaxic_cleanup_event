"use client";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import style from "./edit-existing-event.module.scss";
import { DateRangePicker } from "react-bootstrap-daterangepicker";
import {
  FormInput,
  FormSelectInput,
  FormTextareaInput,
  FormUploadFile,
} from "@/_components/global/ui/form-input";
import calenderIcon from "@/images/calendar.svg";
import Button from "@/_components/global/ui/button";
import clsx from "clsx";
import moment from "moment";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { eventEditSchema, eventSchema } from "@/_assets/schema/events/eventSchema";
import { statusData } from "@/_lib/utils/dropdown-data";

interface DateRange {
  start: string | null;
}

interface eventFormInputs {
  volunteer_name: string;
  volunteer_contact:string;
  event_name: string;
  description: string;
  status: string;
}

const EditExistingEvent = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    start:moment().startOf("month").format("M/D/YYYY, h:mm A"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<eventFormInputs>({
    defaultValues: {
    volunteer_name:"",
      event_name: "",
      description: "",
      status: statusData[0]?.value,
      volunteer_contact:"",
    },
    resolver: yupResolver(eventEditSchema),
  });

  const handleEvent = (event: any, picker: any) => {
    setDateRange({
      start: picker.startDate,
      
    });
  };


 const onSubmit = async (data: eventFormInputs) => {

    console.log(data,"data");
    

 }
  return (
    <>
      <section className={style.edit_existing_event}>
        <h1 className="h2_title mb-4">Manage Existing Events</h1>
        <div className="layout_box">
          <form className={style.form} onSubmit={handleSubmit(onSubmit)} method="post">
            <Row className={style.row}>
              {/* Event Name */}
              <Col lg={6}>
                <FormInput
                  label="Volunteers Name"
                  type="text"
                  placeholder="Volunteers Name"
                  id="volunteers_name"
                  name="volunteer_name"
                  register={register }
                  error={errors?.volunteer_name?.message}
                />
              </Col>

              <Col lg={6}>
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

              <Col lg={6}>
                <FormInput
                  label="Volunteers Contact"
                  type="text"
                  placeholder="Volunteers Contact"
                  id="volunteers_contact"
                  name="volunteer_contact"
                   register={register }
                  error={errors?.volunteer_contact?.message}
                />
              </Col>

              {/* Date & Time */}
              <Col lg={6}>
                <FormInput
                  label="Date Time"
                  onChange={handleEvent}
                  type="date"
                  id="event_name"
                  inputIcon={calenderIcon}
                  value={
                    dateRange.start
                      ? moment(dateRange.start).format("M/D/YYYY, h:mm A")
                      : ""
                  }
                />
              </Col>

              {/* Event Status */}
              <Col lg={6}>
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
              <Col lg={6}>
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
              <Col lg={12}>
                <div
                  className={clsx(
                    style.form_inner_btn,
                    "d-flex justify-content-start align-items-start gap-4"
                  )}
                >
                  <Button variant="outline" size="md" type="submit">
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
