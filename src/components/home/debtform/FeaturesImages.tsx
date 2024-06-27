import { Image, Text, Container, ThemeIcon, Title, SimpleGrid } from '@mantine/core';

import classes from './FeaturesImages.module.css';

const data = [
  {
    image: 'auditors',
    title: 'Pharmacists',
    description: 'Azurill can be seen bouncing and playing on its big, rubbery tail',
  },
  {
    image: 'lawyers',
    title: 'Lawyers',
    description: 'Fans obsess over the particular length and angle of its arms',
  },
  {
    image: 'accountants',
    title: 'Bank owners',
    description: 'They divvy up their prey evenly among the members of their pack',
  },
  {
    image: 'others',
    title: 'Others',
    description: 'Phanpy uses its long nose to shower itself',
  },
];

export function FeaturesImages() {
  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
      <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
        <Image src={'/icon_logo.png'} />
      </ThemeIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text c="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Container size={700} className={classes.wrapper + ""}>
      

      <Title className={classes.title} order={2}>
        <span className={classes.highlight}>Reduce</span> your monthly payments
      </Title>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
          Its lungs contain an organ that creates electricity. The crackling sound of electricity
          can be heard when it exhales. Azurill’s tail is large and bouncy. It is packed full of the
          nutrients this Pokémon needs to grow.
        </Text>
      </Container>

      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
        {items}
      </SimpleGrid>
    </Container>
  );
}