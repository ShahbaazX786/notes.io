import AuthForm from "../components/AuthForm";

const SignUpComponent = () => {
  return (
    <div className="w-full h-screen overflow-y-auto flex flex-col justify-normal md:justify-center items-center">
      <AuthForm mode="signup" />
    </div>
  );
};

export default SignUpComponent;
