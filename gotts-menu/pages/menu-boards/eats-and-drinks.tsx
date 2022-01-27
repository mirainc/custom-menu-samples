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
  // const response = await fetch("http://localhost:3002/menus/main-menu-guid");
  // const data = await response.json();

  const data = {
    id: "main-menu-guid",
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
      {
        id: "wine",
        name: "Wine",
        groups: [
          {
            id: "sparkling",
            name: "sparkling",

            items: [
              {
                id: "blanc-de-blancs",
                type: "Blanc de Blancs",
                name: "Schrambsberg",
                location: "Napa Valley",
                price: 33.0,
                volume: "375ml",
              },
            ],
          },
          {
            id: "rosé",
            name: "Rosé",
            sizes: [
              { id: "glass", name: "Glass", price: 8.0 },
              { id: "bottle", name: "Bottle", price: 32.0 },
            ],
            items: [
              {
                id: "rosé",
                type: "Rosé",
                name: "Bieler Père et Fils",
                location: "Provence, France",
                sizes: [
                  { id: "glass", name: "Glass", price: 8.0 },
                  { id: "bottle", name: "Bottle", price: 32.0 },
                ],
              },
            ],
          },
          {
            id: "white",
            name: "White",
            items: [
              {
                id: "pinot-grigio",
                type: "Pinot Grigio",
                name: "Seaglass",
                location: "Santa Barbara County",
                sizes: [
                  { id: "glass", name: "Glass", price: 7.0 },
                  { id: "bottle", name: "Bottle", price: 28.0 },
                ],
              },
              {
                id: "sauvignon-blanc",
                type: "Sauvignon Blanc",
                name: "Daisy",
                location: "California",
                sizes: [
                  { id: "glass", name: "Glass", price: 8 },
                  { id: "bottle", name: "Bottle", price: 32 },
                ],
              },
              {
                id: "chardonnay",
                type: "Chardonnay",
                name: "Napa Cellars",
                location: "Napa Valley",
                sizes: [
                  { id: "glass", name: "Glass", price: 8 },
                  { id: "bottle", name: "Bottle", price: 36 },
                ],
              },
            ],
          },
          {
            id: "white-half-bottles",
            name: "White Half Bottles",
            items: [
              {
                id: "sauvignon-blanc-1",
                type: "Sauvignon Blanc",
                name: "Round Pond",
                location: "Napa Valley",
                price: 23,
              },
              {
                id: "sauvignon-blanc-2",
                type: "Sauvignon Blanc",
                name: "Frog's Leap",
                location: "Napa Valley",
                price: 23,
              },
              {
                id: "sauvignon-blanc-3",
                type: "Sauvignon Blanc",
                name: "Duckhorn",
                location: "Napa Valley",
                price: 25,
              },
              {
                id: "chardonnay-1",
                type: "Chardonnay",
                name: "Rombauer",
                location: "Napa Valley",
                price: 30,
              },
              {
                id: "chardonnay-2",
                type: "Chardonnay",
                name: "Cakebread",
                location: "Napa Valley",
                price: 35,
              },
            ],
          },
          {
            id: "red",
            name: "Red",
            items: [
              {
                id: "pinot-noir",
                type: "Pinot Noir",
                name: "The Pinot Project",
                location: "California",
                sizes: [
                  { id: "glass", name: "Glass", price: 9 },
                  { id: "bottle", name: "Bottle", price: 36 },
                ],
              },
              {
                id: "cabernet-blend",
                type: "Cabernet Blend",
                name: "Charles & Charles",
                location: "Washington",
                sizes: [
                  { id: "glass", name: "Glass", price: 8 },
                  { id: "bottle", name: "Bottle", price: 32 },
                ],
              },
              {
                id: "cabernet-sauvignon",
                type: "Cabernet Sauvignon",
                name: "Raymond Vineyard",
                location: "Napa Valley",
                sizes: [
                  { id: "glass", name: "Glass", price: 12 },
                  { id: "bottle", name: "Bottle", price: 48 },
                ],
              },
              {
                id: "zinfandel",
                type: "Zinfandel",
                name: "Turley",
                location: "California",
                sizes: [
                  { id: "glass", name: "Glass", price: 13 },
                  { id: "bottle", name: "Bottle", price: 52 },
                ],
              },
            ],
          },
          {
            id: "red-half-bottle",
            name: "Red Half Bottle",
            items: [
              {
                id: "zinfandel",
                type: "Zinfandel",
                name: "Seghesio",
                location: "Sonoma Country",
                price: 23,
              },
              {
                id: "cabernet-franc",
                type: "Cabernet Franc",
                name: "Lang & Reed",
                location: "North Coast",
                price: 23,
              },
              {
                id: "pinot-noir",
                type: "Pinot Noir",
                name: "Melville",
                location: "Santa Rita Hills",
                price: 42,
              },
              {
                id: "cabernet-sauvigno-1",
                type: "Cabernet Sauvignon",
                name: "Long Meadow Ranch",
                location: "Napa Valley",
                price: 42,
              },
              {
                id: "cabernet-sauvignon-2",
                type: "Cabernet Sauvignon",
                name: "Shafer",
                location: "Napa Valley",
                price: 79,
              },
            ],
          },
        ],
      },
      {
        id: "beer",
        name: "Beer",
        groups: [
          {
            id: "draft-beers",
            name: "Draft Beers",
            items: [
              {
                id: "pliny-the-older",
                name: "Pliny the Elder",
                abv: "8%",
                price: 10,
              },
              {
                id: "dogfish-head-90-minute-ipa",
                name: "Dogfish Head 90 Minute IPA",
                abv: "9%",
                price: 9,
              },
              {
                id: "bear-republic-thru-the-haze-ipa",
                name: "Bear Republic Thru the Haza IPA",
                abv: "6.4%",
                price: 8,
              },
              {
                id: "fort-point-KSA",
                name: "Fort Point KSA",
                abv: "4.6%",
                price: 8,
              },
              {
                id: "lagunitas-ipa",
                name: "Lagunitas IPA",
                abv: "6.2%",
                price: 7,
              },
              {
                id: "anchor-steam",
                name: "Anchor Steam",
                abv: "4.9%",
                price: 7,
              },
              {
                id: "trumer-pilsner",
                name: "Trumer Pilsner",
                abv: "4.9%",
                price: 7,
              },
              {
                id: "modelo-especial",
                name: "Modelo Especial",
                abv: "4.6%",
                price: 6,
              },
              {
                id: "manager-selection",
                name: "Manager Selection",
                price: "A.Q.",
              },
            ],
          },
          {
            id: "bottled-beers",
            name: "Bottled Beers",
            items: [
              {
                id: "miller-lite",
                name: "Miller Lite",
                abv: "4.2%",
                price: 4.5,
              },
              {
                id: "corona",
                name: "Corona",
                abv: "4.6%",
                price: 5,
              },
              {
                id: "fat-tire-amber-ale",
                name: "Fat Tire Amber Ale",
                abv: "5.2%",
                price: 5.5,
              },
              {
                id: "stone-delicious-gluten-reduced-IPA",
                name: "Stone Delicious Gluten-Reduced IPA",
                abv: "7.7%",
                price: 5.5,
              },
              {
                id: "einstök-icelandic-white-ale",
                name: "Einstök Icelandic White Ale",
                abv: "7.7%",
                price: 5.5,
              },
            ],
          },
          {
            id: "canned-beers-hard-seltzer-and-cider",
            name: "Canned Beers, Hard Seltzer & Cider",
            items: [
              {
                id: "pabst-blue-ribbon",
                name: "Pabst Blue Ribbon",
                abv: "4.7%",
                price: 4,
              },
              {
                id: "blue-moon-belgian-style-wheat-ale",
                name: "Blue Moon Belgian-Style Wheat Ale",
                abv: "5.4%",
                price: 5,
              },
              {
                id: "firestone-walker-805-blonde-ale",
                name: "Firestone Walker 805 Blonde Ale",
                abv: "5.4%",
                price: 5,
              },
              {
                id: "sierra-nevada-pale-ale",
                name: "Sierra Nevada Pale Ale",
                abv: "5.6%",
                price: 5,
              },
              {
                id: "montucky-cold-snack",
                name: "Montucky Cold Snack, 16 oz.",
                abv: "4.1%",
                price: 6,
              },
              {
                id: "white-claw-hard-seltzer",
                name: "White Claw Hard Seltzer",
                abv: "5.0%",
                price: 6,
              },
              {
                id: "athletic-brewing-company-upside-dawn",
                name: "Athletic Brewing Company Upside Dawn",
                abv: "Non-Alcoholic",
                price: 6,
              },
              {
                id: "golden-state-cider-mighty-dry",
                name: "Golden State Cider Mighty Dry, 16oz",
                abv: "6.3%",
                price: 7.5,
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
