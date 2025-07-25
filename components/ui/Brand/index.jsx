import Link from "next/link";
import Image from "next/image";

const Brand = () => (
    <Link href="/">
        <Image
            src="/Mozo-logo.svg"
            width={150}
            height={60}
            alt="Mozo Technologies logo"
            
        />
    </Link>
)
export default Brand