import { Box, Paragraph } from "theme-ui";
import Image from "next/image";
import Divider from "./Divider";

interface FooterProps {
  text?: string;
}

const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <Box sx={{ position: "fixed", bottom: 5, px: 4, width: "100%" }}>
      <Divider />
      {text ? (
        <Box mt={3}>
          <Paragraph sx={{ fontSize: 4, textAlign: "center", fontWeight: 700 }}>
            {text}
          </Paragraph>
        </Box>
      ) : (
        <Image src="/about-footer.jpeg" alt="footer" width={1135} height={98} />
      )}
    </Box>
  );
};

export default Footer;
