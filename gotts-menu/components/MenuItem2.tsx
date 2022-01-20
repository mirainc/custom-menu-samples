/** @jsxImportSource theme-ui */
import { Box, Flex, Grid, Heading, Text } from "theme-ui";
import { Item, Modifier, Size } from "../types";

interface MenuItem2 {
  name: string;
  items: Item[];
  modifiers?: Modifier[];
  sizes: Size[];
}

const MenuItem2: React.FC<MenuItem2> = ({ name, items, modifiers, sizes }) => {
  return (
    <Grid columns={2}>
      <Box>
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
        {modifiers && (
          <Text sx={{ fontSize: 0 }}>
            Add flavors:{" "}
            {modifiers.map((x, i) => {
              const isLastItem = modifiers.length - 1 === i;
              return (
                <span key={x.id}>
                  <Text>{x.name}</Text>
                  {isLastItem ? " " : ", "}
                </span>
              );
            })}
            <Text sx={{ fontWeight: "bold", fontFamily: "heading" }}>
              {modifiers[0].price}
            </Text>
          </Text>
        )}
      </Box>
      {sizes && (
        <Box>
          <Flex as="ul" sx={{ listStylePosition: "inside", padding: 0 }}>
            {sizes.map((x) => {
              return (
                <li
                  key={x.id}
                  sx={{
                    marginRight: 3,
                    ":first-child": {
                      display: "block",
                    },
                  }}
                >
                  <Text sx={{ fontWeight: "bold", fontFamily: "heading" }}>
                    {x.price}
                  </Text>{" "}
                  <Text sx={{ fontSize: 0 }}>{x.name}</Text>
                </li>
              );
            })}
          </Flex>
        </Box>
      )}
    </Grid>
  );
};

export default MenuItem2;
