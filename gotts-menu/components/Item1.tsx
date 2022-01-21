import { Box, Heading, Text } from "theme-ui";

interface Item1 {
  name: string;
  description: string;
  price: string;
}

const Item1: React.FC<Item1> = ({ name, description, price }) => {
  return (
    <Box mb={3}>
      <Heading variant="h3">{name}</Heading>
      <Text sx={{ fontSize: 1 }}>{description}</Text>{" "}
      <Text sx={{ fontWeight: "bold", fontFamily: "heading", fontSize: 1 }}>
        {price}
      </Text>
    </Box>
  );
};

export default Item1;
