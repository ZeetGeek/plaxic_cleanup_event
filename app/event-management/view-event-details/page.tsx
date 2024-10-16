import ViewEventDetailsTable from "./view-event-details-table";
import MapImage from "@/images/map.jpg";
import style from "./view-event-details.module.scss";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";

const ViewEventDetails = () => {
    return (
        <section className={style.view_event_details}>
            <h1 className="h2_title page_title">View Event Details</h1>
            <div className={style.map_description}>
                <Row className={"row-x-26"}>
                    <Col>
                        <div className={style.description}>
                            <span>Event description</span>
                            <textarea placeholder="Description..."></textarea>
                        </div>
                    </Col>

                    <Col>
                        <div className={style.map}>
                            <span>Location map</span>
                            <Image src={MapImage} width={500} height={500} alt="Map image" />
                        </div>
                    </Col>
                </Row>
            </div>
            <ViewEventDetailsTable />
        </section>
    );
};

export default ViewEventDetails;
