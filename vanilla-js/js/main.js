const fetchData = async () => {
  const { menuId } = getQueryParams();

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

const render = (data) => {
  const espressoAndCoffeeGroupTag = "espresso-and-coffee";
  const icedColdbrewGroupTag = "iced-cold-brew";

  if (!data) return;

  const { groups } = data;
  if (!groups) return;

  const espressoAndCoffeeData = getRecord(groups, espressoAndCoffeeGroupTag);
  const espressoAndCoffeeItems = espressoAndCoffeeData.items;
  const espressoAndCoffeeModifiers = espressoAndCoffeeData.groups[0];

  document.querySelector("#espresso-and-coffee-heading").innerHTML =
    espressoAndCoffeeData.name;
  renderEspressoAndCoffeeMenuItems(espressoAndCoffeeItems);
  renderEspressoAndCoffeeModifiers(espressoAndCoffeeModifiers.items);

  const icedColdbrewData = getRecord(groups, icedColdbrewGroupTag);
  document.querySelector("#iced-coldbrew-heading").innerHTML =
    icedColdbrewData.name;
  renderIcedColdbrewMenuItems(icedColdbrewData.items);

  const { footnote, espressoAndCoffeeSubheading, espressoAndCoffeeBottomText } =
    getQueryParams();

  if (footnote) {
    document.querySelector("#footnote").innerText = footnote;
  }

  if (espressoAndCoffeeSubheading) {
    document.querySelector("#espresso-and-coffee-subheading").innerText =
      espressoAndCoffeeSubheading;
  }

  if (espressoAndCoffeeBottomText) {
    document.querySelector("#espresso-and-coffee-bottom-text").innerText =
      espressoAndCoffeeBottomText;
  }
};

const main = async () => {
  let data = await fetchData();

  setInterval(async () => {
    data = await fetchData();
    render(data);
  }, 30000);

  render(data);
};

main();
