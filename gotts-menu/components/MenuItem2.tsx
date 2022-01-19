/** @jsxImportSource theme-ui */
import { Box, Heading, Text } from "theme-ui";
import { Item, ModifierGroup } from "../types";

interface MenuItem2 {
  name: string;
  items: Item[];
  modifierGroups: ModifierGroup[];
}

const MenuItem2: React.FC<MenuItem2> = ({ name, items, modifierGroups }) => {
  return (
    <Box mb={3}>
      <Heading variant="h3">{name}</Heading>
      <ul
        sx={{
          columns: 2,
          padding: 0,
          listStyle: "inside",
          margin: 0,
          fontSize: 1,
        }}
      >
        {items.map((x) => {
          return <li key={x.id}>{x.name}</li>;
        })}
      </ul>
      <Text sx={{ fontSize: 0 }}>
        Add flavors:{" "}
        {modifierGroups[0].items.map((x, i) => {
          const isLastItem = modifierGroups[0].items.length - 1 === i;
          return (
            <>
              <Text key={x.id}>{x.name}</Text>
              {isLastItem ? " " : ", "}
            </>
          );
        })}
        <Text sx={{ fontWeight: "bold", fontFamily: "heading" }}>
          {modifierGroups[0].price}
        </Text>
      </Text>
    </Box>
  );
};

export default MenuItem2;
