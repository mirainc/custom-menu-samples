import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Grid, Text } from "theme-ui";

import Column from "../../components/Column";
import Group from "../../components/Group";
import Heading1 from "../../components/Heading1";
import MainLayout from "../../components/MainLayout";
import SubGroup2 from "../../components/SubGroup2";
import { getRecords } from "../../lib/utils";
import * as T from "../../types";

export interface WineAndBeerProps {
  data: T.MenuData;
}

export const getStaticProps = async () => {
  const response = await fetch(
    `${process.env.RAYDIANT_MENU_API_URL}/v1/groups?tags=wine-and-beer&depth=5`,
    {
      headers: {
        "X-API-Key": process.env.RAYDIANT_MENU_API_KEY || "",
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
  const router = useRouter();
  const { footerText } = router.query;

  const beer = getRecords(data.groups, "beer")[0] as T.Group;
  const wine = getRecords(data.groups, "wine")[0] as T.Group;

  if (!beer || !wine) return null;

  return (
    <MainLayout footerText={footerText as string}>
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
            {beer.groups.map(({ id, name, items }) => {
              return <SubGroup2 key={id} name={name} items={items} />;
            })}
          </Group>
        </Column>
      </Grid>
    </MainLayout>
  );
};

export default WineAndBeer;
