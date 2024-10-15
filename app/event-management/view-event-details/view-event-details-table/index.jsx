import Image from "next/image";
import VolunteerImage from "@/images/user.jpg";
import style from "./view-event-details-table.module.scss";
import clsx from "clsx";
// import Pagination from "@/_components/global/ui/pagination";

const ViewEventDetailsTable = () => {
    return (
        <div className="layout_box no_padding">
            <table className={clsx(style.view_event_details, "w-100")}>
                <thead>
                    <tr>
                        <th>Volunteer Name</th>
                        <th>Date and Time</th>
                        <th>Location</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={style.volunteer}>
                                <Image src={VolunteerImage} height={26} width={26} alt="event_image" />
                                <span>Volunteer 1</span>
                            </div>
                        </td>
                        <td>
                            <span>7/4/204, 12:00am</span>
                        </td>
                        <td>
                            <span>United Statest</span>
                        </td>
                        <td>
                            <p className={style.description}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus quia fugit eveniet
                                nostrum cumque provident minima quidem expedita voluptates sunt.
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className={style.volunteer}>
                                <Image src={VolunteerImage} height={26} width={26} alt="event_image" />
                                <span>Volunteer 1</span>
                            </div>
                        </td>
                        <td>
                            <span>7/4/204, 12:00am</span>
                        </td>
                        <td>
                            <span>United Statest</span>
                        </td>
                        <td>
                            <p className={style.description}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus quia fugit eveniet
                                nostrum cumque provident minima quidem expedita voluptates sunt.
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className={style.volunteer}>
                                <Image src={VolunteerImage} height={26} width={26} alt="event_image" />
                                <span>Volunteer 1</span>
                            </div>
                        </td>
                        <td>
                            <span>7/4/204, 12:00am</span>
                        </td>
                        <td>
                            <span>United Statest</span>
                        </td>
                        <td>
                            <p className={style.description}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus quia fugit eveniet
                                nostrum cumque provident minima quidem expedita voluptates sunt.
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className={style.volunteer}>
                                <Image src={VolunteerImage} height={26} width={26} alt="event_image" />
                                <span>Volunteer 1</span>
                            </div>
                        </td>
                        <td>
                            <span>7/4/204, 12:00am</span>
                        </td>
                        <td>
                            <span>United Statest</span>
                        </td>
                        <td>
                            <p className={style.description}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus quia fugit eveniet
                                nostrum cumque provident minima quidem expedita voluptates sunt.
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className={style.volunteer}>
                                <Image src={VolunteerImage} height={26} width={26} alt="event_image" />
                                <span>Volunteer 1</span>
                            </div>
                        </td>
                        <td>
                            <span>7/4/204, 12:00am</span>
                        </td>
                        <td>
                            <span>United Statest</span>
                        </td>
                        <td>
                            <p className={style.description}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus quia fugit eveniet
                                nostrum cumque provident minima quidem expedita voluptates sunt.
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className={clsx(style.pagination_wp, "d-flex align-items-center justify-content-between")}>
                <span>02 of 21</span>
                {/* <Pagination /> */}
            </div>
        </div>
    );
};

export default ViewEventDetailsTable;
