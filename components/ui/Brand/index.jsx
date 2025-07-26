import Link from "next/link";
import Image from "next/image";

/**
 * Brand Component
 * Displays the company logo as a clickable link to the homepage.
 * Uses Next.js Image component for optimized image loading.
 */
const Brand = () => (
    // Link component from Next.js for client-side navigation to the homepage.
    <Link href="/">
        {/* Next.js Image component for displaying the logo. */}
        <Image
            src="/Mozo-logo.svg" // Source path of the logo image.
            width={150} // Intrinsic width of the image for optimization.
            height={60} // Intrinsic height of the image for optimization.
            alt="Mozo Technologies logo" // Alt text for accessibility.
        />
    </Link>
);

export default Brand;