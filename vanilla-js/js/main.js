const fetchData = async () => {
  const { menuId } = getQueryParams();

  console.log({ menuId });
  const response = await fetch(
    `https://menu-api.raydiant.com/v1/groups?menus=${menuId}&depth=5`,
    {
      headers: {
        "X-API-Key": "9f164045-6f80-4131-9550-1a34118c901d" || "",
      },
    }
  );
  const data = await response.json();
  return data;
};

const getQueryParams = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  return params;
};

const main = async () => {
  const espressoAndCoffeeGroupTag = "espresso-and-coffee";
  const icedColdbrewGroupTag = "iced-coldbrew";
  const modifiersTag = "extras";

  const data = await fetchData();
  if (!data) return;

  const { groups } = data;
  if (!groups) return;

  const groupsTemp = groups.map((g) => {
    const nameToTagMap = {
      "Espresso & Coffee": ["espresso-and-coffee"],
      "Iced Cold Brew": ["iced-coldbrew"],
    };
    return {
      ...g,
      tags: nameToTagMap[g.name],
    };
  });

  const espressoAndCoffeeData = getRecord(
    groupsTemp,
    espressoAndCoffeeGroupTag
  );
  const espressoAndCoffeeItems = espressoAndCoffeeData.items;
  const espressoAndCoffeeModifiers = espressoAndCoffeeData.groups[0];

  document.querySelector("#espresso-and-coffee-heading").innerHTML =
    espressoAndCoffeeData.name;
  renderEspressoAndCoffeeMenuItems(espressoAndCoffeeItems);
  renderEspressoAndCoffeeModifiers(espressoAndCoffeeModifiers.items);

  const icedColdbrewData = getRecord(groupsTemp, icedColdbrewGroupTag);
  document.querySelector("#iced-coldbrew-heading").innerHTML =
    icedColdbrewData.name;
  renderIcedColdbrewMenuItems(icedColdbrewData.items);

  const { footnote, espressoAndCoffeeSubheading, espressoAndCoffeeBottomText } =
    getQueryParams();

  if (footnote) {
    document.querySelector("#footnote").innerHTML = footnote;
  }

  if (espressoAndCoffeeSubheading) {
    document.querySelector("#espresso-and-coffee-subheading").innerHTML =
      espressoAndCoffeeSubheading;
  }

  if (espressoAndCoffeeBottomText) {
    document.querySelector("#espresso-and-coffee-bottom-text").innerHTML =
      espressoAndCoffeeBottomText;
  }
};

main();
