const ServiceIntro = () => (
  <section className="max-w-4xl mx-auto text-center pt-20 md:pt-28 pb-12 bg-gradient-to-b from-white to-gray-50">
    <p className="text-sm text-gray-500 font-medium tracking-widest uppercase mb-3">
      Our Offerings
    </p>
    <h1 className="text-4xl md:text-5xl font-extrabold text-[#1f2937] mb-6 leading-snug">
      Services <span className="text-[#F06A6A]">Tailored</span> for Growth
    </h1>
    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
      Explore the array of solutions we’ve crafted with your success in mind. Our services are designed to elevate your business and propel you toward your goals. Discover how we can be your partner in growth.
    </p>
    {/* I'm removing the "Optimize your time and budget" heading as it feels a bit redundant and the new title covers the benefit-driven aspect. */}
  </section>
);

export default ServiceIntro;