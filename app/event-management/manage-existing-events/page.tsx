import style from "./manage-existing-events.module.scss";
import TableData from "./table-data";
import TableOptions from "./table-options";
import TablePagination from "./table-pagination";

const ManageExistingEvents = () => {
    return (
        <section className={style.manage_existing_events}>
            <h1 className="h2_title page_title">Manage Existing Events</h1>
            <div className="layout_box no_padding">
                <div className={style.event_table}>
                    <TableOptions />
                    <TableData />
                </div>
            </div>
            <TablePagination />
        </section>
    );
};

export default ManageExistingEvents;
