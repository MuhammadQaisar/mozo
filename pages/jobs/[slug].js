import Head from "next/head";
import { getAllJobs, getJobBySlug } from "../../lib/strapi";

const JobPage = ({ job }) => {
    if (!job) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Head>
                <title>{job.attributes.title} | Mozo Technologies</title>
            </Head>
            <main className="bg-gray-50 mt-20">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                        <div className="lg:col-span-2">
                            <h1 className="text-4xl font-bold text-[#1f2937] sm:text-4xl">
                                {job.attributes.title}
                            </h1>
                            <div className="mt-8">
                                <h2 className="text-2xl font-bold text-gray-900">Job Description</h2>
                                <p className="mt-4 text-lg text-gray-600">{job.attributes.description}</p>
                            </div>
                            <div className="mt-8">
                                <h2 className="text-2xl font-bold text-gray-900">Qualifications</h2>
                                <p className="mt-4 text-lg text-gray-600">{job.attributes.qualifications}</p>
                            </div>
                            <div className="mt-8">
                                <h2 className="text-2xl font-bold text-gray-900">Education</h2>
                                <p className="mt-4 text-lg text-gray-600">{job.attributes.education}</p>
                            </div>
                        </div>
                        <div className="mt-12 lg:mt-0">
                            <div className="bg-white shadow-lg rounded-lg p-6">
                                <h2 className="text-2xl font-bold text-gray-900">Apply for this position</h2>
                                <form className="mt-6">
                                    <div className="grid grid-cols-1 gap-y-6">
                                        <div>
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                First Name
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-2 border-gray-400 rounded-md"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Last Name
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-2 border-gray-400 rounded-md"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Email
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-2 border-gray-400 rounded-md"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                                Phone
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    id="phone"
                                                    autoComplete="tel"
                                                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-2 border-gray-400 rounded-md"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                                                Resume/CV
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    id="resume"
                                                    name="resume"
                                                    type="file"
                                                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-2 border-gray-400 rounded-md"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <button
                                            type="submit"
                                            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#F06A6A] hover:bg-[#C04F4F]"
                                        >
                                            Submit Application
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export async function getStaticPaths() {
    const jobs = await getAllJobs();
    const paths = jobs.map((job) => ({
        params: { slug: job.attributes.slug },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const job = await getJobBySlug(params.slug);

    return {
        props: {
            job,
        },
    };
}

export default JobPage;