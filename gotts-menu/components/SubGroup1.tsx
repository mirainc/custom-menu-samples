/** @jsxImportSource theme-ui */
import { Box, Grid, Heading, Text } from "theme-ui";
import { Item, Modifier, Size } from "../types";
import ItemLayout from "./ItemLayout";
import Price from "./Price";
import Sizes from "./Sizes";

interface SubGroup1 {
  name: string;
  items: Item[];
  modifiers?: Modifier[];
  sizes: Size[];
  price?: number;
}

const SubGroup1: React.FC<SubGroup1> = ({
  name,
  items,
  modifiers,
  sizes,
  price,
}) => {
  const maxItemsPerColumn = 3;
  const itemColumns = items.length > maxItemsPerColumn ? 2 : 1;

  return (
    <ItemLayout>
      <Grid columns="7fr 5fr" sx={{ alignItems: "baseline" }}>
        <Box>
          <Heading variant="h3">{name}</Heading>
          <ul
            sx={{
              columns: itemColumns,
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
          {modifiers && (
            <Text sx={{ fontSize: 0 }}>
              Add flavors:{" "}
              {modifiers.map((x, i) => {
                const isLast = modifiers.length - 1 === i;
                return (
                  <Text key={x.id}>
                    {x.name}
                    {isLast ? " " : ", "}
                  </Text>
                );
              })}
              <Text sx={{ fontWeight: "bold", fontFamily: "heading" }}>
                {modifiers[0].price}
              </Text>
            </Text>
          )}
        </Box>

        <Box>
          {sizes && <Sizes value={sizes} />}
          {price && <Price value={price} />}
        </Box>
      </Grid>
    </ItemLayout>
  );
};

export default SubGroup1;
