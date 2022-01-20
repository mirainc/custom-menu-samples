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
      <Text sx={{ fontSize: 1 }}>{description}</Text>{" "}
      <Text sx={{ fontWeight: "bold", fontFamily: "heading", fontSize: 1 }}>
        {price}
      </Text>
    </Box>
  );
};

export default MenuItem1;
