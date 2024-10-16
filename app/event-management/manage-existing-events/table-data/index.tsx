import Image from "next/image";
import EditIcon from "@/images/edit.svg";
import style from "./table-data.module.scss";
import EventImage from "@/images/user.jpg";
import ResponsiveTable from "@/components/global/ui/responsive-table";
import clsx from "clsx";

const TableData = () => {
    return (
        <div className={style.table_data}>
            <ResponsiveTable width={1200}>
                {/* Table header */}
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Date and Time</th>
                        <th>Location</th>
                        <th>Description</th>
                        <th>Event status</th>
                        <th>Edit event details</th>
                        <th>Delete events</th>
                    </tr>
                </thead>

                {/* Table body */}
                <tbody>
                    <tr>
                        <td>
                            <div className={style.event_name}>
                                <Image src={EventImage} height={26} width={26} alt="event_image" />
                                <span>Event 1</span>
                            </div>
                        </td>
                        <td>
                            <span className={style.date_time}>7/4/204, 12:00am</span>
                        </td>
                        <td>
                            <span className={style.location}>United Statest</span>
                        </td>
                        <td>
                            <p className={style.description}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quidem fugit ipsum sequi
                                quasi iste officiis asperiores itaque. Assumenda, necessitatibus.
                            </p>
                        </td>
                        <td>
                            <span className={clsx(style.event_status, style.completed)}>Completed</span>
                            {/* <span className={clsx(style.event_status, style.upcoming)}>Upcoming</span> */}
                            {/* <span className={clsx(style.event_status, style.ongoing)}>Ongoing</span> */}
                        </td>
                        <td>
                            <button className={style.edit_btn}>
                                Edit <Image src={EditIcon} height={10} width={10} alt="Edit Icon" />
                            </button>
                        </td>
                        <td>
                            <button className={style.delete_btn}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </ResponsiveTable>
        </div>
    );
};

export default TableData;
