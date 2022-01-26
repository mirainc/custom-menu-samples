import { Box } from "theme-ui";

const ItemLayout: React.FC = ({ children }) => {
  return (
    <Box mb={4} as="section">
      {children}
    </Box>
  );
};

export default ItemLayout;
