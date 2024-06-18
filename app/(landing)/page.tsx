import LandingContent from "@/components/custom/LandingContent";
import LandingFooter from "@/components/custom/LandingFooter";
import LandingHero from "@/components/custom/LandingHero";
import LandingNavbar from "@/components/custom/LandingNavbar";
import { About } from "./components/about";

const LandingPage = () => {
    return (
        <div className="h-full w-full">
            {/* Bismillah */}
            <LandingNavbar />
            <LandingHero />
            <LandingContent />
            <About />
            <LandingFooter />
        </div>
    )
}

export default LandingPage;