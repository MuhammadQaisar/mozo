import Link from "next/link";

/**
 * Hero section matching the provided screenshot:
 * - Black background
 * - Left: headline, description, CTA button
 * - Right: illustration (replace src with your own image if needed)
 */
const Hero = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-black px-6 py-12 mt-16">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 text-left">
          <div className="text-white text-xs mb-3 tracking-widest opacity-80">
            SOCIAL PROOF #1
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 leading-tight">
            End-to-end digital
            <br className="hidden sm:block" /> solutions
          </h1>
          <p className="text-white/80 mb-6 max-w-md">
            “Stop doing X” | “No more Y” | “Pain Point”. Our solution does X, Y, Z
            (articulate main benefit you provide & explain how you do what you
            mentioned in the headline in a proprietary or unique way).
          </p>
          <Link
            href="#"
            className="inline-block bg-[#F06A6A] text-white font-semibold rounded-md px-6 py-3 text-base shadow-md hover:bg-[#d95c5c] transition mb-4"
          >
            BOOK A FREE DEMO
          </Link>
          <div className="text-xs text-white/60 mt-4 tracking-wide">
            REDUCE Friction and FUDs (FEAR, UNCERTAINTY, DOUBTS)
          </div>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/team-meeting.svg"
            alt="Team meeting illustration"
            className="w-full max-w-md"
            style={{ minWidth: 260 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;