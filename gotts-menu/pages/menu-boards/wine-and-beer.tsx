import type { NextPage } from "next";
import Head from "next/head";
import MenuItem from "../../components/MenuItem";
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

  const renderMenuGroup = (g: Group) => {
    return (
      <div key={g.id}>
        <h3>{g.name}</h3>
        <div>
          {g.price ? (
            <div>
              {g.items.map((i) => (
                <MenuItem
                  key={i.id}
                  name={i.name}
                  winery={i.winery}
                  location={i.location}
                  price={i.price}
                />
              ))}
            </div>
          ) : (
            <div>
              {g.items.map((x) => (
                <div key={x.id}>
                  <div>{x.name}</div>
                  <div>{x.winery}</div>
                  <div>({x.location})</div>
                </div>
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
