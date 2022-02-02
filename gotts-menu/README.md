# Gotts Custom Menu App

The Gotts Custom Menu App contains several menu boards that are connected to the Raydiant Menu API.

**URLs**

- Eats and Drinks Menu Board: https://gotts-menu.vercel.app/menu-boards/eats-and-drinks
- Wine and Beer Menu Board: https://gotts-menu.vercel.app/menu-boards/wine-and-beer
- Late Night Flyer: https://gotts-menu.vercel.app/menu-boards/flyer.jpg

## Prerequisities

- Node (version defined in `.nvmrc`)
- Yarn

## Development

First, run the development server:

```bash
yarn dev
```

## Adding App to Raydiant Platform

See [here](https://raydiant.notion.site/How-do-I-develop-an-app-487d7064eeec402fb7d376a5f6e6eed9) for a comprehensive guide to building Raydiant apps.

## Builder Inputs

There are three builder inputs for this project. These can be configured after creating a new app in [Raydiant's Developer portal](https://developers.raydiant.com/)

- Footnote (text input) - Corresponds to a query param
  ![Footnote](footnote-builder-input.png)
- Bottom Text (text input) - Corresponds to a query param
  ![Bottom Text](espresso-and-coffee-bottom-text-builder-input.png)
- Subheading (text input) - Corresponds to a query param
  ![Subheading](espresso-and-coffee-subheading-builder-input.png)

[Code to retrieve query param](https://github.com/mirainc/custom-menu-samples/blob/8ae608baa41ffefbfc8cc63d0f0abc8011f97726/vanilla-js/js/scripts.js#L84-L88)

# Deployment

CI/CD is setup to deploy our apps using the [Neflify](https://www.netlify.com/)
