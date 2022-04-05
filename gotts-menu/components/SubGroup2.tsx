import { Box, Flex, Grid, Heading, Text } from "theme-ui";
import { Item } from "../types";
import ItemLayout from "./ItemLayout";
import Price from "./Price";

interface SubGroup2 {
  name: string;
  items: Item[];
}

const SubGroup2: React.FC<SubGroup2> = ({ name, items }) => {
  return (
    <ItemLayout>
      <Box>
        <Heading variant="h3">{name}</Heading>
      </Box>
      <Box>
        {items.map(
          ({ id, name, price, description, items: sizes, inStock }) => {
            const type = description;

            return (
              <Grid key={id} columns="5fr 1fr" sx={{ alignItems: "baseline" }}>
                <Box>
                  <Text
                    sx={{
                      fontSize: 1,
                      fontStyle: "italic",
                      textDecoration: inStock ? "none" : "line-through",
                    }}
                  >
                    {type && <Text> {type} • </Text>}
                    {name && (
                      <Text sx={{ fontStyle: "normal" }}>{name}</Text>
                    )}{" "}
                  </Text>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  {sizes.length === 0 && <Price value={price} />}
                  {sizes && (
                    <Flex>
                      {sizes.map((x, i) => {
                        return (
                          <div key={x.id}>
                            <Price key={x.id} value={x.price} />
                            {i === 0 ? "/" : ""}
                          </div>
                        );
                      })}
                    </Flex>
                  )}
                </Box>
              </Grid>
            );
          }
        )}
      </Box>
      <Box></Box>
    </ItemLayout>
  );
};

export default SubGroup2;
