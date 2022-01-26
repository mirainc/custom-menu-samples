import { Text } from "theme-ui";

interface PriceProps {
  value: number;
}

const Price: React.FC<PriceProps> = ({ value }) => {
  console.log({ value });
  return (
    <Text
      sx={{
        fontFamily: "heading",
        fontSize: 1,
      }}
    >
      {isNaN(value) ? value : value.toFixed(2)}
    </Text>
  );
};

export default Price;
