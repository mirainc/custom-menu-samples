/** @jsxImportSource theme-ui */
import { Box, Flex, Grid, Heading, Text } from "theme-ui";
import { Item } from "../../types";
import Price from "../Price";

interface SubGroup2 {
  name: string;
  items: Item[];
}

const SubGroup2: React.FC<SubGroup2> = ({ name, items }) => {
  return (
    <Box mb={4} as="section">
      <Box>
        <Heading variant="h3">{name}</Heading>
      </Box>
      <Box>
        {items.map(
          ({ id, type, name, price, sizes, location, volume, abv }) => (
            <Grid key={id} columns="5fr 1fr" sx={{ alignItems: "baseline" }}>
              <Box>
                <Text sx={{ fontSize: 1, fontStyle: "italic" }}>
                  {type && <Text> {type} • </Text>}
                  {name && (
                    <Text sx={{ fontStyle: "normal" }}>{name}</Text>
                  )}{" "}
                  {location && <Text>({location})</Text>}{" "}
                  {volume && <Text>{volume}</Text>}
                  {abv && <Text>({abv})</Text>}
                </Text>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "end" }}>
                {price && <Price>{price}</Price>}
                {sizes && (
                  <Flex>
                    {sizes.map((x, i) => {
                      return (
                        <Price key={x.id}>
                          <Text>{x.price}</Text>
                          {i === 0 ? "/" : ""}
                        </Price>
                      );
                    })}
                  </Flex>
                )}
              </Box>
            </Grid>
          )
        )}
      </Box>
      <Box></Box>
    </Box>
  );
};

export default SubGroup2;
