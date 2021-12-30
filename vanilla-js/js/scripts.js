const renderEspressoAndCoffeeMenuItems = (data) => {
  const renderMenuItem = (title, price, calories) => `<div class="item">
    <div class="title">${title}</div>
    <div class="subtitle">LARGE | ${price} | ${calories} CAL</div>
  </div>`;

  const espressoMenuColumn1Content = data
    .slice(0, 4)
    .map(({ title, price, calories }) => {
      return renderMenuItem(title, price, calories);
    })
    .join("");

  document.querySelector("#espresso-menu-column-1").innerHTML =
    espressoMenuColumn1Content;

  const espressoMenuColumn2Content = data
    .slice(4, 9)
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

const getData = async (menuId) => {
  const response = await fetch(`http://localhost:3000/menus/${menuId}`);
  const data = await response.json();
  return data;
};

const main = async () => {
  const menuId = "main-menu";
  const groupId = "espresso-and-coffee";

  const data = await getData(menuId);
  console.log(data);

  if (!data) return;

  const espressoAndCoffeeData = data.groups.find((x) => x.id === groupId);

  document.querySelector("#espresso-and-coffee-heading").innerHTML =
    espressoAndCoffeeData.title;
  renderEspressoAndCoffeeMenuItems(espressoAndCoffeeData.items);
  renderEspressoAndCoffeeModifiers(espressoAndCoffeeData.modifierGroups);

  const icedColdbrewData = data.groups.find((x) => x.id === "iced-coldbrew");
  document.querySelector("#iced-coldbrew-heading").innerHTML =
    icedColdbrewData.title;
  renderIcedColdbrewMenuItems(icedColdbrewData.items);
};

main();
