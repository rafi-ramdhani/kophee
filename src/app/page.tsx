import Image from "next/image";

export default function Home() {
  return (
    <section id="hero" className="h-dvh relative">
      {/* hero section */}
      <div className="relative h-[400px] h-max-[400px] md:lg:h-[700px] md:lg:h-max-[700px]">
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

        <div className="relative flex flex-col justify-between w-full lg:w-fit h-full z-10 pl-10 pr-0 sm:pr-28 pt-10 pb-10 border-r-cream border-r-0 lg:border-r-4 backdrop-blur-lg">
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
  );
}
