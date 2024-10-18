import React from "react";

const Hero = () => {
  return (
    <div className="relative py-12 overflow-hidden bg-[#F5DEB3] sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="max-w-md mx-auto text-center lg:text-left lg:max-w-xl lg:mx-0 lg:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:leading-tight xl:text-6xl">
              Level up ✨ your drinking game
            </h1>
            <p className="mt-5 text-2xl font-bold text-gray-900 lg:mt-8">
              The juciest and spiciest question ready for you
            </p>

            <div className="mt-8 lg:mt-12">
              <svg
                className="w-auto h-4 mx-auto text-gray-300 lg:mx-0"
                viewBox="0 0 172 16"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG content */}
              </svg>
            </div>

            <div className="inline-grid grid-cols-2 mt-8 gap-x-8">
              <div>
                <p className="text-4xl font-bold text-gray-900">50k+</p>
                <p className="mt-2 text-base font-bold text-gray-700">
                  Games Played
                </p>
              </div>

              <div>
                <p className="text-4xl font-bold text-gray-900">17k+</p>
                <p className="mt-2 text-base font-bold text-gray-700">Drunks</p>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:w-3/5 lg:pl-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {[
                {
                  title: "Truth",
                  image:
                    "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/2/artwork-1.png",
                  price: "2.00 ETH",
                  usdPrice: "($9,394)",
                },
                {
                  title: "Dare",
                  image:
                    "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/2/artwork-2.png",
                  price: "1.67 ETH",
                  usdPrice: "($7,627)",
                },
              ].map((artwork, index) => (
                <div
                  key={index}
                  className="overflow-hidden bg-[#E5C19F] rounded shadow-xl"
                >
                  <div className="aspect-w-4  aspect-h-3">
                    <img
                      className="object-cover w-full h-full"
                      src={artwork.image}
                      alt={artwork.title}
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-lg font-bold text-gray-900">
                      {artwork.title}
                    </p>
                    <p className="mt-4 text-xs font-medium tracking-widest text-gray-500 uppercase">
                      Reserved Price
                    </p>
                    <div className="flex items-end mt-1">
                      <p className="text-lg font-bold text-gray-900">
                        {artwork.price}
                      </p>
                      <p className="ml-2 text-sm font-medium text-gray-500">
                        {artwork.usdPrice}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 mt-5 gap-x-4">
                      <a
                        href="#"
                        title=""
                        className="inline-flex items-center justify-center px-4 py-3 text-sm font-bold text-white transition-all duration-200 bg-gray-900 border border-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                        role="button"
                      >
                        Place a bid
                      </a>
                      <a
                        href="#"
                        title=""
                        className="inline-flex items-center justify-center px-4 py-3 text-sm font-bold text-gray-900 transition-all duration-200 bg-transparent border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        role="button"
                      >
                        View artwork
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
