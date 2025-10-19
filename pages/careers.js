import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import CareersHero from "../components/CareersHero";
import { urbanist } from "../components/ui/font";
import { getAllJobs } from "../lib/strapi";
import { useState } from "react";

const Careers = ({ jobs }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [locationFilter, setLocationFilter] = useState("All Locations");
    const [typeFilter, setTypeFilter] = useState("All Types");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const filteredJobs = jobs.filter((job) => {
        const searchMatch = job.attributes.title.toLowerCase().includes(searchQuery.toLowerCase());
        const locationMatch = locationFilter === "All Locations" || job.attributes.location === locationFilter;
        const typeMatch = typeFilter === "All Types" || job.attributes.type === typeFilter;
        return searchMatch && locationMatch && typeMatch;
    });

    return (
        <>
            <Head>
                <title>Careers | Mozo Technologies</title>
                <meta name="description" content="Join our team at Mozo Technologies. Explore our open positions and apply today." />
            </Head>
            <main className="bg-gray-50 mb-5">
               <CareersHero />
                {/* Job Openings Section */}
                <section className="pt-0 pb-4 lg:pb-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7 }}
                            className="text-center mb-12"
                        >
                            <h2 className={`text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 ${urbanist.className}`}>
                                Explore Our <span className="text-[#F06A6A]">Open Positions</span>
                            </h2>
                            <p className="text-medium text-gray-600 max-w-2xl mx-auto">
                                Find your next career opportunity and join our growing team.
                            </p>
                        </motion.div>

                        {/* Search and Filter */}
                        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-center">
                            <input
                                type="text"
                                placeholder="Search for jobs"
                                className="w-full md:w-1/2 lg:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F06A6A]"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <select 
                                className="w-full md:w-1/4 lg:w-1/6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F06A6A]"
                                value={locationFilter}
                                onChange={(e) => setLocationFilter(e.target.value)}
                            >
                                <option>All Locations</option>
                                <option>Remote</option>
                            </select>
                            <select 
                                className="w-full md:w-1/4 lg:w-1/6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F06A6A]"
                                value={typeFilter}
                                onChange={(e) => setTypeFilter(e.target.value)}
                            >
                                <option>All Types</option>
                                <option>Full-time</option>
                                <option>Internship</option>
                            </select>
                        </div>

                        <motion.div
                            className="grid grid-cols-1 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {filteredJobs.length > 0 ? (
                                filteredJobs.map((job) => (
                                    <motion.div
                                        key={job.id}
                                        className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col md:flex-row"
                                        variants={itemVariants}
                                    >
                                        <div className="p-6 flex-grow">
                                            <h3 className={`text-2xl font-bold text-gray-900 mb-3 ${urbanist.className}`}>{job.attributes.title}</h3>
                                            <div className="flex items-center text-gray-500 text-sm mb-4">
                                                <div className="flex items-center mr-6">
                                                    <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <span>{job.attributes.location}</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                    <span>{job.attributes.type}</span>
                                                </div>
                                            </div>
                                            <p className={`text-gray-600 text-base mb-6 ${urbanist.className}`}>{job.attributes.description}</p>
                                        </div>
                                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex flex-col justify-center items-center md:w-1/4 md:border-t-0 md:border-l">
                                            <Link href={`/jobs/${job.attributes.slug}`} className="py-3 px-8 bg-[#F06A6A] text-white font-semibold rounded-lg hover:bg-[#D05A5A] transition-colors duration-300 mb-2">
                                                Apply Now
                                            </Link>
                                            <Link href={`/jobs/${job.attributes.slug}`} className="text-[#F06A6A] font-semibold hover:underline text-sm">
                                                View Details
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="text-center py-12">
                                    <h3 className={`text-2xl font-bold text-gray-900 mb-3 ${urbanist.className}`}>
                                        No Jobs Found
                                    </h3>
                                    <p className="text-gray-600">
                                        No open positions match your search criteria. Please try again.
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </section>

                {/* Why Join Us Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7 }}
                            className="text-center mb-12"
                        >
                            <h2 className={`text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 ${urbanist.className}`}>
                                Why Join <span className="text-[#F06A6A]">Our Team?</span>
                            </h2>
                            <p className="text-medium text-gray-600 max-w-2xl mx-auto">
                                We are a team of passionate individuals who are dedicated to making a difference.
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <motion.div variants={itemVariants}>
                                <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Growth Opportunities</h3>
                                    <p className="text-gray-600 text-sm">We invest in our employees' growth and provide them with the tools and resources they need to succeed.</p>
                                </div>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Great Culture</h3>
                                    <p className="text-gray-600 text-sm">We foster a collaborative and inclusive work environment where everyone's voice is heard.</p>
                                </div>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Competitive Benefits</h3>
                                    <p className="text-gray-600 text-sm">We offer a competitive salary, health insurance, and other benefits to our employees.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                

            </main>
        </>
    );
};

export default Careers;

export async function getStaticProps() {
    const jobs = await getAllJobs();
    return {
        props: {
            jobs,
        },
        revalidate: 1,
    };
}