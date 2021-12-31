import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
const data = {
  groups: [
    {
      id: "smoothies",
      name: "Smoothies",
      description: "description for smoothie menu group",
      price: "$7",
      items: [
        {
          id: "berry-green",
          name: "Berry Green",
          description: "Kale, Strawberries, Blueberries, Banana, Coconut Water",
          calories: 400,
        },
        {
          id: "very-berry",
          name: "Very Berry",
          description: "Strawberries, Blueberries, Banana, Coconut Water",
          calories: 460,
        },
        {
          id: "lean-green-protein",
          name: "Lean Green Protein",
          description:
            "Kale, Spinach, Banana, Rolled Oats, Cinnamon, Coconut Water",
          calories: 600,
        },
        {
          id: "tropical-green-mango",
          name: "Tropical Green Mango",
          description: "Kale, Spinach, Mango, Pineapple, Coconut Water",
          calories: 260,
        },
        {
          id: "strawberry-banana",
          name: "Strawberry Banana",
          description: "Strawberries, Coconut Water, Banana",
          calories: 310,
        },
        {
          id: "green-dream",
          name: "Green Dream",
          description: "Kale, Spinach, Pineapple, Apple",
          calories: 300,
        },
        {
          id: "red-dragon",
          name: "Red Dragon",
          description:
            "Strawberries, Blueberries, Pineapple, Beets, Banana, Ginger, Coconut Water",
          calories: 530,
        },
        {
          id: "Kalicious",
          name: "Kalicious",
          description: "Kale, Apple, Banana, Spinach, Lemon",
          calories: 500,
        },
      ],
      modifierGroups: [
        {
          id: "healthy-boost-powders",
          name: "Healthy Boost Powders",
          price: "$1.50",
          items: [
            { id: "probiotics", name: "Probiotics", calories: 0 },
            { id: "cacao-powder", name: "Cacao Powder", calories: 15 },
            { id: "raw-protein-meal", name: "Raw Protein Meal", calories: 80 },
            { id: "spirulina", name: "Spirulina", calories: 10 },
          ],
        },
        {
          id: "shots",
          name: "Shots",
          price: "$2.50",
          items: [
            { id: "ginger", name: "Ginger", calories: 45 },
            { id: "tumeric", name: "Tumeric", calories: 60 },
            { id: "wheatgrass", name: "Wheatgrass", calories: 5 },
          ],
        },
        {
          id: "add-ons",
          name: "Add-Ons",
          price: "$1",
          items: [
            { id: "beets", name: "Beets", calories: 40 },
            { id: "cucumber", name: "Cucumber", calories: 20 },
            { id: "kale", name: "Kale", calories: 15 },
            { id: "lemon", name: "Lemon", calories: 10 },
            { id: "spinach", name: "Spinach", calories: 15 },
            { id: "celery", name: "Celery", calories: 40 },
            { id: "extra-fruit", name: "Extra Fruit", calories: "10-60" },
          ],
        },
      ],
    },
  ],
};

const Home: NextPage = () => {
  const smoothieData = data.groups.find(({ id }) => id === "smoothies");
  if (!smoothieData) return null;

  const { name, price, items, modifierGroups } = smoothieData;

  return (
    <div className="bg-darkGray text-white h-screen font-vesper-libre">
      <Head>
        <title>{name}</title>
        <meta name="description" content="Custom NextJS Menu App" />
      </Head>

      <main className="flex">
        <section className="w-2/3 mb-12">
          <header className="flex items-end font-bold px-10 mt-2">
            <h1 className="text-9xl mr-2">
              {name} {price}
            </h1>
            <div className="text-turquoise text-3xl font-open-sans mb-[52px]">
              EA
              <br />
              16 OZ
            </div>
          </header>
          <div className="flex flex-wrap overflow-hidden mb-14">
            {items.map((x) => (
              <div key={x.id} className="w-1/2 my-5 px-10 overflow-hidden">
                <div className="text-turquoise text-4xl mb-2">
                  {x.name}{" "}
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

        <section className="w-1/3 p-12">
          <h2 className="text-7xl mr-2 text-turquoise mb-6">Extras</h2>
          {modifierGroups.map((x) => (
            <div key={x.id} className="mb-10 last:mb-0">
              <h3 className="text-4xl mb-4">
                {x.name} {x.price}
              </h3>
              {x.items.map((x) => (
                <div
                  className="text-3xl text-turquoise mb-3 last:mb-0"
                  key={x.id}
                >
                  {x.name} adds {x.calories} Cal
                </div>
              ))}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
