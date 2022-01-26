import { Box, Heading } from "theme-ui";

interface GroupProps {
  heading: string;
}

const Group: React.FC<GroupProps> = ({ children, heading }) => {
  return (
    <Box as="section" mb={4}>
      <Heading variant="h2">{heading}</Heading>
      {children}
    </Box>
  );
};

export default Group;
