/** @jsxImportSource theme-ui */
import { Box, Grid, Heading, Text } from "theme-ui";
import { Item, Size } from "../types";

interface SubGroup {
  name: string;
  items: Item[];
  sizes: Size[];
}

const SubGroup: React.FC<SubGroup> = ({ name, items }) => {
  return (
    <Box mb={4} as="section">
      <Heading variant="h3">{name}</Heading>
      {items.map((x) => {
        return (
          <Grid key={x.id} columns={2} sx={{ alignItems: "baseline" }}>
            <Box>
              <Text sx={{ fontSize: 1 }}>{x.name}</Text>
            </Box>
          </Grid>
        );
      })}
    </Box>
  );
};

export default SubGroup;
