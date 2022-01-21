/** @jsxImportSource theme-ui */
import { Heading } from "theme-ui";

const Heading1: React.FC = ({ children }) => {
  return (
    <Heading variant="h1" as="h1">
      {children}
    </Heading>
  );
};

export default Heading1;
