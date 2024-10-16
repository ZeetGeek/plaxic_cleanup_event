import ViewEventDetailsTable from "./view-event-details-table";
import MapImage from "@/images/map.jpg";
import style from "./view-event-details.module.scss";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";

const ViewEventDetails = () => {
    return (
        <section className={style.view_event_details}>
            <h1 className="h2_title mb-4">View Event Details</h1>
            <div className={style.map_description}>
                <Row className={style.row}>
                    <Col>
                        <div className={style.description}>
                            <span>Event description</span>
                            <textarea placeholder="Description..."></textarea>
                        </div>
                    </Col>

                    <Col>
                        <div className={style.map}>
                            <span>Location map</span>
                            {/* <Image src={MapImage} width={500} height={500} alt="Map image" /> */}
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.4380748403623!2d72.83751857597306!3d21.2144702813728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e5169e51563%3A0xa8741da75c9ea267!2sGeek%20Web%20Solution!5e0!3m2!1sen!2sin!4v1729055263234!5m2!1sen!2sin" width="600" height="450" loading="lazy"></iframe>
                        </div>
                    </Col>
                </Row>
            </div>
            <ViewEventDetailsTable />
        </section>
    );
};

export default ViewEventDetails;
