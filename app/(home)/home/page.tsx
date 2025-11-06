import HomeHeader from "./components/homeHeader";

const HomeComponent = () => {
  return (
    <div className="w-full h-full flex justify-start items-start flex-col">
      <HomeHeader />
      <h1 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100">
        Dashboard
      </h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Welcome back! This is your dashboard overview.
      </p>
    </div>
  );
};

export default HomeComponent;
