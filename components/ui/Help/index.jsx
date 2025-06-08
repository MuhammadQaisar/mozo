import Image from "next/image"

const Help = () => {
    return (
        <section className="max-w-full bg-white rounded-3xl shadow-lg mx-4 md:mx-8 mt-8 mb-0">
            <div className="flex flex-col lg:flex-row items-stretch">
                {/* Left: Form */}
                <div className="flex-1 p-8 md:p-12">
                    <h2 className="text-xl md:text-2xl font-bold font-[Montserrat] mb-4 text-gray-900">
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
                                    className="w-full rounded-lg bg-[#f8f8f8] px-5 py-4 text-lg text-gray-700 placeholder-gray-400 outline-none border-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone number"
                                    className="w-full rounded-lg bg-[#f8f8f8] px-5 py-4 text-lg text-gray-700 placeholder-gray-400 outline-none border-none"
                                />
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full rounded-lg bg-[#f8f8f8] px-5 py-4 text-lg text-gray-700 placeholder-gray-400 outline-none border-none"
                                />
                            </div>
                            <textarea
                                placeholder="Please describe a little"
                                className="w-full min-h-[160px] rounded-lg bg-[#f8f8f8] px-5 py-4 text-lg text-gray-700 placeholder-gray-400 outline-none border-none resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="flex items-center mt-2"
                        >
                            <span className="block font-medium text-sm text-white transition duration-200 md:inline tracking-widest px-6 py-3 rounded-lg shadow-md bg-[#F06A6A] hover:bg-black hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F06A6A] active:bg-[#F06A6A] active:shadow-lg">
                                Submit
                            </span>
                        </button>
                    </form>
                </div>
                {/* Right: Image */}
                <div className="hidden lg:flex items-end justify-end flex-1 pr-4 pb-4">
                    <Image
                        src="/nadia.png"
                        alt="Help"
                        width={300}
                        height={500}
                        className="object-contain rounded-2xl"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}

export default Help