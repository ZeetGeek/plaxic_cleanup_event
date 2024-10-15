import SearchIcon from "@/images/search.svg";
import style from "./header-search.module.scss";
import Image from "next/image";
import clsx from "clsx";

const HeaderSearch = () => {
    return (
        <div className={clsx(style.header_search, "header_icon")}>
            <Image src={SearchIcon} height={16} width={16} alt="search icon" />
        </div>
    );
};

export default HeaderSearch;
