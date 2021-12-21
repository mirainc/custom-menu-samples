(function () {
  const data = {
    groups: [
      {
        title: "Espresso & Coffee",
        items: [
          { title: "Iced Caramel Macchiato", price: "4.99", calories: 180 },
          { title: "Iced Cinnamon Macchiato", price: "4.99", calories: 180 },
          { title: "Iced White Chocolate Mocha", price: "4.99", calories: 180 },
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
            title: "Iced Late",
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
      { title: "Coldbrew", items: [] },
    ],
  };
  const menuItem = (title, size, price, calories) => `<div class="item">
    <div class="title">${title}</div>
    <div class="subtitle">${size} | ${price} | ${calories} CAL</div>
  </div>`;

  const espressoMenuColumn1Content = `
    
  `;

  document.querySelector("#espresso-menu-column-1").innerHTML = menuItem();

  //   <div class="item">
  //   <div class="title">Iced White Chocolate Mocha</div>
  //   <div class="subtitle">Small | 4.99 | 180 CAL</div>
  // </div>
  // <div class="item">
  //   <div class="title">Iced White Chocolate Mocha</div>
  //   <div class="subtitle">Small | 4.99 | 180 CAL</div>
  // </div>
  // <div class="item">
  //   <div class="title">Iced White Chocolate Mocha</div>
  //   <div class="subtitle">Small | 4.99 | 180 CAL</div>
  // </div>
  // <div class="item">
  //   <div class="title">Iced White Chocolate Mocha</div>
  //   <div class="subtitle">Small | 4.99 | 180 CAL</div>
  // </div>
})();

// Menus - can contain modifiers, items, groups
// Groups - can contain modifiers, items, sub-groups
// Sub-Groups - can contain modifiers, items
// Items -  can contain modifiers
// Modifiers
