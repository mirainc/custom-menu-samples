import type { NextPage } from "next";
import Head from "next/head";
import { Grid, Text } from "theme-ui";

import Column from "../../components/Column";
import Group from "../../components/Group";
import Heading1 from "../../components/Heading1";
import SubGroup2 from "../../components/SubGroup2";
import { getRecords } from "../../lib/utils";
import * as T from "../../types";

export interface WineAndBeerProps {
  data: T.MenuData;
}

export const getStaticProps = async () => {
  const response = await fetch(
    "https://menu-api.raydiant.com/v1/groups?tags=wine-and-beer&depth=5",
    {
      headers: {
        "X-API-Key": "4de9279071f84308a6815d92f6349db8",
      },
    }
  );
  const data = await response.json();
  const wineAndBeerData = data.groups[0];

  return {
    props: {
      data: wineAndBeerData,
    },
  };
};

const WineAndBeer: NextPage<WineAndBeerProps> = ({ data }) => {
  const beer = getRecords(data.groups, "beer")[0] as T.Group;

  if (!beer) return null;

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
        {/* <Column>
          <Group heading={wine.name}>
            {wine.groups.map(({ id, name, items }) => (
              <SubGroup2 key={id} name={name} items={items} />
            ))}
          </Group>
        </Column> */}
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
