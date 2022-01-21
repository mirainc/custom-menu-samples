import { Box, Grid, Heading, Text } from "theme-ui";

interface SubGroup2 {
  name: string;
}

const SubGroup2: React.FC<SubGroup2> = ({ name }) => {
  return (
    <Grid columns={2} sx={{ alignItems: "baseline" }} mb={3}>
      <Box>
        <Heading variant="h3">{name}</Heading>
      </Box>
      <Box></Box>
    </Grid>
  );
};

export default SubGroup2;
