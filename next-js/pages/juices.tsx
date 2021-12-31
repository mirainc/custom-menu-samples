import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
const data = {
  groups: [
    {
      id: "fresh-juices",
      name: "Fresh Juices",
      description: "description for fresh juices menu group",
      price: "$7",
      items: [
        {
          id: "apple",
          name: "Just Apple",
          calories: 190,
        },
        {
          id: "celery",
          name: "Just Celery",
          calories: 40,
        },
        {
          id: "carrot",
          name: "Just Carrot",
          calories: 190,
        },
        {
          id: "organge",
          name: "Just Orange",
          calories: 140,
        },
        {
          id: "bombay-sunrise",
          name: "Bombay Sunrise",
          description: "Carrots, Orange, Ginger, Tumeric, Lemon",
          calories: 310,
        },
        {
          id: "clearly-carrot",
          name: "Clearly Carrot",
          description: "Carrots, Beets, Celery, Apples, Kale, Orange Juice",
          calories: 300,
        },
        {
          id: "ultimate-greens",
          name: "Ultimate Greens",
          description:
            "Cucumber, Spinach, Spirulina, Celery, Wheatgrass, Apple",
          calories: 530,
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
  const juiceData = data.groups.find(({ id }) => id === "fresh-juices");
  if (!juiceData) return null;

  const { name, price, items, modifierGroups } = juiceData;

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
