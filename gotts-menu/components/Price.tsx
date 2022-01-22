/** @jsxImportSource theme-ui */
import { Text } from "theme-ui";

const Price: React.FC = ({ children }) => {
  return (
    <Text
      sx={{
        fontWeight: "bold",
        fontFamily: "heading",
        fontSize: 1,
      }}
    >
      {children}
    </Text>
  );
};

export default Price;
