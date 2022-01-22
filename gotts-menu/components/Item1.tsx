import { Box, Heading, Text } from "theme-ui";
import ItemLayout from "./ItemLayout";
import Price from "./Price";

interface Item1 {
  name: string;
  description: string;
  price: string;
}

const Item1: React.FC<Item1> = ({ name, description, price }) => {
  return (
    <ItemLayout>
      <Heading variant="h3">{name}</Heading>
      <Text sx={{ fontSize: 1 }}>{description}</Text> <Price value={price} />
    </ItemLayout>
  );
};

export default Item1;
