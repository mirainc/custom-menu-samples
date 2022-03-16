import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Heading from "../../components/Heading";
import MenuItemDescription from "../../components/MenuItemDescription";
import MenuItemHeading from "../../components/MenuItemHeading";
import Subheading from "../../components/Subheading";
import Heading2 from "../../components/Heading2";
import { MenuData } from "../../types";
import Heading3 from "../../components/Heading3";
import ExtraItem from "../../components/ExtraItem";
import Footnote from "../../components/Footnote";
import { getTag } from "../../utils";

export interface SmoothiesProps {
  data: MenuData;
}

export const getServerSideProps = async () => {
  const response = await fetch(
    `${process.env.RAYDIANT_MENU_API_URL}/v1/groups?tags=smoothies&menus8f581515-0d1d-4662-82af-787dd9b21c90=&depth=5`,
    {
      headers: {
        "X-API-Key": process.env.RAYDIANT_MENU_API_KEY || "",
      },
    }
  );

  const data = await response.json();
  const smoothiesData = data.groups[0];

  return {
    props: {
      data: smoothiesData,
    },
  };
};

const Smoothies: NextPage<SmoothiesProps> = ({ data }) => {
  if (!data) return null;

  const { name, items, groups } = data;
  const price = items[0].price;

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content="Custom NextJS Menu App" />
      </Head>

      <main className="flex">
        <section className="w-2/3 mb-12">
          <header className="flex items-end px-10 mt-2">
            <Heading>
              {name} {price}
            </Heading>
            <div className="mb-[52px]">
              <Subheading>
                EA
                <br />
                16 OZ
              </Subheading>
            </div>
          </header>
          <div className="flex flex-wrap overflow-hidden mb-14">
            {items.map((x) => (
              <div key={x.id} className="w-1/2 my-5 px-10 overflow-hidden">
                <MenuItemHeading>
                  {x.name}{" "}
                  {x.calories && (
                    <span className="text-2xl">{x.calories} CAL</span>
                  )}
                </MenuItemHeading>
                <MenuItemDescription>{x.description}</MenuItemDescription>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-2/3">
            <Footnote>
              Additional nutrition information available upon request. <br />{" "}
              2,000 calories a day is used for general nutrition advice, but
              calorie needs vary.
            </Footnote>
          </div>
        </section>

        <section className="w-1/3 p-12">
          <Heading2>Extras</Heading2>
          {groups.map((x) => {
            const price = x.items[0].price;
            return (
              <div key={x.id} className="mb-10 last:mb-0">
                <Heading3>
                  {x.name} ${price}
                </Heading3>
                {x.items.map((x) => (
                  <div className="mb-3 last:mb-0" key={x.id}>
                    <ExtraItem>
                      {x.name} adds {x.calories || getTag(x.tags, "calories")}{" "}
                      Cal
                    </ExtraItem>
                  </div>
                ))}
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default Smoothies;
