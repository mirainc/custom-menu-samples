/** @jsxImportSource theme-ui */
import { Box, Flex, Grid, Heading, Text } from "theme-ui";
import { Item, Modifier, Size } from "../types";
import Sizes from "./Sizes";

interface MenuItem2 {
  name: string;
  items?: Item[];
  modifiers?: Modifier[];
  sizes?: Size[];
  price: string;
}

const MenuItem2: React.FC<MenuItem2> = ({
  name,
  items,
  modifiers,
  sizes,
  price,
}) => {
  const maxItemsPerColumn = 3;

  const getItemColumns = (items: Item[]) => {
    return items.length > maxItemsPerColumn ? 2 : 1;
  };

  return (
    <Grid columns={2} sx={{ alignItems: "baseline" }} mb={3}>
      <Box>
        <Heading variant="h3">{name}</Heading>
        {items && (
          <ul
            sx={{
              columns: getItemColumns(items),
              padding: 0,
              listStyle: "inside",
              margin: 0,
            }}
          >
            {items.map((x) => {
              return (
                <li key={x.id}>
                  <Text sx={{ fontSize: 1 }}>{x.name}</Text>
                </li>
              );
            })}
          </ul>
        )}

        {modifiers && (
          <Text sx={{ fontSize: 0 }}>
            Add flavors:{" "}
            {modifiers.map((x, i) => {
              const isLastItem = modifiers.length - 1 === i;
              return (
                <span key={x.id}>
                  {x.name}
                  {isLastItem ? " " : ", "}
                </span>
              );
            })}
            <span sx={{ fontWeight: "bold", fontFamily: "heading" }}>
              {modifiers[0].price}
            </span>
          </Text>
        )}
      </Box>
      <Box>
        {sizes && <Sizes sizes={sizes} />}

        {price && (
          <Text sx={{ fontWeight: "bold", fontFamily: "heading", fontSize: 0 }}>
            {price}
          </Text>
        )}
      </Box>
    </Grid>
  );
};

export default MenuItem2;
