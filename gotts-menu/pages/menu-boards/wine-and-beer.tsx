import type { NextPage } from "next";
import Head from "next/head";
import { Group, MenuData } from "../../types";

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
  console.log(data.groups);
  const wine = data.groups.find(({ id }) => id === "wine");
  const beer = data.groups.find(({ id }) => id === "beer");

  if (!wine || !beer) return null;

  console.log(wine, beer);

  const renderMenuGroup = (x: Group) => {
    return (
      <div key={x.id}>
        <h3>{x.name}</h3>
        <div>
          {x.price ? (
            <div>
              {x.items.map((y) => (
                <div key={y.id}>
                  <div>{y.name}</div>
                  <div>{x.price}</div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              {x.items.map((x) => (
                <div key={x.id}>{x.name}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <meta name="description" content="Custom NextJS Menu App" />
      </Head>

      <main className="flex">
        <header className="flex items-end px-10 mt-2">
          <h1>Wine & Beer</h1>
        </header>

        <div className="w-1/2">
          <section>
            <h2>Wine</h2>
            {wine.groups.map(renderMenuGroup)}
          </section>
        </div>

        <div className="w-1/2 ">
          <section>
            <h2>Beer</h2>
            {beer.groups.map(renderMenuGroup)}
          </section>
        </div>
      </main>
    </>
  );
};

export default EatsAndDrinks;
