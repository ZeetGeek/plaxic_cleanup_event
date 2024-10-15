"use client";

import Image from "next/image";
import Link from "next/link";

// components
import HeaderSearch from "./header-search";
import HeaderNotification from "./header-notification";
import HeaderProfile from "./header-profile";

// images
import logo from "@/images/logo.png";
import menuIcon from "@/images/menu.svg";

// style
import style from "./header.module.scss";

interface HeaderProps {
    onClick?: () => void;
}

const Header = ({ onClick }: HeaderProps): JSX.Element => {
    return (
        <header className={`${style.header}`}>
            {/* mobile menu */}
            <div className={style.mobile_menu}>
                <button className="header_icon" onClick={onClick}>
                    <Image src={menuIcon} height={24} width={24} alt="menu icon" />
                </button>

                <Link href="/admin" title="plaxic">
                    <Image src={logo} height={62} width={138} alt="plaxic logo" className={style.logo} />
                </Link>
            </div>

            {/* header search */}
            <div className={style.header_extras}>
                <HeaderSearch />
                <HeaderNotification />
                <HeaderProfile />
            </div>
        </header>
    );
};

export default Header;
