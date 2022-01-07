import type { NextPage } from "next";
import Head from "next/head";
import Heading from "../../components/Heading";
import MenuItemDescription from "../../components/MenuItemDescription";
import MenuItemHeading from "../../components/MenuItemHeading";
import Subheading from "../../components/Subheading";
import Heading2 from "../../components/Heading2";
import { MenuData } from "../../types";
import Heading3 from "../../components/Heading3";
import ExtraItem from "../../components/ExtraItem";
import Footnote from "../../components/Footnote";

export interface SmoothiesProps {
  data: MenuData;
}

export const getStaticProps = async () => {
  // const response = await fetch("http://localhost:3002/menus/main-menu-guid");
  let data;
  // data = await response.json();
  data = {
    id: "main-menu-guid",
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
            description:
              "Kale, Strawberries, Blueberries, Banana, Coconut Water",
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
              {
                id: "cacao-powder",
                name: "Cacao Powder",
                calories: 15,
              },
              {
                id: "raw-protein-meal",
                name: "Raw Protein Meal",
                calories: 80,
              },
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
              {
                id: "extra-fruit",
                name: "Extra Fruit",
                calories: "10-60",
              },
            ],
          },
        ],
      },
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
              {
                id: "cacao-powder",
                name: "Cacao Powder",
                calories: 15,
              },
              {
                id: "raw-protein-meal",
                name: "Raw Protein Meal",
                calories: 80,
              },
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
              {
                id: "extra-fruit",
                name: "Extra Fruit",
                calories: "10-60",
              },
            ],
          },
        ],
      },
    ],
  };

  return {
    props: {
      data,
    },
  };
};

const Smoothies: NextPage<SmoothiesProps> = ({ data }) => {
  const smoothieData = data.groups.find(({ id }) => id === "smoothies");
  if (!smoothieData) return null;

  const { name, price, items, modifierGroups } = smoothieData;

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content="Custom NextJS Menu App" />
      </Head>

      <main className="flex">
        <section className="w-2/3 mb-12">
          <header className="flex items-end px-10 mt-2">
            <Heading>
              {name} {price}
            </Heading>
            <div className="mb-[52px]">
              <Subheading>
                EA
                <br />
                16 OZ
              </Subheading>
            </div>
          </header>
          <div className="flex flex-wrap overflow-hidden mb-14">
            {items.map((x) => (
              <div key={x.id} className="w-1/2 my-5 px-10 overflow-hidden">
                <MenuItemHeading>
                  {x.name}{" "}
                  {x.calories && (
                    <span className="text-2xl">{x.calories} CAL</span>
                  )}
                </MenuItemHeading>
                <MenuItemDescription>{x.description}</MenuItemDescription>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-2/3">
            <Footnote>
              Additional nutrition information available upon request. <br />{" "}
              2,000 calories a day is used for general nutrition advice, but
              calorie needs vary.
            </Footnote>
          </div>
        </section>

        <section className="w-1/3 p-12">
          <Heading2>Extras</Heading2>
          {modifierGroups.map((x) => (
            <div key={x.id} className="mb-10 last:mb-0">
              <Heading3>
                {x.name} {x.price}
              </Heading3>
              {x.items.map((x) => (
                <div className="mb-3 last:mb-0" key={x.id}>
                  <ExtraItem>
                    {x.name} adds {x.calories} Cal
                  </ExtraItem>
                </div>
              ))}
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Smoothies;
