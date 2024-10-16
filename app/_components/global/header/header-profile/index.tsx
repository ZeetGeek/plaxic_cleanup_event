"use Client";

// dependencies
import Image from "next/image";

// components
import Dropdown from "react-bootstrap/Dropdown";

// images
import userImage from "@/images/user.jpg";
import dropdownIcon from "@/images/dropdown.svg";

// style
import style from "./profile.module.scss";
import { useAuthContext } from "@/context/auth/AuthContext";
import { useRouter } from "next/navigation";

const HeaderProfile = () => {
    const { signOut, authUser } = useAuthContext();
    const router = useRouter();

    const userLogout = () => {
        signOut();
        router.push("/login");
    };

    return (
        <>
            <div className={style.header_profile}>
                <Dropdown className="bs-dropdown">
                    <Dropdown.Toggle>
                        <div className={style.profile}>
                            <div className="d-row-center">
                                <div className={style.user_image}>
                                    <Image
                                        src={authUser?.photoURL || userImage}
                                        height={35}
                                        width={35}
                                        alt="user image"
                                    />
                                </div>
                                <div className="d-row-center gap-2">
                                    <div className={`${style.user_name} d-none d-sm-block`}>
                                        {authUser?.username || "Username"}
                                    </div>
                                    <Image src={dropdownIcon} height={24} width={24} alt="dropdown image" />
                                </div>
                            </div>
                        </div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <div className="d-block d-sm-none">
                            <Dropdown.Item href="#">Notification</Dropdown.Item>
                        </div>
                        <Dropdown.Item onClick={userLogout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </>
    );
};

export default HeaderProfile;
