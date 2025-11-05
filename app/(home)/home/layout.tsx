import FooterComponent from "@/components/custom/Footer";
import NavbarComponent from "@/components/custom/Navbar";
import { ReactChildren } from "@/lib/const/types";

const HomeLayout = ({ children }: ReactChildren) => {
  return (
    <div className="grid grid-rows-[auto_80%_auto] w-full h-screen">
      <NavbarComponent />
      <main className="flex flex-col justify-center items-center">
        {children}
      </main>
      <FooterComponent />
    </div>
  );
};

export default HomeLayout;
