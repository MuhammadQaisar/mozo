import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";




export const jobs = [
    {
        title: "Junior DevOps Engineer",
        location: "Remote",
        type: "Full-time",
        description: "We are looking for a Junior DevOps Engineer to join our team. This is a great opportunity for someone who is passionate about automation and cloud technologies.",
        qualifications: "1+ years of experience with AWS, Docker, and Kubernetes. Experience with CI/CD pipelines.",
        education: "Bachelor's degree in Computer Science or related field.",
        slug: "junior-devops-engineer",
    },
    {
        title: "Lead DevOps Engineer",
        location: "Remote",
        type: "Full-time",
        description: "We are looking for a Lead DevOps Engineer to join our team. You will be responsible for leading our DevOps team and mentoring junior engineers.",
        qualifications: "5+ years of experience with AWS, Docker, and Kubernetes. Experience with CI/CD pipelines. Experience with infrastructure as code (Terraform, CloudFormation).",
        education: "Bachelor's degree in Computer Science or related field.",
        slug: "lead-devops-engineer",
    },
    {
        title: "Technical Project Manager",
        location: "Remote",
        type: "Full-time",
        description: "We are looking for a Technical Project Manager to join our team. You will be responsible for managing our software development projects from start to finish.",
        qualifications: "3+ years of experience as a project manager in a software development environment. Experience with Agile methodologies.",
        education: "Bachelor's degree in Computer Science or related field.",
        slug: "technical-project-manager",
    },
    {
        title: "Client Aquisition Specialist",
        location: "Remote",
        type: "Full-time",
        description: "We are looking for a Client Aquisition Specialist to join our team. You will be responsible for generating new leads and closing deals.",
        qualifications: "2+ years of experience in sales or business development. Excellent communication and negotiation skills.",
        education: "Bachelor's degree in Business Administration or related field.",
        slug: "client-aquisition-specialist",
    },
    {
        title: "Full Stack Developer",
        location: "Remote",
        type: "Full-time",
        description: "We are looking for a Full Stack Developer to join our team. You will be responsible for developing and maintaining our web applications.",
        qualifications: "3+ years of experience with React, Node.js, and MongoDB. Experience with Next.js is a plus.",
        education: "Bachelor's degree in Computer Science or related field.",
        slug: "full-stack-developer",
    },
    {
        title: "Digital Marketing Specialist",
        location: "Remote",
        type: "Full-time",
        description: "We are looking for a Digital Marketing Specialist to join our team. You will be responsible for managing our social media accounts and creating marketing campaigns.",
        qualifications: "2+ years of experience in digital marketing. Experience with SEO, SEM, and social media marketing.",
        education: "Bachelor's degree in Marketing or related field.",
        slug: "digital-marketing-specialist",
    },
    {
        title: "Apply for Internship",
        location: "Remote",
        type: "Internship",
        description: "We are looking for interns to join our team. This is a great opportunity to gain experience in a fast-paced startup environment.",
        qualifications: "Currently enrolled in a Bachelor's or Master's degree program in Computer Science, Marketing, or Business.",
        education: "N/A",
        slug: "apply-for-internship",
    },
];

const Careers = () => {
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

    return (
        <>
            <Head>
                <title>Careers | Mozo Technologies</title>
                <meta name="description" content="Join our team at Mozo Technologies. Explore our open positions and apply today." />
            </Head>
            <main className="bg-gray-50 mb-5">
               

              

                
                {/* Job Openings Section */}
                <section className="py-4 lg:py-8 bg-gray-50 mb-4"> {/* Reduced padding here */}
                    <div className="block mx-auto w-fit px-3 py-1.5 bg-[#1f2937] rounded-full mb-6 mt-20">
                        <span className="w-2 h-2 bg-[#F06A6A] rounded-full mr-2.5 animate-pulse"></span>
                        <span className="text-xs font-medium text-white uppercase tracking-wider">Careers</span>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                                Explore Our <span className="text-[#F06A6A]">Open Positions</span>
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Find your next career opportunity and join our growing team.
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {jobs.map((job, idx) => (
                                <motion.div
                                    key={job.title}
                                    className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
                                    variants={itemVariants}
                                >
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                                        <p className="text-gray-600 text-sm mb-4">{job.description}</p>
                                        <div className="flex items-center text-gray-600 text-sm mb-2">
                                            <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600 text-sm mb-4">
                                            <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <span>{job.type}</span>
                                        </div>
                                    </div>
                                    <div className="mt-auto">
                                        <Link href={`/jobs/${job.slug}`}
                                            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#F06A6A] hover:bg-[#C04F4F] transition-colors duration-300"
                                        >
                                            Apply Now
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                

            </main>
        </>
    );
};

export default Careers;

export async function getStaticProps() {
    return {
        props: {
            jobs,
        },
    };
}