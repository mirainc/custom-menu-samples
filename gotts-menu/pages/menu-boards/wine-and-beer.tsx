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
  const response = await fetch(
    "http://localhost:3002/groups?id=wine-and-beer-guid"
  );
  const data = await response.json();

  console.log(data);

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
