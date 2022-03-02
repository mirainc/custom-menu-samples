/** @jsxImportSource theme-ui */
import { Flex, Text } from "theme-ui";
import { Size } from "../types";
import Price from "./Price";

interface Sizes {
  value: Size[];
}

const Sizes: React.FC<Sizes> = ({ value }) => {
  return (
    <Flex as="ul" sx={{ listStylePosition: "inside", padding: 0 }}>
      {value.map((x) => {
        return (
          <li
            key={x.id}
            sx={{
              marginRight: 3,
              ":first-of-type": {
                display: "block",
              },
            }}
          >
            <Price value={x.price} /> <Text sx={{ fontSize: 0 }}>{x.name}</Text>
          </li>
        );
      })}
    </Flex>
  );
};

export default Sizes;
