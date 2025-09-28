import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"
import { montserrat } from "./ui/font"

import Help from "./ui/Help"


const Layout = ({ children }) => {
    

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
            <main className={`${montserrat.className}`} style={{ WebkitTapHighlightColor: "transparent" }}>
                <Navbar />
                {children}
                <Footer />
            </main>
        </>
    )
}

export default Layout