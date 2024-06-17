import SignupForm from "../components/SignupForm";

const SignUpComponent = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold my-5">
                Welcome Back
            </h2>
            <div className="transition-all ease-linear h-full w-full max-w-96">
                <SignupForm />
            </div >
        </div>
    )
}

export default SignUpComponent;