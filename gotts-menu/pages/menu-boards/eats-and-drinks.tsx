/** @jsxImportSource theme-ui */
import type { NextPage } from "next";
import Head from "next/head";
import { Box, Grid, Heading, Text, Divider } from "theme-ui";

import MenuItem1 from "../../components/MenuItem1";
import MenuGroup from "../../components/MenuGroup";
import { MenuData } from "../../types";
import MenuItem2 from "../../components/MenuItem2";

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
        <Box
          sx={{
            borderRight: "1px solid",
            borderColor: "border",
            marginRight: -32,
            paddingRight: 32,
          }}
        >
          <Box as="section" mb={4} mx={2}>
            <Heading variant="h2">{grabAndGo.name}</Heading>
            {grabAndGo.items.map(({ id, name, description, price }) => (
              <MenuItem1
                key={id}
                name={name}
                description={description}
                price={price}
              />
            ))}
          </Box>

          <Divider mb={4} />

          <Box as="section" mx={2}>
            <Heading variant="h2">{shakes.name}</Heading>
            {shakes.items.map(({ id, name, description }) => (
              <MenuItem1
                key={id}
                name={name}
                description={description}
                price={shakes.price}
              />
            ))}
          </Box>
        </Box>

        <Box mx={1}>
          <section>
            <Heading variant="h2">{beverages.name}</Heading>
            {beverages.groups.map(({ id, name, modifiers, items, sizes }) => (
              <MenuGroup
                key={id}
                name={name}
                items={items}
                modifiers={modifiers}
                sizes={sizes}
              />
            ))}

            {beverages.items.map(({ id, name, sizes, price }) => (
              <MenuItem2 key={id} name={name} sizes={sizes} price={price} />
            ))}
          </section>
        </Box>
      </Grid>
    </>
  );
};

export default EatsAndDrinks;
