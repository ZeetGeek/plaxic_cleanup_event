import Image from "next/image";
import TableSearchIcon from "@/images/table-search.svg";
import FilterIcon from "@/images/filter.svg";
import ShortByIcon from "@/images/short-by.svg";
import ThreeDotIcon from "@/images/three-dot.svg";
import style from "./table-options.module.scss";
import clsx from "clsx";

const TableOptions = () => {
    return (
        <div className={style.table_options}>
            {/* Search input */}
            <div className={style.search}>
                <Image src={TableSearchIcon} height={16} width={16} alt="search icon" />
                <input type="text" name="table_search" placeholder="Search" />
            </div>

            {/* Advance Filter */}
            <div className={style.advance_filter}>
                <button className={style.filter_btn}>
                    <Image src={FilterIcon} height={16} width={16} alt="filter icon" />
                    Filter
                </button>
                <button className={style.filter_btn}>
                    <Image src={ShortByIcon} height={16} width={16} alt="filter icon" />
                    Short by
                </button>
                <button className={clsx(style.filter_btn, style.three_dot)}>
                    <Image src={ThreeDotIcon} height={16} width={16} alt="filter icon" />
                </button>
            </div>
        </div>
    );
};

export default TableOptions;
