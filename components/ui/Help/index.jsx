import Image from "next/image"
import SectionWrapper from "../../SectionWrapper";
import { urbanist } from "../font";

const Help = () => {
    return (
        <SectionWrapper className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden p-8 md:p-12 my-40 transition-all duration-300 ease-in-out pointer-events-none">
            <div className="flex flex-col lg:flex-row items-stretch">
                {/* Left: Form */}
                <div className="flex-1">
                    <h2 className={`text-3xl md:text-4xl font-bold ${urbanist.className} mb-4 text-gray-900`}>
                        Tell Us How We Can <span className="text-[#F06A6A]">Help?</span>
                    </h2>
                    <p className="text-gray-700 text-lg mb-8">
                        Describe your request — we typically respond within a couple of business hours.
                    </p>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full rounded-lg bg-[#f8f8f8] px-5 py-4 text-lg text-gray-700 placeholder-gray-400 outline-none border border-gray-200 focus:ring-2 focus:ring-[#F06A6A] focus:border-transparent transition duration-200 pointer-events-auto"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone number"
                                    className="w-full rounded-lg bg-[#f8f8f8] px-5 py-4 text-lg text-gray-700 placeholder-gray-400 outline-none border border-gray-200 focus:ring-2 focus:ring-[#F06A6A] focus:border-transparent transition duration-200 pointer-events-auto"
                                />
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full rounded-lg bg-[#f8f8f8] px-5 py-4 text-lg text-gray-700 placeholder-gray-400 outline-none border border-gray-200 focus:ring-2 focus:ring-[#F06A6A] focus:focus:border-transparent transition duration-200 pointer-events-auto"
                                />
                            </div>
                            <textarea
                                placeholder="Please describe a little"
                                className="w-full min-h-[160px] rounded-lg bg-[#f8f8f8] px-5 py-4 text-lg text-gray-700 placeholder-gray-400 outline-none border border-gray-200 resize-none focus:ring-2 focus:ring-[#F06A6A] focus:border-transparent transition duration-200 pointer-events-auto"
                            />
                        </div>
                        <button
                            type="submit"
                            className="relative group flex items-center justify-center mt-2 px-8 py-4 rounded-lg shadow-md bg-[#F06A6A] hover:bg-black hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F06A6A] active:bg-[#F06A6A] active:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 overflow-hidden pointer-events-auto"
                        >
                            <span className="block font-medium text-base text-white tracking-widest transition-transform duration-300 ease-in-out transform group-hover:-translate-x-6">
                                Submit
                            </span>
                            <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform group-hover:translate-x-0">
                                <Image src="/icons/arrow-right.svg" alt="Forward" width={24} height={24} />
                            </span>
                        </button>
                    </form>
                </div>
                {/* Right: Image */}
                <div className="flex items-center justify-center flex-1 p-8 bg-gray-50 rounded-3xl mt-8 lg:mt-0">
                    <Image
                        src="/nadia.png"
                        alt="Help"
                        width={400}
                        height={600}
                        className="object-contain rounded-2xl shadow-md"
                        priority
                    />
                </div>
            </div>
        </SectionWrapper>
    )
}

export default Help