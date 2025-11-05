import AuthForm from "../components/AuthForm";

const LoginPage = () => {
  return (
    <div className="w-full h-screen overflow-y-auto flex flex-col justify-normal md:justify-center items-center">
      <AuthForm mode="login" />
    </div>
  );
};

export default LoginPage;
