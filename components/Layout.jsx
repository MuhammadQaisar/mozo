import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"
import { montserrat } from "./ui/font"
import { useEffect } from "react"
import Help from "./ui/Help"


const Layout = ({ children }) => {
    useEffect(() => {
        // Create cursor elements
        const cursor = document.createElement("div");
        const cursorDot = document.createElement("div");

        cursor.id = "custom-cursor";
        cursorDot.id = "custom-cursor-dot";

        // Style for the outer ring
        Object.assign(cursor.style, {
            position: "fixed",
            top: "0px",
            left: "0px",
            width: "48px",
            height: "48px",
            border: "2px solid #7c3aed",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: "9999",
            transition: "transform 0.15s cubic-bezier(.4,2,.6,1)",
            background: "transparent",
            mixBlendMode: "exclusion",
        });

        // Style for the inner dot
        Object.assign(cursorDot.style, {
            position: "fixed",
            top: "0px",
            left: "0px",
            width: "12px",
            height: "12px",
            background: "#3b22f6",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: "10000",
            transition: "transform 0.08s cubic-bezier(.4,2,.6,1)",
            mixBlendMode: "exclusion",
        });

        document.body.appendChild(cursor);
        document.body.appendChild(cursorDot);

        const moveCursor = (e) => {
            cursor.style.transform = `translate(${e.clientX - 24}px, ${e.clientY - 24}px)`;
            cursorDot.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
        };

        document.addEventListener("mousemove", moveCursor);

        // Hide default cursor
        document.body.style.cursor = "none";

        return () => {
            document.removeEventListener("mousemove", moveCursor);
            document.body.style.cursor = "";
            cursor.remove();
            cursorDot.remove();
        };
    }, []);

    return (
        <>
            <Head>
                <title>Mozo Technologies</title>
                <meta name="description" content="Mozo Technologies empowers businesses worldwide with cutting‑edge IT services in Data & AI, Web Development, UI/UX, CloudOps, Digital Marketing and DevOps." />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
                
                {/* SEO Meta Tags */}
                <meta name="keywords" content="IT services, Data & AI, Web Development, UI/UX Design, CloudOps, Digital Marketing, DevOps, Technology Solutions, Software Development" />
                <meta name="author" content="Mozo Technologies" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="7 days" />
                <meta name="distribution" content="global" />
                <meta name="rating" content="general" />
                
                {/* Open Graph Meta Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Mozo Technologies - Cutting-Edge IT Services" />
                <meta property="og:description" content="Mozo Technologies empowers businesses worldwide with cutting‑edge IT services in Data & AI, Web Development, UI/UX, CloudOps, Digital Marketing and DevOps." />
                <meta property="og:image" content="/Mozo-logo.svg" />
                <meta property="og:url" content="https://mozotechnologies.com" />
                <meta property="og:site_name" content="Mozo Technologies" />
                <meta property="og:locale" content="en_US" />
                
                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Mozo Technologies - Cutting-Edge IT Services" />
                <meta name="twitter:description" content="Mozo Technologies empowers businesses worldwide with cutting‑edge IT services in Data & AI, Web Development, UI/UX, CloudOps, Digital Marketing and DevOps." />
                <meta name="twitter:image" content="/Mozo-logo.svg" />
                <meta name="twitter:site" content="@mozotechnologies" />
                <meta name="twitter:creator" content="@mozotechnologies" />
                
                {/* Additional SEO Tags */}
                <meta name="theme-color" content="#7c3aed" />
                <meta name="msapplication-TileColor" content="#7c3aed" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Mozo Technologies" />
                
                {/* Canonical URL */}
                <link rel="canonical" href="https://mozotechnologies.com" />
                
                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Mozo Technologies",
                            "description": "Mozo Technologies empowers businesses worldwide with cutting‑edge IT services in Data & AI, Web Development, UI/UX, CloudOps, Digital Marketing and DevOps.",
                            "url": "https://mozotechnologies.com",
                            "logo": "https://mozotechnologies.com/Mozo-logo.svg",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+1-555-000-0000",
                                "contactType": "customer service",
                                "email": "team@mozotechnologies.com"
                            },
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Sarai Kharbuza, Opposite to E-16, GT Road",
                                "addressLocality": "Islamabad",
                                "addressCountry": "Pakistan"
                            },
                            "sameAs": [
                                "https://twitter.com/mozotechnologies",
                                "https://linkedin.com/company/mozotechnologies"
                            ],
                            "services": [
                                "Data & AI",
                                "Web Development",
                                "UI/UX Design",
                                "CloudOps",
                                "Digital Marketing",
                                "DevOps"
                            ]
                        })
                    }}
                />
            </Head>
            <div className={`${montserrat.className}`} style={{ WebkitTapHighlightColor: "transparent" }}>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}

export default Layout