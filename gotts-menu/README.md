# Gotts Custom Menu App

The Gotts Custom Menu App contains several menu boards that are connected to the Raydiant Menu API.

**URLs**

_Note: Instructions on how to fetch available `menuIds` for a given API key are available in the "Multi-location support" section below._

_Example menuId: 20e5c762-f2df-483e-9ed0-404562d7efd3_

**Localhost**

- Eats and Drinks Menu Board: http://localhost:3000/menu-boards/eats-and-drinks?menuId={menuId}
- Wine and Beer Menu Board: http://localhost:3000/menu-boards/wine-and-beer?menuId={menuId}
- Late Night Flyer: http://localhost:3000/menu-boards/flyer.jpg

**Production**

- Eats and Drinks Menu Board: https://gotts-custom-menu.vercel.app/menu-boards/eats-and-drinks?menuId={menuId}
- Wine and Beer Menu Board: https://gotts-custom-menu.vercel.app/menu-boards/wine-and-beer?menuId={menuId}
- Late Night Flyer: https://gotts-custom-menu.vercel.app/menu-boards/flyer.jpg

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

### 1) Location - corresponds to a query param

- Input type: Select
  ![Menu Board](location-builder-input.png)

### 2) Menu Board - corresponds to a route

- Input type: Select
  ![Menu Board](menu-board-builder-input.png)

### 3) Footer Text - corresponds to a query param

- Input type: Text
  ![Footer Text](footer-text-builder-input.png)

## Fetching Menu Data

To fetch menu data, we need to make sure we've tagged the necessary groups in Toast first. Additionally, if you have several versions of your menu, e.g. different menus for different locations, you'll also need to follow the "Multi-location/menu support" guide below.

Base API URL:

```
v1/groups?tags=<tag>&menus=<menuId>&depth=<depth>
```

Params:

`tags`: filter for tags

`menus`: filter for `menuIds`

`depth`: set depth for returned payload

![menu data](hierachy.png)

> **⚠ Important:** All items in Toast must have the visibility field set to "kiosk" otherwise our API won't return the resource.

### Configuring tags

Tags are the recommended way of fetching data for a particular group. Follow the steps below to add tags to your menu groups:

1. Go to your Toast sandbox
2. Select your menu (e.g Gotts Roadside - SF Ferry Building)
3. Find all relevant groups that require tagging
4. Add a tag to each group

5. Confirm you can make an API request to fetch group data

```
/v1/groups?tags=<tag>&depth=<depth>
```

### Multi-location/menu support

A couple of additional steps are required for multi-location/menu support.

1. Using your API key, make a call to `/v1/menus` to retrieve the list of menus your API key has access to

**cURL example:**

```
curl --location --request GET 'https://menu-api.raydiant.com/v1/menus' \
--header 'x-api-key: <API_KEY>'
```

2. Take note of all the `menuIds` required for your digital menu
3. Go to the developer portal and select your app
4. Creat a new "select" builder input
5. Populate the "options" section with the aforementioned `menuIds`
   ![Location builder input](menuIds-select.png)
6. Confirm you can make an API request to fetch group data for a given menu/location

```
/v1/groups?tags=<tag>&menus=<menuId>depth=<depth>
```

### Modifiers

While modifiers are supported (1-level deep) modifier groups aren't fully supported yet. To achieve modifier-group-like behaviour use tags + items.
In the example below, there's a total of three different modifiers
![modifiers](modifiers.png)

1. Price sizing
2. Flavors
3. Additional Flavors

**Price Sizing:**

1. In Toast, add price sizing to the desired menu item
   ![price-sizing](price-sizing-example.png)
2. On the same item, add the `size` tag to the item

**Flavors:**
In this example, flavors are `items` on the "Fountain Soda" sub-group.

**Additional Flavors:**
In this example, additional items are `items` on the "Fountain Soda" sub-group with the addition of a `additional-flavor` tag so the frontend can filter these out from the other flavors.

## Offline playback

To enable offline playback support, ensure your web server returns a `max-age` value greater than 0 in the `Cache-Control` headers. E.g. `max-age=1`.

## Responsive Notes

The example menus have target resolutions set to `1080x1920`. To support both 1080p and 4K additional code is required.

There are two methods to achieve this behaviour:

1. **Fluid style**

   Instead of using pixel values for UI elements and fonts, `vw` units can be used so that UI elements scale to a variety of viewport widths.
   Below is an example of a helper function that can be used to achieve the aforementioned behaviour.

```js
// Converts pixels to viewport units to make the layouts scale proportionally to screen width.

// Use snippet below for 1080p mockups

// Landscape
export const vw1920 = (num) => `${(num / 1920) * 100}vw`;
// Portrait
export const vw1080 = (num) => `${(num / 1080) * 100}vw`;

// Use snippet below for 4k mockups

// Landscape
export const vw3840 = (num) => `${(num / 3840) * 100}vw`;
// Portrait
export const vw2160 = (num) => `${(num / 2160) * 100}vw`;
```

2. **Target specific viewports (non-fluid)**

   If you only intend to support 1080p and 4k, media queries can be used to target those specific viewports.

   With CSS this can be achieved by modifying the root font-size for 1080p and 4k resolutions. With this method, you only need to change the font-size in a single place.

   With Theme-UI you can create separate themes for 1080p and 4k targets (e.g. `4kTheme` and `1080pTheme`). Responsive code would then intelligently handle switching between these themes depending on the targer resolution.

## Deployment

CI/CD is set up to deploy our apps using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
