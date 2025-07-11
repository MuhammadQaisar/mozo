import SectionWrapper from "../../SectionWrapper"

const testimonials = [
    {
        logo: "/logos/muxilite.jpg", // Replace with your logo path
        company: "MUXILITE",
        summary: "Struggling with low conversions or looking to boost them before a big ad campaign? We provide one-time detailed data audits, delivering a 60-page report of insights and actionable mockups",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        name: "Rasheeda",
        title: "Founder MuxiLite"
    },
    {
        logo: "/logos/alkassib.png", // Replace with your logo path
        company: "ALKASSIB",
        summary: "Struggling with low conversions or looking to boost them before a big ad campaign? We provide one-time detailed data audits, delivering a 60-page report of insights and actionable mockups",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "Kashif Raheem",
        title: "CEO Alkassib"
    },
    {
        logo: "/logos/taus.jpg", // Replace with your logo path
        company: "Taus Enterprises",
        summary: "Struggling with low conversions or looking to boost them before a big ad campaign? We provide one-time detailed data audits, delivering a 60-page report of insights and actionable mockups",
        avatar: "https://randomuser.me/api/portraits/men/65.jpg",
        name: "Tahir Mehmood",
        title: "CEO Taus Enterprises"
    }
];

const Testimonials = () => (
    <SectionWrapper className="py-16 px-2 md:px-8" style={{ background: "#111" }}>
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12 font-[Montserrat]">
            WHAT OUR CLIENTS ARE SAYING
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {testimonials.map((t, idx) => (
                <div
                    key={idx}
                    className="bg-white rounded-md shadow-lg p-8 flex flex-col items-center w-full max-w-xs"
                >
                    {/* Company Logo or Name */}
                    {t.logo ? (
                        <img src={t.logo} alt={t.company} className="h-12 mb-4 object-contain" />
                    ) : (
                        <div className="text-2xl font-bold mb-4">{t.company}</div>
                    )}
                    {/* Summary */}
                    <p className="text-gray-800 text-center mb-6 text-sm">{t.summary}</p>
                    {/* Avatar and Name/Title */}
                    <div className="flex items-center gap-3 mt-auto">
                        <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-gray-200" />
                        <div>
                            <div className="font-bold text-black">{t.name}</div>
                            <div className="text-gray-700 text-sm">{t.title}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </SectionWrapper>
);

export default Testimonials;