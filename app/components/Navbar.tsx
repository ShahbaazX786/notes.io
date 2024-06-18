import Image from "next/image";
import Link from "next/link";

const NavbarComponent = () => {
    return (
        <div className="flex flex-row justify-between items-center px-4 py-2">
            <Link href={'/home'} className="flex justify-center items-baseline">
                <Image src={'/Logo.png'} alt="Brand Logo" height={24} width={24} quality={100} priority />
                <p className="text-2xl font-bold">otes.io</p>
            </Link>
            <div>Search Bar</div>
            <div>Auth Status</div>
        </div>
    )
}

export default NavbarComponent;