import Link from "next/link";
import Image from "next/image";
import { montserrat } from "../font";

/**
 * Brand Component
 * Displays the company logo as a clickable link to the homepage.
 * Uses Next.js Image component for optimized image loading.
 */
const Brand = () => (
    <Link href="/">
        <div className="flex items-center">
            <Image
                src="/Mozo-logo.svg"
                width={150} // Increased width for better visibility
                height={100} // Increased height for better visibility
                alt="Mozo Technologies logo"
            />
        </div>
    </Link>
);

export default Brand;