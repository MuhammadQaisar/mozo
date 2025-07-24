import SectionWrapper from "../../SectionWrapper"
import { motion } from "framer-motion";

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
    <SectionWrapper className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-900 to-black">
        <h2 className="text-white text-3xl md:text-4xl font-extrabold text-center mb-12 tracking-tight">
            WHAT OUR CLIENTS ARE SAYING
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {testimonials.map((t, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                    className="bg-white rounded-xl shadow-2xl p-8 flex flex-col items-center w-full max-w-sm transform transition-all duration-300 hover:scale-105 hover:shadow-3xl border border-gray-100"
                >
                    {/* Company Logo or Name */}
                    {t.logo ? (
                        <img src={t.logo} alt={t.company} className="h-16 mb-6 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                    ) : (
                        <div className="text-3xl font-bold text-gray-800 mb-6">{t.company}</div>
                    )}
                    {/* Summary */}
                    <p className="text-gray-700 text-center mb-8 text-base leading-relaxed italic">"{t.summary}"</p>
                    {/* Avatar and Name/Title */}
                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-200 w-full justify-center">
                        <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover border-3 border-blue-400 shadow-md" />
                        <div className="text-left">
                            <div className="font-bold text-lg text-gray-900">{t.name}</div>
                            <div className="text-gray-600 text-sm">{t.title}</div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </SectionWrapper>
);

export default Testimonials;