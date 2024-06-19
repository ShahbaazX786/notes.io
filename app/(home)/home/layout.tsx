import FooterComponent from "@/app/components/Footer";
import NavbarComponent from "@/app/components/Navbar";
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