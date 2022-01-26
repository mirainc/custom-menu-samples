import { Box, Grid, Heading, Text } from "theme-ui";
import { Item, Modifier, Size } from "../types";
import ItemLayout from "./ItemLayout";
import Price from "./Price";
import Sizes from "./Sizes";

interface Item2 {
  name: string;
  items?: Item[];
  modifiers?: Modifier[];
  sizes?: Size[];
  price: string;
}

const Item2: React.FC<Item2> = ({ name, items, modifiers, sizes, price }) => {
  return (
    <ItemLayout>
      <Grid columns="7fr 5fr" sx={{ alignItems: "baseline" }}>
        <Box>
          <Heading variant="h3">{name}</Heading>
        </Box>
        <Box>
          {sizes && <Sizes value={sizes} />}
          {price && <Price value={price} />}
        </Box>
      </Grid>
    </ItemLayout>
  );
};

export default Item2;
