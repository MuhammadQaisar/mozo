import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Brand = ({ isScrolled }) => {
  const router = useRouter();
  const pagesWithDynamicLogo = [
    "/",
    "/about",
    "/services",
    "/careers",
    "/contact-us",
  ];
  const shouldShowFooterLogo =
    pagesWithDynamicLogo.includes(router.pathname) && !isScrolled;

  const logoSrc = shouldShowFooterLogo ? "/footer-logo.svg" : "/new3logo.png";

  return (
    <Link href="/">
      <div className="flex items-center">
        <Image
          src={logoSrc}
          width={170}
          height={200}
          alt="Mozo Technologies logo"
        />
      </div>
    </Link>
  );
};

export default Brand;
