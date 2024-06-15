import LandingContent from "@/components/custom/LandingContent";
import LandingFooter from "@/components/custom/LandingFooter";
import LandingHero from "@/components/custom/LandingHero";
import LandingNavbar from "@/components/custom/LandingNavbar";

const LandingPage = () => {
    return (
        <div className="h-full w-full">
            {/* Bismillah */}
            <LandingNavbar />
            <LandingHero />
            <LandingContent />
            <LandingFooter />
        </div>
    )
}

export default LandingPage;