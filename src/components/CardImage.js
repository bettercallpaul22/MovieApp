import {
  createStyles,
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
} from "@mantine/core";
import {  NavLink } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.lg,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

const CardImage = ({props}) => {

  const { classes } = useStyles();



  const cards = props.map((mockdata, imdbID) => (
    <NavLink to={`/movie/${mockdata.imdbID}`}>
    <Card
      key={mockdata.imdbID}
      p="md"
      radius="md"
      component="a"
      href="#"
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={mockdata.Poster} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {mockdata.Year}
      </Text>
      <Text className={classes.title} mt={5}>
        {mockdata.Title}
      </Text>
      <Text className={classes.title} mt={5}>
        {mockdata.Type}
      </Text>
    </Card>
    </NavLink>
  ));

  return (
  
    <Container py="xl">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
       
        {cards}
        
      </SimpleGrid>
    </Container>

  );
};

export default CardImage;
