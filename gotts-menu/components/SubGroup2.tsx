/** @jsxImportSource theme-ui */
import { Box, Flex, Grid, Heading, Text } from "theme-ui";
import { Item } from "../types";

interface SubGroup2 {
  name: string;
  items: Item[];
}

const SubGroup2: React.FC<SubGroup2> = ({ name, items }) => {
  return (
    <Box>
      <Box>
        <Heading variant="h3">{name}</Heading>
      </Box>
      <Box>
        {items.map(({ id, name, price, sizes, winery, location }) => (
          <Grid
            key={id}
            columns="3fr 1fr"
            sx={{ alignItems: "baseline" }}
            mb={3}
          >
            <Text sx={{ fontSize: 1 }}>
              <Text>{name}</Text> • <Text>{winery}</Text>{" "}
              <Text sx={{ fontStyle: "italic" }}>({location})</Text>
            </Text>
            <Box>
              {price && <div>{price}</div>}
              {sizes && (
                <Flex>
                  {sizes.map((x) => {
                    return (
                      <Text key={x.id}>
                        <Text>{x.price}</Text>
                      </Text>
                    );
                  })}
                </Flex>
              )}
            </Box>
          </Grid>
        ))}
      </Box>
      <Box></Box>
    </Box>
  );
};

export default SubGroup2;
