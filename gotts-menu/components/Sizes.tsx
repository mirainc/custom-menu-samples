/** @jsxImportSource theme-ui */
import { Box, Flex, Grid, Heading, Text } from "theme-ui";
import { Item, Modifier, Size } from "../types";
import Price from "./Price";

interface Sizes {
  sizes: Size[];
}

const Sizes: React.FC<Sizes> = ({ sizes }) => {
  return (
    <Flex as="ul" sx={{ listStylePosition: "inside", padding: 0 }}>
      {sizes.map((x) => {
        return (
          <li
            key={x.id}
            sx={{
              marginRight: 3,
              ":first-child": {
                display: "block",
              },
            }}
          >
            <Price>{x.price}</Price> <Text sx={{ fontSize: 0 }}>{x.name}</Text>
          </li>
        );
      })}
    </Flex>
  );
};

export default Sizes;
