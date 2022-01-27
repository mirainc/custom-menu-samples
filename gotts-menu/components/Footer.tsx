import { Box } from "theme-ui";
import Image from "next/image";
import Divider from "./Divider";

const Footer: React.FC = () => {
  return (
    <Box sx={{ position: "fixed", bottom: 5, mx: 4 }}>
      <Divider />
      <Image src="/about-footer.jpeg" alt="footer" width={1135} height={98} />
    </Box>
  );
};

export default Footer;
