// components
import AuthFormWrapper from "@/components/global/auth-form-wrapper";
import LoginForm from "@/components/global/auth-forms/login";

const Login: React.FC = (): JSX.Element => {
  return (
    <>
      <section id="admin_login">
        <AuthFormWrapper
          title="Login to your account"
          className="admin_login_form"
        >
          <LoginForm />
        </AuthFormWrapper>
      </section>
    </>
  );
};

export default Login;
