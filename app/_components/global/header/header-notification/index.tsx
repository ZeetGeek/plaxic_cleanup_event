// dependencies
import Image from "next/image";
import clsx from "clsx";

// images
import notification from "@/images/notification.svg";

// styles
import style from "./notification.module.scss";

const HeaderNotification = () => {
    return (
        <>
            <div className={clsx(style.notification, "d-none d-sm-block")}>
                <div className={`${style.notification_inner} header_icon`}>
                    <Image src={notification} height={20} width={20} alt="notification icon" />
                </div>
            </div>
        </>
    );
};

export default HeaderNotification;
