const renderEspressoAndCoffeeMenuItems = (data) => {
  const renderMenuItem = ({ name, price, calories, inStock }) =>
    `<div class="item">
      <div class="title${inStock ? "" : " out-of-stock"}">${name}</div>
      <div class="subtitle">LARGE | ${formatPrice(
        price
      )} | ${calories} CAL</div>
    </div>`;

  const minColumn1Items = 0;
  const maxColumn1Items = 4;
  const espressoMenuColumn1Content = data
    .slice(minColumn1Items, maxColumn1Items)
    .map(renderMenuItem)
    .join("");

  document.querySelector("#espresso-menu-column-1").innerHTML =
    espressoMenuColumn1Content;

  const minColumn2Items = 4;
  const maxColumn2Items = 9;
  const espressoMenuColumn2Content = data
    .slice(minColumn2Items, maxColumn2Items)
    .map(renderMenuItem)
    .join("");

  document.querySelector("#espresso-menu-column-2").innerHTML =
    espressoMenuColumn2Content;
};

const renderEspressoAndCoffeeModifiers = (data) => {
  const renderModifier = (item) => {
    const { name, price } = item;
    const calories = item.calories || getTag(item.tags, "calories");

    return `<div>
      <div class="modifier-group h2">${name}</div>
      <div class="modifier-description">
        Blonde or Signature
        <div class="modifier-details">$${formatPrice(price)} ${
      calories ? `| ${calories} Cal` : ""
    }</div>
      </div>
    </div>`;
  };

  const espressoModifersContent = data.slice(0, 3).map(renderModifier).join("");

  document.querySelector("#espresso-and-coffee-modifiers").innerHTML =
    espressoModifersContent;
};

const renderIcedColdbrewMenuItems = (data) => {
  const renderItem = ({ name, price, calories, inStock, tags }) => {
    const itemId = getTag(tags, "id");

    const tagImageMap = {
      regular: "cold-brew.webp",
      "salted-caramel": "cold-brew-salted-caramel.webp",
      milk: "cold-brew-milk.webp",
    };

    return `
    <div class="item-with-image">
      <div class="item-image-container">
        <img src=${tagImageMap[itemId]} alt="" />
      </div>
      <div class="item-description">
        <div class="title${inStock ? "" : " out-of-stock"}">${name}</div>
        <div class="subtitle">${formatPrice(price)} | ${calories} CAL</div>
      </div>
    </div>
  `;
  };

  const icedColdbrewContent = data.slice(0, 3).map(renderItem).join("");

  document.querySelector("#coldbrew-menu-items").innerHTML =
    icedColdbrewContent;
};
