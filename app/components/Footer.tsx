import CustomTooltip from "@/components/customShadcn/customTooltip";
import FooterMenu, { FooterSocials } from "@/const/constants";
import Image from "next/image";
import Link from "next/link";

const FooterComponent = () => {
    return (
        <footer className="bg-gray-100">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-center text-teal-600">
                    <Image alt="Notes.io Logo" src={'/LoginLogo.png'} width={200} height={200} priority />
                </div>

                <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
                    Capture ideas in a snap with Notes.io. <br />Share your thoughts instantly, anywhere.
                </p>

                <ul className="mt-8 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                    {FooterMenu.map((item) => (
                        <li key={item.id}>
                            <Link href={item.path} className="text-gray-700 transition hover:text-gray-700/75 hover:underline hover:underline-offset-2" > {item.link} </Link>
                        </li>
                    ))}
                </ul>

                <ul className="mt-8">
                    <li className="flex flex-row justify-center items-center gap-8">
                        {FooterSocials.map((item) => (
                            <Link key={item.id}
                                href={item.path}
                                rel="noreferrer"
                                target="_blank"
                                className="text-gray-700 transition hover:text-gray-700/75"
                            >
                                <CustomTooltip name={item.name} icon={item.icon} />
                            </Link>
                        ))}
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default FooterComponent;