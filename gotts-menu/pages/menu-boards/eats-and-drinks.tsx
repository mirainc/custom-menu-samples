/** @jsxImportSource theme-ui */
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Grid, Text, Divider, Box, Paragraph } from "theme-ui";

import Item1 from "../../components/Item1";
import * as T from "../../types";
import Item2 from "../../components/Item2";
import Column from "../../components/Column";
import Group from "../../components/Group";
import Heading1 from "../../components/Heading1";
import SubGroup1 from "../../components/SubGroup1";
import { getRecords } from "../../lib/utils";
import MainLayout from "../../components/MainLayout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export interface EatsAndDrinksProps {
  data: T.MenuData;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query, res } = context;

  res.setHeader("Cache-Control", "public, max-age=1");

  const response = await fetch(
    `${process.env.RAYDIANT_MENU_API_URL}/v1/groups?tags=eats-and-drinks&menus=${query.menuId}&depth=5`,
    {
      headers: {
        "X-API-Key": process.env.RAYDIANT_MENU_API_KEY || "",
      },
    }
  );

  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

const EatsAndDrinks: NextPage<EatsAndDrinksProps> = ({ data }) => {
  const router = useRouter();
  const { footerText, showQRCode } = router.query;

  const grabAndGo = getRecords(data.groups, "grab-and-go")[0] as T.Group;
  const shakes = getRecords(data.groups, "shakes")[0] as T.Group;
  const beverages = getRecords(data.groups, "beverages")[0] as T.Group;

  useEffect(() => {
    const refreshData = () => {
      router.replace(router.asPath);
    };

    const id = setInterval(() => {
      refreshData();
    }, 30000);

    return () => clearInterval(id);
  }, [router]);

  if (!grabAndGo || !shakes || !beverages) return null;

  return (
    <MainLayout
      footerText={footerText as string | undefined}
      showQRCode={showQRCode === "true"}
    >
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
            {grabAndGo.items.map(
              ({ id, name, description, price, inStock }) => (
                <Item1
                  key={id}
                  name={name}
                  description={description}
                  price={price}
                  inStock={inStock}
                />
              )
            )}
          </Group>

          <Divider mb={4} />

          <Group heading={shakes.name}>
            {shakes.items.map(({ id, name, description, price, inStock }) => (
              <Item1
                key={id}
                name={name}
                description={description}
                price={price}
                inStock={inStock}
              />
            ))}
          </Group>

          <Box as="section" mb={4}>
            <Paragraph sx={{ fontSize: 0 }}>Wine corkage $5.00</Paragraph>
            <Paragraph sx={{ fontSize: 0 }}>
              Vintages are available upon request.
            </Paragraph>
          </Box>
        </Column>

        <Column>
          <Group heading={beverages.name}>
            {beverages.groups.map(({ id, name, items }) => {
              const firstItem = items[0];

              const price = firstItem.price;
              const modifiers = getRecords(items, "additional-flavor");
              const sizes = firstItem.items;

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
              const { id, name, items: sizes, price, inStock } = item;

              return (
                <Item2
                  key={id}
                  name={name}
                  sizes={sizes}
                  price={price}
                  inStock={inStock}
                />
              );
            })}
          </Group>

          <Divider mb={4} />
        </Column>
      </Grid>
    </MainLayout>
  );
};

export default EatsAndDrinks;
