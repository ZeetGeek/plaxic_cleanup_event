import ViewEventDetailsTable from "./view-event-details-table";
// import MapImage from "@/images/map.jpg";
import style from "./view-event-details.module.scss";
// import Image from "next/image";
import { Col, Row } from "react-bootstrap";

const ViewEventDetails = () => {
    return (
        <section className={style.view_event_details}>
            <h1 className="h2_title page_title">View Event Details</h1>
            <div className={style.map_description}>
                <Row className={"row-x-26 row-y-28"}>
                    <Col md={6}>
                        <div className={style.description}>
                            <span>Event description</span>
                            <textarea placeholder="Description..."></textarea>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className={style.map}>
                            <span>Location map</span>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52818154.48591499!2d-161.49965884503166!3d36.099232962699986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1729062619139!5m2!1sen!2sin"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </div>
            <ViewEventDetailsTable />
        </section>
    );
};

export default ViewEventDetails;
