/** @jsxImportSource theme-ui */
import type { NextPage } from "next";
import Head from "next/head";
import { Grid, Text, Divider } from "theme-ui";

import Item1 from "../../components/Item1";
import { MenuData } from "../../types";
import Item2 from "../../components/Item2";
import Column from "../../components/Column";
import Group from "../../components/Group";
import Heading1 from "../../components/Heading1";
import SubGroup1 from "../../components/SubGroup1";

export interface EatsAndDrinksProps {
  data: MenuData;
}

export const getStaticProps = async () => {
  // const response = await fetch(
  //   "http://localhost:3002/groups?id=eats-and-drinks-guid"
  // );
  // const data = await response.json();

  const data = [
    {
      id: "eats-and-drinks-guid",
      name: "Eats & Drinks",
      groups: [
        {
          id: "grab-and-go",
          name: "Grab & Go",
          items: [
            {
              id: "cheeseburger-box",
              name: "Cheeseburger Box",
              description:
                "American cheese, lettuce, tomatoes, pickles & secret sauce on a toasted egg bun. Served with house-made chips.",
              price: 9.99,
            },
            {
              id: "chicken-sandwich-box",
              name: "Chicken Sandwich Box",
              description:
                "Crispy fried chicken breast, green cabbage & cilantro slaw, red onion, dill pickles and charred jalapeño mayo on a toasted egg bun. Served with house-made chips.",
              price: 13.99,
            },
          ],
        },
        {
          id: "shakes",
          name: "Shakes",
          price: 6.99,
          items: [
            {
              id: "chocolate-shake",
              description: "Hand spun with organic chocolate ice cream & milk.",
              name: "Chocolate Shake",
            },
            {
              id: "vanilla-shake",
              name: "Vanilla Shake",
              description: "Hand spun with organic vanilla ice cream & milk.",
            },
          ],
        },
        {
          id: "beverages",
          name: "Beverages",
          items: [
            {
              id: "iced-tea",
              name: "Iced Tea",
              sizes: [
                { id: "16oz", name: "16oz", price: 2.69 },
                { id: "24oz", name: "24oz", price: 2.99 },
              ],
            },
            {
              id: "arnold-palmer",
              name: "Arnold Palmer",
              sizes: [
                { id: "16oz", name: "16oz", price: 2.99 },
                { id: "24oz", name: "24oz", price: 3.29 },
              ],
            },
            {
              id: "house-made-lemonade",
              name: "House-made lemonade",
              sizes: [
                { id: "16oz", name: "16oz", price: 2.99 },
                { id: "24oz", name: "24oz", price: 3.29 },
              ],
            },
            {
              id: "house-made-strawberry-lemonade",
              name: "House-made strawberry lemonade",
              sizes: [
                { id: "16oz", name: "16oz", price: 3.99 },
                { id: "24oz", name: "24oz", price: 4.29 },
              ],
            },
            {
              id: "bernies-organic-apple-juice",
              name: "Bernie's Organic Apple Juice",
              price: 3.99,
            },
            {
              id: "mountain-valley-spring-water",
              name: "Mountain Valley Spring Water",
              price: 3.49,
            },
            {
              id: "mountain-valley-sparkling-water",
              name: "Mountain Valley Sparkling Water",
              price: 3.49,
            },
          ],
          groups: [
            {
              id: "fountain-soda",
              name: "Fountain Soda",
              sizes: [
                { id: "16oz", name: "16oz", price: 2.69 },
                { id: "24oz", name: "24oz", price: 2.99 },
              ],
              items: [
                {
                  id: "root-beer",
                  name: "Root Beer",
                },
                {
                  id: "diet-coke",
                  name: "Diet Coke",
                },
                {
                  id: "coke",
                  name: "Coke",
                },
                {
                  id: "sprite",
                  name: "Sprite",
                },
                {
                  id: "mr-pibb",
                  name: "Mr. Pibb",
                },
                {
                  id: "orange",
                  name: "Orange",
                },
              ],
              modifiers: [
                { id: "vanilla", name: "Vanilla", price: 0.99 },
                { id: "cherry", name: "Cherry", price: 0.99 },
              ],
            },
            {
              id: "revive-kombucha",
              name: "Revive Kombucha",
              price: 5.99,
              items: [
                { id: "original-cola", name: "Original Cola" },
                { id: "ginger-lime", name: "Ginger Lime" },
                { id: "hibiscus-refresher", name: "Hibiscus Refresher" },
              ],
            },
          ],
        },
      ],
    },
  ];

  return {
    props: {
      data: data[0],
    },
  };
};

const EatsAndDrinks: NextPage<EatsAndDrinksProps> = ({ data }) => {
  const grabAndGo = data.groups.find(({ id }) => id === "grab-and-go");
  const shakes = data.groups.find(({ id }) => id === "shakes");
  const beverages = data.groups.find(({ id }) => id === "beverages");

  if (!grabAndGo || !shakes || !beverages) return null;

  return (
    <>
      <Head>
        <meta name="description" content="Custom NextJS Menu App" />
      </Head>

      <header>
        <Heading1>
          Eats <Text color="textSecondary">&</Text> Drinks
        </Heading1>
      </header>

      <Grid columns={2} gap={5}>
        <Column>
          <Group heading={grabAndGo.name}>
            {grabAndGo.items.map(({ id, name, description, price }) => (
              <Item1
                key={id}
                name={name}
                description={description}
                price={price}
              />
            ))}
          </Group>

          <Divider mb={4} />

          <Group heading={shakes.name}>
            {shakes.items.map(({ id, name, description }) => (
              <Item1
                key={id}
                name={name}
                description={description}
                price={shakes.price}
              />
            ))}
          </Group>
        </Column>

        <Column>
          <Group heading={beverages.name}>
            {beverages.groups.map(
              ({ id, name, modifiers, items, sizes, price }) => (
                <SubGroup1
                  key={id}
                  name={name}
                  items={items}
                  modifiers={modifiers}
                  sizes={sizes}
                  price={price}
                />
              )
            )}

            {beverages.items.map(({ id, name, sizes, price }) => (
              <Item2 key={id} name={name} sizes={sizes} price={price} />
            ))}
          </Group>

          <Divider mb={4} />
        </Column>
      </Grid>
    </>
  );
};

export default EatsAndDrinks;
