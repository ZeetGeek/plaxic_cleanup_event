"use client";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
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
import { eventSchema } from "@/_assets/schema/events/eventSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import moment from "moment";

interface DateRange {
  start: string | null;
  end: string | null;
}

interface eventFormInputs {
  event_name: string;
  location: string;
  description: string;
  status: string;
  event_image: string;
}

interface statusData {
  label: string;
  value: string;
}

const CreateNewCleanUpEvent = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    start: moment().startOf("month").format("MM/DD/YYYY"),
    end: moment().endOf("month").format("MM/DD/YYYY"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<eventFormInputs>({
    defaultValues: {
      event_name: "",
      location: "",
      description: "",
      event_image: "",
    },
    resolver: yupResolver(eventSchema),
  });

  const handleEvent = (event: any, picker: any) => {
    setDateRange({
      start: picker.startDate.format("MM/DD/YYYY"),
      end: picker.endDate.format("MM/DD/YYYY"),
    });
  };

  const onSubmit = (data: eventFormInputs) => {
    console.log(data, "kkkk");

    const fileInput = data?.event_image?.[0];

    console.log(fileInput,"kkkkkkk");
    
  };

  const statusData: statusData[] = [
    { label: "Ongoing", value: "Ongoing" },
    { label: "Upcoming", value: "Upcoming" },
    { label: "Completed", value: "Completed" },
  ];

    const handleFileChange = (event:any) => {
     
        const file = event.target.files[0];
        if (file?.type === 'image/jpg' || file?.type === 'image/png' || file?.type === 'image/jpeg') {
            // setImageFile(file);

            console.log(file,"file");
            
            const reader = new FileReader();
            reader.onload = (event:any) => {
                // setImage(event.target.result);
            console.log(event.target.result,"event.target.result");

            };
            reader.readAsDataURL(file);
        } else {
          
            return;
        }
    };

    console.log(dateRange,"date");
    
  return (
    <>
      <section className={style.new_clean_up_event}>
        <form
          className={style.form}
          method="post"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="h2_title mb-4">Create New Clean-Up Event</h1>
          <div className="layout_box">
            <Row className={style.row}>
              {/* Event Name */}
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

                            {/* Date & Time */}
                            <Col lg={6}>
                                <FormInput label="Date Time" onChange={handleEvent} type="date" id="event_name" inputIcon={calenderIcon} value={
                      dateRange.start && dateRange.end
                        ? `${dateRange.start} - ${dateRange.end}`
                        : ""
                    } />
                            </Col>

              {/* Location */}
              <Col lg={6}>
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
              <Col lg={6}>
                <FormUploadFile label="Image Upload"  name="event_image"
                onChange={handleFileChange}
            // register={register}
            // error={errors?.event_image?.message} 
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
                  <Button variant="outline">Cancel</Button>
                  <Button>Delete</Button>
                </div>
              </Col>
            </Row>
          </div>
          <div
            className={clsx(
              style.form_outer_btn,
              "d-flex justify-content-end align-items-start gap-4"
            )}
          >
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
