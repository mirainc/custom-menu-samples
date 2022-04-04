import { Heading, Text } from "theme-ui";
import ItemLayout from "./ItemLayout";
import Price from "./Price";

interface Item1 {
  name: string;
  description: string;
  price: number;
  inStock: boolean;
}

const Item1: React.FC<Item1> = ({ name, description, price, inStock }) => {
  return (
    <ItemLayout>
      <Heading
        variant="h3"
        sx={{ textDecoration: inStock ? "none" : "line-through" }}
      >
        {name}
      </Heading>
      <Text
        sx={{
          fontSize: 1,
          textDecoration: inStock ? "none" : "line-through",
        }}
      >
        {description}
      </Text>{" "}
      <Price value={price} />
    </ItemLayout>
  );
};

export default Item1;
