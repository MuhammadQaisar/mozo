import Link from "next/link";
import Image from "next/image";

/**
 * Brand Component
 * Displays the company logo as a clickable link to the homepage.
 * Uses Next.js Image component for optimized image loading.
 */
const Brand = () => (
    <Link href="/">
        <Image
            src="/Mozo-logo.svg"
            width={180} // Increased width for better visibility
            height={72} // Increased height for better visibility
            alt="Mozo Technologies logo"
        />
    </Link>
);

export default Brand;