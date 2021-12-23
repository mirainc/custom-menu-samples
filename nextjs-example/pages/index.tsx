import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
const data = {
  groups: [
    {
      id: "smoothies",
      title: "Smoothies",
      description: "description for smoothie menu group",
      price: "$7",
      items: [
        {
          title: "Berry Green",
          description: "Kale, Strawberries, Blueberries, Banana, Coconut Water",
          calories: 400,
        },
        {
          title: "Lean Green Protein",
          description:
            "Kale, Spinach, Banana, Rolled Oaats, Cinnamon, Coconut Water",
          calories: 600,
        },
        {
          title: "Strawberry Banana",
          description: "Strawberries, Coconut Water, Banana",
          calories: 310,
        },
        {
          title: "Red Dragon",
          description:
            "Strawberries, Blueberries, Pineapple, Beets, Banana, Ginger, Coconut Water",
          calories: 530,
        },
        {
          title: "Very Berry",
          description: "Strawberries, Blueberries, Banana, Coconut Water",
          calories: 460,
        },
        {
          title: "Tropical Green Mango",
          description: "Kale, Spinach, Mango, Pineapple, Coconut Water",
          calories: 260,
        },
        {
          title: "Green Dream",
          description: "Kale, Spinach, Pineapple, Apple",
          calories: 300,
        },
        {
          title: "Kalicious",
          description: "Kale, Apple, Banana, Spinach, Lemon",
          calories: 500,
        },
      ],
    },
  ],
};

const Home: NextPage = () => {
  const title = data.groups[0].title;
  const smoothiePrice = data.groups[0].price;

  return (
    <div className="bg-darkGray text-white h-screen font-vesper-libre">
      <Head>
        <title>Custom Menu</title>
        <meta name="description" content="Custom NextJS Menu App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <section className="w-2/3 p-12">
          <header className="flex items-end font-bold">
            <h1 className="text-8xl">
              {title} {smoothiePrice}
            </h1>
            <div className="text-turquoise text-3xl">
              EA
              <br />
              16 OZ
            </div>
          </header>
          <div className="flex">
            <div className="w-1/2 p-6">
              <div></div>
            </div>
            <div className="w-1/2 p-6"></div>
          </div>
        </section>

        <section className="w-1/3 p-12">test</section>
      </main>
    </div>
  );
};

export default Home;
