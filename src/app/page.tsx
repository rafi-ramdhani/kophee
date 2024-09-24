import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <section id="hero" className="relative">
        {/* hero section */}
        <div className="relative h-[400px] h-max-[400px] md:lg:h-[600px] md:lg:h-max-[600px]">
          {/* image container */}
          <div className="w-full h-full h-max-full absolute z-0 top-0 left-0">
            <Image
              priority
              fill
              className="object-cover"
              src="/coffee-hero-image.webp"
              alt="Kophee Hero Section Background Image"
            />
          </div>

          <div className="relative flex flex-col justify-between w-full lg:w-fit h-full z-10 pl-10 pr-0 sm:pr-28 pt-10 pb-10 border-r-cream border-r-0 lg:border-r-8 backdrop-blur-lg">
            <div className="flex flex-col">
              <h1 className="text-espresso font-bold text-6xl sm:text-8xl lg:text-9xl">
                Kophee
              </h1>
              <button className="relative z-10 h-12 w-fit flex items-center justify-center gap-2 self-start lg:self-end pl-8 pr-6 bg-cream text-mocha-brown hover:opacity-80 active:opacity-90 mt-10">
                <h2>Explore</h2>
                <h2>&rarr;</h2>
              </button>
            </div>

            <div className="mt-10">
              <h2 className="text-espresso text-lg sm:text-xl lg:text-2xl font-bold italic">
                “Brewed to Perfection,
              </h2>
              <h2 className="text-cream text-lg sm:text-xl lg:text-2xl font-bold italic ml-20">
                Crafted with Care”
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section id="about-us" className="relative pt-20 pb-20">
        <div className="flex flex-col items-center">
          <h2 className="text-mocha-brown text-3xl lg:text-6xl font-bold">
            About Us
          </h2>
          <div className="flex gap-2">
            <div className="border-b-mocha-brown border-b-2 w-[100px] mt-1 mb-4" />
            <div className="border-b-mocha-brown border-b-2 w-[10px] mt-1 mb-4" />
            <div className="border-b-mocha-brown border-b-2 w-[4px] mt-1 mb-4" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-8 mt-10 lg:h-[600px]">
          <div className="relative h-[300px] lg:h-[600px] min-h-[300px] w-full lg:w-[400px] lg:rounded-l-[600px] overflow-hidden border-l-mocha-brown lg:border-l-[10px]">
            <Image
              fill
              sizes="400px"
              className="object-cover"
              src="/about-image.webp"
              alt="Kophee Hero Section Background Image"
            />
          </div>
          <div className="w-full lg:w-[600px] pt-6 pb-6 h-full flex justify-center items-center lg:rounded-r-[600px] border-r-mocha-brown lg:border-r-[10px] bg-mocha-brown lg:bg-transparent">
            <p className="text-cream lg:text-mocha-brown text-base lg:text-xl w-10/12 text-center lg:text-left">
              At <strong>Kophee</strong>, we believe that every cup of coffee
              tells a story. Founded with a passion for the perfect brew, our
              journey began with a simple idea: to create a welcoming space
              where coffee lovers and friends can gather to enjoy expertly
              crafted drinks. From our sustainably sourced beans to our locally
              baked pastries, every detail reflects our commitment to quality
              and community. Whether you’re here for a morning pick-me-up or an
              afternoon escape, we’re dedicated to brewing happiness, one cup at
              a time. Come visit us, and experience the warmth of our shop—where
              every sip is savored, and every guest is part of the family.
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
