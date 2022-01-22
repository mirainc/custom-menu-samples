/** @jsxImportSource theme-ui */
import { Text } from "theme-ui";

interface PriceProps {
  value: number;
}

const Price: React.FC<PriceProps> = ({ value }) => {
  return (
    <Text
      sx={{
        fontWeight: "bold",
        fontFamily: "heading",
        fontSize: 1,
      }}
    >
      {value}
    </Text>
  );
};

export default Price;
