/** @jsxImportSource theme-ui */
import type { NextPage } from "next";
import Head from "next/head";
import { Box, Grid, Heading, Text, Divider } from "theme-ui";

import MenuItem1 from "../../components/MenuItem1";
import SubGroup from "../../components/SubGroup";
import { MenuData } from "../../types";
import MenuItem2 from "../../components/MenuItem2";
import Column from "../../components/Column";
import Group from "../../components/Group";

export interface JuicesProps {
  data: MenuData;
}

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3002/menus/main-menu-guid");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};

const EatsAndDrinks: NextPage<JuicesProps> = ({ data }) => {
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
        <Heading variant="h1">
          Eats <Text color="textPrimary">&</Text> Drinks
        </Heading>
      </header>

      <Grid columns={2} gap={5}>
        <Column>
          <Group heading={grabAndGo.name}>
            {grabAndGo.items.map(({ id, name, description, price }) => (
              <MenuItem1
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
              <MenuItem1
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
                <SubGroup
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
              <MenuItem2 key={id} name={name} sizes={sizes} price={price} />
            ))}
          </Group>

          <Divider mb={4} />
        </Column>
      </Grid>
    </>
  );
};

export default EatsAndDrinks;
