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
                <meta name='description' content='Mozo Technologies making it simple for you to build and grow your SaaS applications, or any business idea' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
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