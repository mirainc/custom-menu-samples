const renderEspressoAndCoffeeMenuItems = (data) => {
  const renderMenuItem = (title, price, calories) => `<div class="item">
    <div class="title">${title}</div>
    <div class="subtitle">LARGE | ${price} | ${calories} CAL</div>
  </div>`;

  const minColumn1Items = 0;
  const maxColumn1Items = 4;
  const espressoMenuColumn1Content = data
    .slice(minColumn1Items, maxColumn1Items)
    .map(({ title, price, calories }) => {
      return renderMenuItem(title, price, calories);
    })
    .join("");

  document.querySelector("#espresso-menu-column-1").innerHTML =
    espressoMenuColumn1Content;

  const minColumn2Items = 4;
  const maxColumn2Items = 9;
  const espressoMenuColumn2Content = data
    .slice(minColumn2Items, maxColumn2Items)
    .map(({ title, price, calories }) => {
      return renderMenuItem(title, price, calories);
    })
    .join("");

  document.querySelector("#espresso-menu-column-2").innerHTML =
    espressoMenuColumn2Content;
};

const renderEspressoAndCoffeeModifiers = (data) => {
  const renderModifier = (title, price, calories) => `<div>
    <div class="modifier-group h2">${title}</div>
    <div class="modifier-description">
      Blonde or Signature
      <div class="modifier-details">${price} ${
    calories ? `| ${calories} Cal` : ""
  }</div>
    </div>
  </div>`;

  const espressoModifersContent = data
    .slice(0, 3)
    .map(({ title, price, calories }) => {
      return renderModifier(title, price, calories);
    })
    .join("");

  document.querySelector("#espresso-and-coffee-modifiers").innerHTML =
    espressoModifersContent;
};

const renderIcedColdbrewMenuItems = (data) => {
  const renderItem = (title, price, calories) => `
<div class="item-with-image">
  <div class="item-image-container">
    <img src="drink.png" alt="" />
  </div>
  <div class="item-description">
    <div class="title">${title}</div>
    <div class="subtitle">${price} | ${calories} CAL</div>
  </div>
</div>
  `;

  const icedColdbrewContent = data
    .slice(0, 3)
    .map(({ title, price, calories }) => {
      return renderItem(title, price, calories);
    })
    .join("");

  document.querySelector("#coldbrew-menu-items").innerHTML =
    icedColdbrewContent;
};

const fetchData = async (menuId) => {
  const response = await fetch(`http://localhost:3001/menus/${menuId}`);
  const data = await response.json();
  return data;
};

const getQueryParams = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  return params;
};

const main = async () => {
  const menuId = "main-menu-guid";
  const espressoAndCoffeeGroupId = "espresso-and-coffee-guid";
  const icedColdbrewGroupId = "iced-coldbrew-guid";

  let data;
  // data = await fetchData(menuId);
  data = {
    id: "main-menu-guid",
    groups: [
      {
        id: "espresso-and-coffee-guid",
        title: "Espresso & Coffee",
        items: [
          {
            title: "Iced Caramel Macchiato",
            price: "4.99",
            calories: 180,
          },
          {
            title: "Iced Cinnamon Macchiato",
            price: "4.99",
            calories: 180,
          },
          {
            title: "Iced White Chocolate Mocha",
            price: "4.99",
            calories: 180,
          },
          {
            title: "Vanilla Sweet Cream with Cold Brew",
            price: "4.99",
            calories: 180,
          },
          {
            title: "Cold Brew with Cold Foam",
            price: "4.99",
            calories: 180,
          },
          {
            title: "Iced Coffee",
            price: "4.99",
            calories: 180,
          },
          {
            title: "Caffe Latte",
            price: "4.99",
            calories: 180,
          },
          {
            title: "Cappuccino",
            price: "4.99",
            calories: 180,
          },
          {
            title: "Freshly Brewed Coffee",
            price: "4.99",
            calories: 180,
          },
        ],
        modifierGroups: [
          {
            title: "Espresso",
            price: "$1.00",
            calories: "5",
            items: [{ title: "Espresso A" }, { title: "Espresso B" }],
          },
          {
            title: "Flavours",
            price: "$1.00",
            calories: "0-25",
            items: [{ title: "Regular" }, { title: "Sugar-Free" }],
          },
          {
            title: "Non-dairy",
            price: "$1.00",
            items: [
              { title: "Coconutmilk" },
              { title: "Organic Soymilk" },
              { title: "Almondmilk" },
            ],
          },
        ],
      },
      {
        id: "iced-coldbrew-guid",
        title: "Iced Cold Brew",
        items: [
          { title: "Cold Brew", price: "4.99", calories: 5 },
          {
            title: "Cold Brew with Salted Cream Cold Foam",
            price: "6.99",
            calories: 230,
          },
          {
            title: "Cold Brew with Cascara Cold Foam",
            price: "5.99",
            calories: 80,
          },
        ],
      },
    ],
  };

  if (!data) return;

  const espressoAndCoffeeData = data.groups.find(
    (x) => x.id === espressoAndCoffeeGroupId
  );
  document.querySelector("#espresso-and-coffee-heading").innerHTML =
    espressoAndCoffeeData.title;
  renderEspressoAndCoffeeMenuItems(espressoAndCoffeeData.items);
  renderEspressoAndCoffeeModifiers(espressoAndCoffeeData.modifierGroups);

  const icedColdbrewData = data.groups.find(
    (x) => x.id === icedColdbrewGroupId
  );
  document.querySelector("#iced-coldbrew-heading").innerHTML =
    icedColdbrewData.title;
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
