// dependencies
import Image from "next/image";
import Link from "next/link";

// components
import SidebarLinks from "./sidebar-links";

// images
import logo from "@/images/logo.png";
import closeIcon from "@/images/close.svg";

// style
import style from "./sidebar.module.scss";

interface SidebarProps {
    sidebarShow: boolean;
    onClick: () => void;
}

const Sidebar = ({ sidebarShow, onClick }: SidebarProps): JSX.Element => {
    return (
        <aside className={`${style.sidebar} ${sidebarShow ? style.show : ""}`}>
            <div className={`${style.logo_wp} d-row-between`}>
                <div className={style.logo}>
                    <Link href="/" title="plaxic">
                        <Image src={logo} height={62} width={138} alt="plaxic logo" />
                    </Link>
                </div>
                <div className="d-block d-lg-none">
                    <button className="header_icon" onClick={onClick}>
                        <Image src={closeIcon} height={24} width={24} alt="menu icon" className="header_icon" />
                    </button>
                </div>
            </div>

            <SidebarLinks />
        </aside>
    );
};

export default Sidebar;
