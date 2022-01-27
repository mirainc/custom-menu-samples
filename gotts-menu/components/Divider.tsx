/** @jsxImportSource theme-ui */
import { Box, ThemeUIStyleObject } from "theme-ui";

const Divider: React.FC = () => {
  return (
    <Box sx={styles.root}>
      <hr sx={styles.divider} />
    </Box>
  );
};

const styles = {
  root: {
    clear: "both",
    position: "relative",
    height: "0.5rem",
    width: "100%",
    textAlign: "center",
    ":before": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "50%",
      height: "100%",
      left: "0",
      top: "0",
      backgroundColor: "red",
    },
    ":after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "50%",
      height: "100%",
      right: "0",
      top: "0",
      backgroundColor: "lightGray",
    },
  } as ThemeUIStyleObject,
  divider: {
    display: "inline-block",
    position: "absolute",
    width: "25%",
    height: "100%",
    backgroundColor: "gray",
    margin: "0",
    left: "37.5%",
    border: 0,
    zIndex: 1,
  } as ThemeUIStyleObject,
};

export default Divider;
