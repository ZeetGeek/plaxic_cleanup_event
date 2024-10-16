"use client";

// dependencies
import { ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "@/images/logo.png";

// hooks
import useFonts from "@/_hooks/useFonts";

// components
import Header from "@/_components/global/header";
import { usePathname, useRouter } from "next/navigation";
import { useAuthContext } from "@/_context/auth/AuthContext";
import Sidebar from "@/_components/global/sidebar";
import { ToastContainer } from "react-toastify";

interface LayoutWrapperProps {
    children: ReactNode;
}

const LayoutWrapper = ({ children }: LayoutWrapperProps): JSX.Element => {
    const fonts = useFonts();
    const [sidebar, setSidebar] = useState<boolean>(false);
    const sidebarRef = useRef<any>(null);
    const pathname = usePathname();
    const router = useRouter();
    const { authUser, isLoading } = useAuthContext();
    const authPages = ["/login", "/forgot-password"].includes(pathname);

    useEffect(() => {
        if (!isLoading && !authUser) {
            if (!["/login", "/forgot-password"].includes(pathname)) {
                router.push("/login");
            }
        }
    }, [authUser, isLoading, router]);

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setSidebar(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sidebarRef]);

    return (
        <>
            <body className={fonts}>
                {/* {isLoading || !authUser ? ( */}
                {isLoading ? (
                    <>
                        <div className="plaxic_loading d-row-center">
                            {/* <Image src={LoadingJPG} height={150} width={150} alt="loading gif" /> */}
                            <Image src={logo} height={62} width={138} alt="plaxic logo" />
                        </div>
                    </>
                ) : authPages ? (
                    <>{children}</>
                ) : (
                    <>
                        <div className="d-flex align-items-start">
                            <div className="sidebar_wp" ref={sidebarRef}>
                                <Sidebar
                                    sidebarShow={sidebar}
                                    onClick={() => setSidebar(!sidebar)}
                                    onSidebarLinkClick={() => setSidebar(!sidebar)}
                                />
                            </div>
                            <div className="dashboard_wp">
                                <Header onClick={() => setSidebar(!sidebar)} />
                                <div className="dashboard_page">{children}</div>
                            </div>
                        </div>
                    </>
                )}
                <ToastContainer />
            </body>
        </>
    );
};

export default LayoutWrapper;
