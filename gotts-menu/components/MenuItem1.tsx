import { Box, Heading, Text } from "theme-ui";

interface MenuItem1 {
  name: string;
  description: string;
  price: string;
}

const MenuItem1: React.FC<MenuItem1> = ({ name, description, price }) => {
  return (
    <Box mb={3}>
      <Heading variant="h3">{name}</Heading>
      <Text>{description}</Text>{" "}
      <Text sx={{ fontWeight: "bold", fontFamily: "heading" }}>{price}</Text>
    </Box>
  );
};

export default MenuItem1;
