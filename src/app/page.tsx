import Image from "next/image";
import { Fragment } from "react";

const MENU = {
  food: [
    {
      name: "Croissant",
      src: "/croissant.webp",
      description: "Flaky, buttery croissant served warm.",
      price: 3.0,
    },
    {
      name: "Muffin (Blueberry/Chocolate Chip)",
      src: "/muffin.webp",
      description:
        "Freshly baked muffins with your choice of blueberry or chocolate chip.",
      price: 2.75,
    },
    {
      name: "Avocado Toast",
      src: "/avocado-toast.webp",
      description:
        "Smashed avocado on toasted artisan bread, topped with a sprinkle of sea salt and chili flakes.",
      price: 6.0,
    },
    {
      name: "Bagel with Cream Cheese",
      src: "/bagel-with-cream-cheese.webp",
      description:
        "Toasted bagel served with a generous spread of cream cheese.",
      price: 3.5,
    },
    {
      name: "Breakfast Sandwich",
      src: "/breakfast-sandwich.webp",
      description:
        "Egg, cheese, and your choice of bacon or sausage on a toasted English muffin.",
      price: 5.5,
    },
    {
      name: "Quiche (Spinach & Cheese)",
      src: "/quiche.webp",
      description:
        "A slice of homemade quiche with spinach, cheese, and a buttery crust.",
      price: 4.5,
    },
    {
      name: "Granola Parfait",
      src: "/granola-parfait.webp",
      description:
        "Layers of creamy yogurt, fresh berries, and crunchy granola.",
      price: 5.0,
    },
    {
      name: "Toast with Jam",
      src: "/toast-with-jam.webp",
      description:
        "Thick slices of artisan bread, toasted and served with homemade jam.",
      price: 2.75,
    },
    {
      name: "Banana Bread",
      src: "/banana-bread.webp",
      description: "Moist and flavorful banana bread, baked with walnuts.",
      price: 3.0,
    },
    {
      name: "Fruit Salad",
      src: "/fruit-salad.webp",
      description:
        "A refreshing mix of seasonal fruits served with a side of honey.",
      price: 4.25,
    },
  ],
  beverage: [
    {
      name: "Espresso",
      src: "/espresso.webp",
      description:
        "A rich and bold shot of espresso made from freshly ground beans.",
      price: 2.5,
    },
    {
      name: "Americano",
      src: "/americano.webp",
      description:
        "Espresso diluted with hot water for a smooth, robust flavor.",
      price: 3.0,
    },
    {
      name: "Cappuccino",
      src: "/cappuccino.webp",
      description:
        "A perfect balance of espresso, steamed milk, and a thick layer of foam.",
      price: 3.75,
    },
    {
      name: "Latte",
      src: "/latte.webp",
      description: "Creamy steamed milk blended with a shot of espresso.",
      price: 4.0,
    },
    {
      name: "Mocha",
      src: "/mocha.webp",
      description: "A delicious mix of espresso, chocolate, and steamed milk.",
      price: 4.25,
    },
    {
      name: "Iced Coffee",
      src: "/iced-coffee.webp",
      description:
        "Chilled brewed coffee served over ice, perfect for a hot day.",
      price: 3.5,
    },
    {
      name: "Cold Brew",
      src: "/cold-brew.webp",
      description: "Slow-steeped coffee for a smooth, refreshing cold drink.",
      price: 4.5,
    },
    {
      name: "Chai Latte",
      src: "/chai-latte.webp",
      description:
        "Spiced tea concentrate mixed with steamed milk for a warm, comforting drink.",
      price: 4.25,
    },
    {
      name: "Matcha Latte",
      src: "/matcha-latte.webp",
      description:
        "Green tea powder whisked with steamed milk for a refreshing, earthy flavor.",
      price: 4.5,
    },
    {
      name: "Hot Chocolate",
      src: "/hot-chocolate.webp",
      description:
        "Rich chocolatey drink, perfect for kids or the young at heart.",
      price: 3.5,
    },
  ],
};

const AboutUsTitle = ({ isFirstOne = false }: { isFirstOne?: boolean }) => {
  return (
    <div
      className={`${isFirstOne ? "hidden lg:flex" : "flex lg:hidden"} flex-col items-center`}
    >
      <h2 className="text-mocha-brown text-3xl lg:text-6xl font-bold">
        About Us
      </h2>
      <div className="flex gap-2">
        <div className="border-b-mocha-brown border-b-2 w-[100px] mt-1 mb-4" />
        <div className="border-b-mocha-brown border-b-2 w-[10px] mt-1 mb-4" />
        <div className="border-b-mocha-brown border-b-2 w-[4px] mt-1 mb-4" />
      </div>
    </div>
  );
};

const Menu = ({ type }: { type: "food" | "beverage" }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 mt-20">
      <h3 className="text-cream font-bold text-2xl md:text-3xl min-w-[200px] capitalize">
        {type}s
      </h3>
      <div className="flex flex-col gap-16 lg:gap-10">
        {MENU[type].map((item) => {
          return (
            <div
              key={item.name}
              className="flex flex-col gap-4 md:flex-row md:gap-20"
            >
              <div className="relative w-[150px] h-[150px] min-w-[150px] min-h-[150px] md:w-[200px] md:h-[200px] md:min-w-[200px] md:min-h-[200px] border-l-warm-gray border-l-4 border-b-warm-gray border-b-4">
                <Image
                  fill
                  sizes="150px"
                  src={item.src}
                  alt={item.name}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-cream font-bold text-base md:text-xl">
                  {item.name}
                </h4>
                <p className="text-cream font-normal text-sm md:text-lg italic">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <Fragment>
      <section id="hero" className="relative">
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

      <section id="about-us" className="relative bg-cream pt-32 lg:pt-52 pb-20">
        <AboutUsTitle isFirstOne />
        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-8 lg:mt-10 lg:h-[600px]">
          <div className="relative h-[300px] lg:h-[600px] min-h-[300px] w-full lg:w-[400px] lg:rounded-l-[600px] overflow-hidden border-l-mocha-brown lg:border-l-[10px]">
            <Image
              fill
              sizes="400px"
              className="object-cover"
              src="/about-image.webp"
              alt="Kophee Hero Section Background Image"
            />
          </div>
          <div className="w-full lg:w-[600px] pt-6 pb-20 lg:pb-6 h-full flex flex-col lg:flex-row justify-center items-center lg:rounded-r-[600px] border-r-mocha-brown lg:border-r-[10px] bg-espresso lg:bg-transparent">
            <AboutUsTitle />
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

      <section
        id="menu"
        className="w-full lg:w-10/12 max-w-[1600px] ml-auto bg-olive-green pb-20 pt-20 pl-10 pr-10 mt-40"
      >
        <h2 className="text-cream font-bold text-6xl md:text-8xl">Menu</h2>
        <div className="flex flex-col gap-4">
          <div className="w-full border-b-2 border-cream"></div>
          <div className="w-full border-b-2 border-cream translate-x-10"></div>
        </div>
        <Menu type="beverage" />
        <div className="w-full border-b-2 border-cream translate-x-10 mt-10"></div>
        <Menu type="food" />
      </section>
    </Fragment>
  );
}
