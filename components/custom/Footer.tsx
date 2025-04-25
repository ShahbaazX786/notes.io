import CustomTooltip from "@/components/customShadcn/customTooltip";
import FooterMenu, { FooterSocials } from "@/lib/const/constants";
import Image from "next/image";
import Link from "next/link";

const FooterComponent = () => {
  return (
    <footer className="bg-gray-200 grid grid-rows-2 place-content-center place-items-center pt-12 pb-0">
      <div className="place-items-center">
        <h3 className="text-6xl mb-4 first-letter:font-bold">Notes.io</h3>
        <p className="text-center leading-relaxed text-gray-500">
          Capture ideas in a snap with Notes.io. <br />
          Share your thoughts instantly, anywhere.
        </p>
      </div>
      <div>
        <ul className="flex flex-row flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 mb-8">
          {FooterMenu.map((item) => (
            <li key={item.id}>
              <Link
                href={item.path}
                className="text-gray-700 transition hover:text-gray-700/75 hover:underline hover:underline-offset-2"
              >
                {" "}
                {item.link}{" "}
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          <li className="flex flex-row justify-center items-center gap-8">
            {FooterSocials.map((item) => (
              <Link
                key={item.id}
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
  );
};

export default FooterComponent;
