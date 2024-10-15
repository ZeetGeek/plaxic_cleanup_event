"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import dropdownIcon from "@/images/dropdown.svg";
import style from "./sidebar-links.module.scss";
import { SidebarLinks as data } from "@/lib/utils/sidebar-data";

const SidebarLinks = (): JSX.Element => {
    const [openMenus, setOpenMenus] = useState<Array<string>>([]);
    const pathName = usePathname();

    const toggleSubMenu = (menuName: string) => {
        if (openMenus.includes(menuName)) {
            setOpenMenus(openMenus.filter((menu) => menu !== menuName));
        } else {
            setOpenMenus([menuName]);
        }
    };

    return (
        <div className={style.sidebar_links}>
            <ul className={style.sidebar_link_wp}>
                {data.map((v, i) => (
                    <li key={i}>
                        {v.navigate === null ? (
                            <button
                                className={`${style.sidebar_link} d-row-between ${
                                    v.subLinks?.some((v2) => v2.navigate === pathName) ? style.active : ""
                                }`}
                                onClick={() => toggleSubMenu(v.name)}
                            >
                                <div className="d-row-start gap-3">
                                    <Image
                                        src={v.icon}
                                        className={style.sidebar_link_icon}
                                        height={18}
                                        width={18}
                                        alt={`${v.name} icon`}
                                    />
                                    <span className="text-capitalize">{v.name}</span>
                                </div>

                                {v.subLinks && (
                                    <Image
                                        src={dropdownIcon}
                                        height={24}
                                        width={24}
                                        alt="dropdown icon"
                                        className={openMenus.includes(v.name) ? "rotate-180deg" : ""}
                                    />
                                )}
                            </button>
                        ) : (
                            <>
                                <Link
                                    href={v.navigate}
                                    className={`${style.sidebar_link} d-row-between ${
                                        pathName === v.navigate ? style.active : ""
                                    }`}
                                >
                                    <div className="d-row-start gap-2">
                                        <Image
                                            src={v.icon}
                                            className={style.sidebar_link_icon}
                                            height={24}
                                            width={24}
                                            alt={`${v.name} icon`}
                                        />
                                        <span className="text-capitalize">{v.name}</span>
                                    </div>

                                    {v.subLinks && (
                                        <Image
                                            src={dropdownIcon}
                                            height={24}
                                            width={24}
                                            alt="dropdown icon"
                                            className={openMenus.includes(v.name) ? "rotate-180deg" : ""}
                                        />
                                    )}
                                </Link>
                            </>
                        )}

                        {v.subLinks && (
                            <ul
                                className={`${style.sub_links_wp} ${openMenus.includes(v.name) ? "d-block" : "d-none"}`}
                            >
                                {v.subLinks.map((v2, i2) => (
                                    <li key={i2}>
                                        <Link
                                            href={v2.navigate}
                                            title={v2.name}
                                            className={`${style.sub_link} ${
                                                v2.navigate === pathName ? style.subLink_active : ""
                                            } d-row-start gap-2`}
                                        >
                                            {/* <Image src={v2.icon} height={24} width={24} alt={`${v2.name} icon`} /> */}
                                            <span>{v2.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SidebarLinks;
