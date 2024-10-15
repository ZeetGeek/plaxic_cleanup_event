// style
// import Pagination from "@/_components/global/ui/pagination";
import style from "./table-pagination.module.scss";

const TablePagination = () => {
    return (
        <>
            <div className={style.table_pagination}>
                <span>03 of 21</span>
                {/* <Pagination /> */}
            </div>
        </>
    );
};

export default TablePagination;
