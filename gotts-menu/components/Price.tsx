import { Text, ThemeUIStyleObject } from "theme-ui";

interface PriceProps {
  value: number;
}

const Price: React.FC<PriceProps> = ({ value }) => {
  // Consider using tags instead of `value` to render "A.Q" text.
  if (!value) {
    return <Text sx={styles.root}>A.Q</Text>;
  }

  return (
    <Text sx={styles.root}>{isNaN(value) ? value : value.toFixed(2)}</Text>
  );
};

const styles = {
  root: {
    fontFamily: "heading",
    fontSize: 1,
  } as ThemeUIStyleObject,
};

export default Price;
