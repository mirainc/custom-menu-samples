import { Box, Flex, Text } from "theme-ui";
import Image from "next/image";
import Divider from "./Divider";

const Header: React.FC = () => {
  return (
    <Box mb={5}>
      <Flex
        ml={5}
        mb={3}
        sx={{
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <Image src="/logo.svg" alt="logo" width={312} height={64} />
        <Text
          sx={{
            fontFamily: "heading",
            fontSize: 0,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Serving the california roadside{" "}
          <Text color="textSecondary">since 1999</Text>
        </Text>
      </Flex>
      <Divider />
    </Box>
  );
};

export default Header;
