import type { NextPage } from "next";
import Head from "next/head";

export interface JuicesProps {
  data: any;
}

export const getStaticProps = async () => {
  return {
    props: {
      data,
    },
  };
};

const EatsAndDrinks: NextPage<JuicesProps> = ({ data }) => {
  const juiceData = data.groups.find(({ id }) => id === "fresh-juices");
  if (!juiceData) return null;

  const { name, price, items, modifierGroups } = juiceData;

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content="Custom NextJS Menu App" />
      </Head>

      <main className="flex">
        <header className="flex items-end px-10 mt-2">
          <h1>
            {name} {price}
          </h1>
        </header>

        <section className="w-1/2"></section>

        <section className="w-1/2 "></section>
      </main>
    </>
  );
};

export default EatsAndDrinks;
