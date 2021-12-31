import type { NextPage } from "next";
import Head from "next/head";
import { MenuData } from "./types";

export interface JuicesProps {
  data: MenuData;
}

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3000/menus/main-menu-guid");
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

const Juices: NextPage<JuicesProps> = ({ data }) => {
  const juiceData = data.groups.find(({ id }) => id === "fresh-juices");
  if (!juiceData) return null;

  const { name, price, items, modifierGroups } = juiceData;

  return (
    <div className="bg-darkGray text-white h-screen font-vesper-libre">
      <Head>
        <title>{name}</title>
        <meta name="description" content="Custom NextJS Menu App" />
      </Head>

      <main className="flex">
        <section className="w-2/3 mb-12">
          <header className="flex items-end font-bold px-10 mt-2">
            <h1 className="text-9xl mr-2">
              {name} {price}
            </h1>
            <div className="text-turquoise text-3xl font-open-sans mb-[52px]">
              EA
              <br />
              16 OZ
            </div>
          </header>
          <div className="flex flex-wrap overflow-hidden mb-14">
            {items.map((x) => (
              <div key={x.id} className="w-1/2 my-5 px-10 overflow-hidden">
                <div className="text-turquoise text-4xl mb-2">
                  {x.name}{" "}
                  {x.calories && (
                    <span className="text-2xl">{x.calories} CAL</span>
                  )}
                </div>
                <div className="text-2xl font-open-sans uppercase tracking-wide">
                  {x.description}
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-2/3">
            <p className="text-turquoise px-12 py-8 text-4xl">
              Additional nutrition information available upon request. <br />{" "}
              2,000 calories a day is used for general nutrition advice, but
              calorie needs vary.
            </p>
          </div>
        </section>

        <section className="w-1/3 p-12">
          <h2 className="text-7xl mr-2 text-turquoise mb-6">Extras</h2>
          {modifierGroups.map((x) => (
            <div key={x.id} className="mb-10 last:mb-0">
              <h3 className="text-4xl mb-4">
                {x.name} {x.price}
              </h3>
              {x.items.map((x) => (
                <div
                  className="text-3xl text-turquoise mb-3 last:mb-0"
                  key={x.id}
                >
                  {x.name} adds {x.calories} Cal
                </div>
              ))}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Juices;
