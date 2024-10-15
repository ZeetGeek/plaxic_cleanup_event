// components
import { FormInput } from "@/components/global/ui/form-input";
import Button from "@/components/global/ui/button";

const ConfirmPasswordForm = () => {
    return (
        <>
            <form id="confirm_password_form">
                <div className="mb-md-4 mb-3">
                    <h1 className="h1_title">
                        Set a
                        <br className="d-none d-md-block" />
                        new password
                    </h1>
                </div>

                <FormInput
                    label="Enter  new Password"
                    type="password"
                    placeholder="#1234567"
                    id="confirm_password_new_password"
                    className="form_input_mb"
                />
                <FormInput
                    label="Conform  Password"
                    type="password"
                    placeholder="#1234567"
                    id="confirm_password_rewrite_password"
                    className="form_input_mb"
                />
                <Button size="lg" type="submit" title="login" name="login" className="w-100 mt-3">
                    Login
                </Button>
            </form>
        </>
    );
};

export default ConfirmPasswordForm;
