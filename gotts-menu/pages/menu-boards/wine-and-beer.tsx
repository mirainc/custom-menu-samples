import type { NextPage } from "next";
import Head from "next/head";
import { Grid, Text } from "theme-ui";

import Column from "../../components/Column";
import Group from "../../components/Group";
import Heading1 from "../../components/Heading1";
import SubGroup2 from "../../components/SubGroup2";
import * as T from "../../types";

export interface WineAndBeerProps {
  data: T.MenuData;
}

export const getStaticProps = async () => {
  // const response = await fetch(
  //   "http://localhost:3002/groups?id=wine-and-beer-guid"
  // );
  // const data = await response.json();

  const data = [
    {
      id: "wine-and-beer-guid",
      name: "Wine and Beer",
      groups: [
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
                  name: "Schrambsberg",
                  tags: [
                    "type:Blanc de Blancs",
                    "location:Napa Valley",
                    "volume:375ml",
                  ],
                  price: 33.0,
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
                  name: "Bieler Père et Fils",
                  tags: ["type:Rosé", "location:Provence, France"],
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
                  name: "Seaglass",
                  tags: ["type:Pinot Grigio", "location:Santa Barbara County"],
                  sizes: [
                    { id: "glass", name: "Glass", price: 7.0 },
                    { id: "bottle", name: "Bottle", price: 28.0 },
                  ],
                },
                {
                  id: "sauvignon-blanc",
                  name: "Daisy",
                  tags: ["type:Sauvignon Blanc", "location:California"],
                  sizes: [
                    { id: "glass", name: "Glass", price: 8 },
                    { id: "bottle", name: "Bottle", price: 32 },
                  ],
                },
                {
                  id: "chardonnay",
                  name: "Napa Cellars",
                  tags: ["type:Chardonnay", "location:Napa Valley"],
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
                  name: "Round Pond",
                  price: 23,
                  tags: ["type:Sauvignon Blanc", "location:Napa Valley"],
                },
                {
                  id: "sauvignon-blanc-2",
                  name: "Frog's Leap",
                  price: 23,
                  tags: ["type:Sauvignon Blanc", "location:Napa Valley"],
                },
                {
                  id: "sauvignon-blanc-3",
                  name: "Duckhorn",
                  price: 25,
                  tags: ["type:Sauvignon Blanc", "location:Napa Valley"],
                },
                {
                  id: "chardonnay-1",
                  name: "Rombauer",
                  price: 30,
                  tags: ["type:Chardonnay", "location:Napa Valley"],
                },
                {
                  id: "chardonnay-2",
                  name: "Cakebread",
                  price: 35,
                  tags: ["type:Chardonnay", "location:Napa Valley"],
                },
              ],
            },
            {
              id: "red",
              name: "Red",
              items: [
                {
                  id: "pinot-noir",
                  name: "The Pinot Project",
                  sizes: [
                    { id: "glass", name: "Glass", price: 9 },
                    { id: "bottle", name: "Bottle", price: 36 },
                  ],
                  tags: ["type:Pinot Noir", "location:California"],
                },
                {
                  id: "cabernet-blend",
                  name: "Charles & Charles",
                  sizes: [
                    { id: "glass", name: "Glass", price: 8 },
                    { id: "bottle", name: "Bottle", price: 32 },
                  ],
                  tags: ["type:Cabernet Blend", "location:Washington"],
                },
                {
                  id: "cabernet-sauvignon",
                  name: "Raymond Vineyard",
                  sizes: [
                    { id: "glass", name: "Glass", price: 12 },
                    { id: "bottle", name: "Bottle", price: 48 },
                  ],
                  tags: ["type:Cabernet Sauvignon", "location:Napa Valley"],
                },
                {
                  id: "zinfandel",
                  name: "Turley",
                  sizes: [
                    { id: "glass", name: "Glass", price: 13 },
                    { id: "bottle", name: "Bottle", price: 52 },
                  ],
                  tags: ["type:Zinfandel", "location:California"],
                },
              ],
            },
            {
              id: "red-half-bottle",
              name: "Red Half Bottle",
              items: [
                {
                  id: "zinfandel",
                  name: "Seghesio",
                  price: 23,
                  tags: ["type:Zinfandel", "location:Sonoma Country"],
                },
                {
                  id: "cabernet-franc",
                  name: "Lang & Reed",
                  price: 23,
                  tags: [
                    "type:Cabernet FrancZinfandel",
                    "location:North Coast",
                  ],
                },
                {
                  id: "pinot-noir",
                  name: "Melville",
                  price: 42,
                  tags: ["type:Pinot Noir", "location:Santa Rita Hills"],
                },
                {
                  id: "cabernet-sauvigno-1",
                  name: "Long Meadow Ranch",
                  price: 42,
                  tags: [
                    "type:Cabernet Sauvignon",
                    "location:Cabernet Sauvignon",
                  ],
                },
                {
                  id: "cabernet-sauvignon-2",
                  name: "Shafer",
                  price: 79,
                  tags: ["type:Cabernet Sauvignon", "location:Napa Valley"],
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
                  tags: ["abv:8%"],
                  price: 10,
                },
                {
                  id: "dogfish-head-90-minute-ipa",
                  name: "Dogfish Head 90 Minute IPA",
                  tags: ["abv:9%"],
                  price: 9,
                },
                {
                  id: "bear-republic-thru-the-haze-ipa",
                  name: "Bear Republic Thru the Haza IPA",
                  tags: ["abv:6.4%"],
                  price: 8,
                },
                {
                  id: "fort-point-KSA",
                  name: "Fort Point KSA",
                  tags: ["abv:4.6%"],
                  price: 8,
                },
                {
                  id: "lagunitas-ipa",
                  name: "Lagunitas IPA",
                  tags: ["abv:6.2%"],
                  price: 7,
                },
                {
                  id: "anchor-steam",
                  name: "Anchor Steam",
                  tags: ["abv:4.9%"],
                  price: 7,
                },
                {
                  id: "trumer-pilsner",
                  name: "Trumer Pilsner",
                  tags: ["abv:4.9%"],
                  price: 7,
                },
                {
                  id: "modelo-especial",
                  name: "Modelo Especial",
                  tags: ["abv:4.9%"],
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
                  tags: ["abv:4.2%"],
                  price: 4.5,
                },
                {
                  id: "corona",
                  name: "Corona",
                  tags: ["abv:4.6%"],
                  price: 5,
                },
                {
                  id: "fat-tire-amber-ale",
                  name: "Fat Tire Amber Ale",
                  tags: ["abv:5.2%"],
                  price: 5.5,
                },
                {
                  id: "stone-delicious-gluten-reduced-IPA",
                  name: "Stone Delicious Gluten-Reduced IPA",
                  tags: ["abv:7.7%"],
                  price: 5.5,
                },
                {
                  id: "einstök-icelandic-white-ale",
                  name: "Einstök Icelandic White Ale",
                  tags: ["abv:7.7%"],
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
                  tags: ["abv:4.7%"],
                  price: 4,
                },
                {
                  id: "blue-moon-belgian-style-wheat-ale",
                  name: "Blue Moon Belgian-Style Wheat Ale",
                  tags: ["abv:5.4%"],
                  price: 5,
                },
                {
                  id: "firestone-walker-805-blonde-ale",
                  name: "Firestone Walker 805 Blonde Ale",
                  tags: ["abv:5.4%"],
                  price: 5,
                },
                {
                  id: "sierra-nevada-pale-ale",
                  name: "Sierra Nevada Pale Ale",
                  tags: ["abv:5.6%"],
                  price: 5,
                },
                {
                  id: "montucky-cold-snack",
                  name: "Montucky Cold Snack, 16 oz.",
                  tags: ["abv:4.1%"],
                  price: 6,
                },
                {
                  id: "white-claw-hard-seltzer",
                  name: "White Claw Hard Seltzer",
                  tags: ["abv:5.0%"],
                  price: 6,
                },
                {
                  id: "athletic-brewing-company-upside-dawn",
                  name: "Athletic Brewing Company Upside Dawn",
                  tags: ["abv:Non-Alcoholic"],
                  price: 6,
                },
                {
                  id: "golden-state-cider-mighty-dry",
                  name: "Golden State Cider Mighty Dry, 16oz",
                  tags: ["abv:6.3%"],
                  price: 7.5,
                },
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

const WineAndBeer: NextPage<WineAndBeerProps> = ({ data }) => {
  const wine = data.groups.find(({ id }) => id === "wine");
  const beer = data.groups.find(({ id }) => id === "beer");

  if (!wine || !beer) return null;

  return (
    <>
      <Head>
        <meta name="description" content="Custom NextJS Menu App" />
      </Head>

      <header>
        <Heading1>
          Wine <Text color="textSecondary">&</Text> Beer
        </Heading1>
      </header>

      <Grid columns={2} gap={5}>
        <Column>
          <Group heading={wine.name}>
            {wine.groups.map(({ id, name, items }) => (
              <SubGroup2 key={id} name={name} items={items} />
            ))}
          </Group>
        </Column>
        <Column>
          <Group heading={beer.name}>
            {beer.groups.map(({ id, name, items }) => (
              <SubGroup2 key={id} name={name} items={items} />
            ))}
          </Group>
        </Column>
      </Grid>
    </>
  );
};

export default WineAndBeer;
