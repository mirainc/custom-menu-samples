import type { NextPage } from "next";
import Head from "next/head";
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
  console.log(fountainSoda);
  const reviveKombucha = beverages.groups[1];

  if (!fountainSoda) return null;

  console.log({ grabAndGo, shakes, beverages });

  return (
    <>
      <Head>
        <meta name="description" content="Custom NextJS Menu App" />
      </Head>

      <main className="flex">
        <header className="flex items-end px-10 mt-2">
          <h1>Eats & Drinks</h1>
        </header>

        <div className="w-1/2">
          <section>
            <h2>{grabAndGo.name}</h2>
            {grabAndGo.items.map((x) => (
              <div key={x.id}>
                <h3>{x.name}</h3>
                <div>{x.description}</div>
                <div>{x.price}</div>
              </div>
            ))}
          </section>
          <section>
            <h2>{shakes.name}</h2>
            {shakes.items.map((x) => (
              <div key={x.id}>
                <h3>{x.name}</h3>
                <div>{x.description}</div>
                <div>{shakes.price}</div>
              </div>
            ))}
          </section>
        </div>

        <div className="w-1/2 ">
          <section>
            <h2>{beverages.name}</h2>

            <div>
              <h3>{fountainSoda.name}</h3>
              {fountainSoda.items.map((x) => {
                return <div key={x.id}>{x.name}</div>;
              })}
              <small>
                Add flavors:
                {fountainSoda.modifierGroups[0].items.map((x) => {
                  return <div key={x.id}>{x.name}</div>;
                })}
              </small>

              <small>
                {fountainSoda.sizes.map((x) => {
                  return <div key={x.id}>{x.name}</div>;
                })}
              </small>
            </div>

            {beverages.items.slice(0, 4).map((x) => (
              <div key={x.id}>
                <h3>{x.name}</h3>
                <div>{x.description}</div>
                <div>{x.price}</div>
              </div>
            ))}

            <div>
              <h3>{reviveKombucha.name}</h3>
              {reviveKombucha.items.map((x) => (
                <div key={x.id}>
                  <div>{x.name}</div>
                  <div>{reviveKombucha.price}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default EatsAndDrinks;
