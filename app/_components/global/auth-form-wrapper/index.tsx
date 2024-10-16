// components
import Image from "next/image";

// styles
import style from "./auth-form.module.scss";
import { Container, Row, Col } from "react-bootstrap";

// images
import plaxicLogo from "@/images/logo.png";

// types
interface AuthFormWrapperProps {
    title?: string | React.ReactNode | null;
    description?: string | null;
    children?: React.ReactNode;
    className?: string;
}

const AuthFormWrapper = ({ title, className, children, description }: AuthFormWrapperProps): JSX.Element => {
    return (
        <>
            <div className={`${style.auth_form}`}>
                <div className={`${style.auth_form_wp} mx-md-5 mx-4`}>
                    <Container className="container-0">
                        <Row className="align-content-between row-0">
                            <Col lg={6} className="py-lg-4 py-3 py-lg-0 order-2 order-lg-1">
                                <div
                                    className={`${style.content} ${className} d-flex flex-column align-items-start justify-content-center h-100`}
                                >
                                    {title === null ? null : (
                                        <div className="mb-md-4 mb-3">
                                            <h1 className="h1_title">{title}</h1>
                                            <div
                                                className={`${style.description} ${
                                                    description ? "d-inline-block" : "d-none"
                                                }`}
                                            >
                                                <p>{description}</p>
                                            </div>
                                        </div>
                                    )}
                                    <div className={`${style.form} w-100`}>{children}</div>
                                </div>
                            </Col>
                            <Col lg={6} className="order-1 order-lg-2">
                                <div className={`${style.image} d-row-center`}>
                                    <Image src={plaxicLogo} height={119} width={265} alt="Plaxic Logo" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default AuthFormWrapper;
