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
          id: "berry-green",
          title: "Berry Green",
          description: "Kale, Strawberries, Blueberries, Banana, Coconut Water",
          calories: 400,
        },
        {
          id: "very-berry",
          title: "Very Berry",
          description: "Strawberries, Blueberries, Banana, Coconut Water",
          calories: 460,
        },
        {
          id: "lean-green-protein",
          title: "Lean Green Protein",
          description:
            "Kale, Spinach, Banana, Rolled Oats, Cinnamon, Coconut Water",
          calories: 600,
        },
        {
          id: "tropical-green-mango",
          title: "Tropical Green Mango",
          description: "Kale, Spinach, Mango, Pineapple, Coconut Water",
          calories: 260,
        },
        {
          id: "strawberry-banana",
          title: "Strawberry Banana",
          description: "Strawberries, Coconut Water, Banana",
          calories: 310,
        },
        {
          id: "green-dream",
          title: "Green Dream",
          description: "Kale, Spinach, Pineapple, Apple",
          calories: 300,
        },
        {
          id: "red-dragon",
          title: "Red Dragon",
          description:
            "Strawberries, Blueberries, Pineapple, Beets, Banana, Ginger, Coconut Water",
          calories: 530,
        },
        {
          id: "Kalicious",
          title: "Kalicious",
          description: "Kale, Apple, Banana, Spinach, Lemon",
          calories: 500,
        },
      ],
      modifierGroups: [
        {
          title: "Healthy Boost Powders",
          price: "$1.50",
          items: [
            { title: "Probiotics", calories: 0 },
            { title: "Cacao Powder", calories: 15 },
            { title: "Raw Protein Meal", calories: 80 },
            { title: "Spiruline", calories: 10 },
          ],
        },
        {
          title: "Shots",
          price: "$2.50",
          items: [
            { title: "Probiotics", calories: 45 },
            { title: "Tumeric", calories: 60 },
            { title: "Wheatgrass", calories: 5 },
          ],
        },
        {
          title: "Add-Ons",
          price: "$1",
          items: [
            { title: "Beets", calories: 40 },
            { title: "Cucumber", calories: 20 },
            { title: "Kale", calories: 15 },
            { title: "Lemon", calories: 10 },
            { title: "Spinach", calories: 15 },
            { title: "Celery", calories: 40 },
            { title: "Extra Fruit", calories: "10-60" },
          ],
        },
      ],
    },
  ],
};

const Home: NextPage = () => {
  const smoothieData = data.groups.find(({ id }) => id === "smoothies");
  if (!smoothieData) return null;

  const { title, price, items } = smoothieData;

  return (
    <div className="bg-darkGray text-white h-screen font-vesper-libre">
      <Head>
        <title>Custom Menu</title>
        <meta name="description" content="Custom NextJS Menu App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <section className="w-2/3 mb-12">
          <header className="flex items-end font-bold px-10 mt-2">
            <h1 className="text-9xl mr-2">
              {title} {price}
            </h1>
            <div className="text-turquoise text-3xl font-open-sans mb-[46px]">
              EA
              <br />
              16 OZ
            </div>
          </header>
          <div className="flex flex-wrap overflow-hidden mb-14">
            {items.map((x) => (
              <div key={x.id} className="w-1/2 my-5 px-10 overflow-hidden">
                <div className="text-turquoise text-4xl mb-2">
                  {x.title}{" "}
                  {x.calories && (
                    <span className="text-2xl">{x.calories} CAL</span>
                  )}
                </div>
                <div className="text-2xl font-open-sans uppercase tracking-wide">
                  {x.description}
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-2/3">
            <p className="text-turquoise px-12 py-8 text-4xl">
              Additional nutrition information available upon request. <br />{" "}
              2,000 calories a day is used for general nutrition advice, but
              calorie needs vary.
            </p>
          </div>
        </section>

        <section className="w-1/3 p-12">test</section>
      </main>
    </div>
  );
};

export default Home;
