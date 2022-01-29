/** @jsxImportSource theme-ui */
import type { NextPage } from "next";
import Head from "next/head";
import { Grid, Text, Divider } from "theme-ui";

import Item1 from "../../components/Item1";
import * as T from "../../types";
import Item2 from "../../components/Item2";
import Column from "../../components/Column";
import Group from "../../components/Group";
import Heading1 from "../../components/Heading1";
import SubGroup1 from "../../components/SubGroup1";

export interface EatsAndDrinksProps {
  data: T.MenuData;
}

export const getStaticProps = async () => {
  const response = await fetch(
    "https://menu-api.raydiant.com/v1/groups?tags=eats-and-drinks&depth=5",
    {
      headers: {
        "X-API-Key": "4de9279071f84308a6815d92f6349db8",
      },
    }
  );
  const data = await response.json();
  const eatsAndDrinksData = data.groups[0];

  return {
    props: {
      data: eatsAndDrinksData,
    },
  };
};

const EatsAndDrinks: NextPage<EatsAndDrinksProps> = ({ data }) => {
  // TODO: fix type
  const getRecords = (data: T.Record[], tag: string) => {
    const record = data.filter((x) => {
      return x.tags.includes(tag);
    });
    return record;
  };

  const grabAndGo = getRecords(data.groups, "grab-and-go")[0] as T.Group;
  const shakes = getRecords(data.groups, "shakes")[0] as T.Group;
  const beverages = getRecords(data.groups, "beverages")[0] as T.Group;

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
            {shakes.items.map(({ id, name, description, price }) => (
              <Item1
                key={id}
                name={name}
                description={description}
                price={price}
              />
            ))}
          </Group>
        </Column>

        <Column>
          <Group heading={beverages.name}>
            {beverages.groups.map(({ id, name, items }) => {
              const firstItem = items[0];

              const price = firstItem.price;
              const sizes = getRecords(firstItem.items, "size");
              const modifiers = getRecords(firstItem.items, "modifier");

              return (
                <SubGroup1
                  key={id}
                  name={name}
                  items={items}
                  modifiers={modifiers}
                  sizes={sizes}
                  price={price}
                />
              );
            })}

            {beverages.items.map((item) => {
              const { id, name, items, price } = item;
              const firstItem = items[0];
              const sizes = firstItem && getRecords(items, "size");

              return <Item2 key={id} name={name} sizes={sizes} price={price} />;
            })}
          </Group>

          <Divider mb={4} />
        </Column>
      </Grid>
    </>
  );
};

export default EatsAndDrinks;
