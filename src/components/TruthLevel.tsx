import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function Truthlevel() {
  const router = useRouter();

  const artworks = [
    {
      title: "Icebreaker",
      image:
        "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/2/artwork-1.png",
      description: "Nothing too serious",
    },
    {
      title: "Who questions",
      image:
        "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/2/artwork-1.png",
      description: "Who is more likely to do something?",
    },
    {
      title: "Juciest",
      image:
        "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/hero/2/artwork-2.png",
      description: "The juciest and spiciest question ready for you",
    },
  ];

  return (
    <div className="mt-12  py-14  bg-[#F5DEB3] lg:mt-0 lg:w-full px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {artworks.map((artwork, index) => (
          <div
            key={index}
            className="overflow-hidden transform transition-transform duration-300 hover:scale-105 bg-[#E5C19F] hover:cursor-pointer rounded shadow-xl"
          >
            <div className="aspect-w-4 aspect-h-3">
              <img
                className="object-cover w-full h-full"
                src={artwork.image}
                alt={artwork.title}
              />
            </div>
            <div className="p-4">
              <p className="text-base font-bold text-gray-900">
                {artwork.title}
              </p>
              <p
                className={`${rubik.className} mt-2 text-lg font-medium tracking-widest text-gray-800 uppercase`}
              >
                {artwork.description}
              </p>

              <div className="mt-3">
                <Button
                  className="w-full text-sm py-1"
                  onClick={() => {
                    switch (artwork.title) {
                      case "Icebreaker":
                        router.push("/truth/icebreaker");
                        break;
                      case "Who questions":
                        router.push("/truth");
                        break;
                      case "Juciest":
                        router.push("/dad");
                        break;
                    }
                  }}
                >
                  Select
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
