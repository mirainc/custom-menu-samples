import { Box } from "theme-ui";

const Column: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        ":not(:last-child)": {
          borderRight: "1px solid",
          borderColor: "border",
          marginRight: -4,
          paddingRight: 4,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default Column;
