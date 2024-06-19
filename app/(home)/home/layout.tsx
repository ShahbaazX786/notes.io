import FooterComponent from "@/components/custom/Footer";
import NavbarComponent from "@/components/custom/Navbar";
import { HomeLayoutProps } from "@/lib/const/types";

const HomeLayout = ({ children }: HomeLayoutProps) => {
    return (
        <div>
            <nav>
                <NavbarComponent />
            </nav>
            <main>
                {children}
            </main>
            <footer>
                <FooterComponent />
            </footer>
        </div>
    )
}

export default HomeLayout;