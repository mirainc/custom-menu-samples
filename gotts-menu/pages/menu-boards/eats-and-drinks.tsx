import type { NextPage } from "next";
import Head from "next/head";
import { Box, Grid, Heading, Text } from "theme-ui";
import MenuItem from "../../components/MenuItem";
import { MenuData } from "../../types";

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

  const fountainSoda = beverages.groups[0];
  const reviveKombucha = beverages.groups[1];

  if (!fountainSoda) return null;

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

      <Grid columns={2} gap={2}>
        <Box>
          <section>
            <Heading variant="h2">{grabAndGo.name}</Heading>
            {grabAndGo.items.map((x) => (
              <div key={x.id}>
                <Heading variant="h3">{x.name}</Heading>
                <Text>{x.description}</Text>{" "}
                <Text sx={{ fontWeight: "bold", fontFamily: "heading" }}>
                  {x.price}
                </Text>
              </div>
            ))}
          </section>
          <section>
            <Heading variant="h2">{shakes.name}</Heading>
            {shakes.items.map((x) => (
              <div key={x.id}>
                <Heading variant="h3">{x.name}</Heading>
                <Text>{x.description}</Text>{" "}
                <Text sx={{ fontWeight: "bold", fontFamily: "heading" }}>
                  {shakes.price}
                </Text>
              </div>
            ))}
          </section>
        </Box>

        <Box>
          <section>
            <Heading variant="h2">{beverages.name}</Heading>

            <Grid columns={2}>
              <Box>
                <Heading variant="h3">{fountainSoda.name}</Heading>
                <ul style={{ columns: 2 }}>
                  {fountainSoda.items.map((x) => {
                    return <li key={x.id}>{x.name}</li>;
                  })}
                </ul>
                <Text>
                  Add flavors:
                  {fountainSoda.modifierGroups[0].items.map((x) => {
                    return <Text key={x.id}>{x.name}</Text>;
                  })}{" "}
                  <Text sx={{ fontWeight: "bold", fontFamily: "heading" }}>
                    {fountainSoda.modifierGroups[0].price}
                  </Text>
                </Text>
              </Box>
              <Box>
                <ul>
                  {fountainSoda.sizes.map((x) => {
                    return (
                      <li key={x.id}>
                        <Text>{x.name}</Text>{" "}
                        <Text
                          sx={{ fontWeight: "bold", fontFamily: "heading" }}
                        >
                          {x.price}
                        </Text>
                      </li>
                    );
                  })}
                </ul>
              </Box>
            </Grid>

            {beverages.items.slice(0, 4).map((x) => (
              <Grid columns={2} key={x.id}>
                <Box>
                  <Heading variant="h3">{x.name}</Heading>
                </Box>
                <Box>
                  {x.sizes.map((x) => (
                    <ul key={x.id}>
                      <li>
                        <Text>{x.price}</Text> <Text>{x.name}</Text>
                      </li>
                    </ul>
                  ))}
                </Box>
              </Grid>
            ))}

            <div>
              <Heading variant="h3">{reviveKombucha.name}</Heading>
              {reviveKombucha.items.map((x) => (
                <div key={x.id}>
                  <Text>{x.name}</Text>
                </div>
              ))}
              <Text>{reviveKombucha.price}</Text>
            </div>

            {beverages.items.slice(4, beverages.items.length).map((x) => (
              <div key={x.id}>
                <Heading as="h3">{x.name}</Heading>
                <Text>{x.price}</Text>
              </div>
            ))}
          </section>
        </Box>
      </Grid>
    </>
  );
};

export default EatsAndDrinks;
