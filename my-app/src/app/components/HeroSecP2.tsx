
import React from 'react';

const HeroSecP2: React.FC = () => {
  return (
    <div className="w-full py-[3rem] min-h-[100vh] md:flex gap-16 items-center justify-center px-8 lg:px-16 bg-[#FAF4F4]">
      {/* Side Table Section */}
      <section className="md:w-1/2 flex flex-col justify-center items-center gap-4 relative">
        <img
          src="/images/table1.png"
          className="object-cover size-full overflow-hidden transition-transform duration-300 ease-in-out hover:translate-y-4"
          style={{
            transform: 'translateY(-3%)', // Initial position: 3% up
          }}
          alt="Side Table"
        />
        <h2 className="text-3xl tracking-wider font-bold">Side Table</h2>
        <div className="relative group">
          <a
            href="#"
            className="text-lg font-semibold text-black px-6 py-2 rounded-lg transition-transform duration-300 ease-in-out group-hover:bg-[#E5E5E5]" // Light background on hover
          >
            View More
          </a>
          <span
            className="block w-full h-[2px] bg-black mt-2 transition-all duration-300 ease-in-out group-hover:bg-[#E5E5E5]" // Underline with matching hover background
          ></span>
        </div>
      </section>

      {/* Corner Sofa Section */}
      <section className="md:w-1/2 flex flex-col justify-center items-center gap-4 relative">
        <img
          src="/images/table2.png"
          className="object-cover overflow-hidden transition-transform duration-300 ease-in-out hover:translate-y-4"
          style={{
            transform: 'translateX(-8%) translateY(5%)', // Initial position: 8% left, 5% down
          }}
          alt="Corner Sofa"
        />
        <h2 className="text-3xl tracking-wider font-bold">Corner Sofa</h2>
        <div className="relative group">
          <a
            href="#"
            className="text-lg font-semibold text-black px-6 py-2 rounded-lg transition-transform duration-300 ease-in-out group-hover:bg-[#E5E5E5]" // Light background on hover
          >
            View More
          </a>
          <span
            className="block w-full h-[2px] bg-black mt-2 transition-all duration-300 ease-in-out group-hover:bg-[#E5E5E5]" // Underline with matching hover background
          ></span>
        </div>
      </section>
    </div>
  );
};

export default HeroSecP2;
