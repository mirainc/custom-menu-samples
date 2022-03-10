/** @jsxImportSource theme-ui */
import Footer from "./Footer";
import Header from "./Header";

interface MainLayoutProps {
  footerText?: string;
  showQRCode?: boolean;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  footerText,
  showQRCode,
}) => {
  return (
    <>
      <Header />
      <main sx={{ px: 5, pt: 4, pb: 5 }}>{children}</main>
      <Footer text={footerText} showQRCode={showQRCode} />
    </>
  );
};

export default MainLayout;
