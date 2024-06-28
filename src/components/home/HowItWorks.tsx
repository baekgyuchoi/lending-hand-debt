import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import classes from './HowItWorks.module.css';
import { FeaturesAsymmetrical } from './FeaturesAsymmetrical';

const mockdata = [
  {
    title: 'Extreme performance',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
    icon: IconGauge,
  },
  {
    title: 'Privacy focused',
    description:
      'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
    icon: IconUser,
  },
  {
    title: 'No third parties',
    description:
      'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
    icon: IconCookie,
  },
];

export function HowItWorks() {

  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={'dark' ? 'gray' : 'blue'}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <div className=' px-6 my-20'>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">How it works</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to reduce your debt with our expert advice.
          </p>
        </div>


      {/* <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50} className='mt-10 border-t border-gray-200 pt-10'>
        {features}
      </SimpleGrid> */}
      <FeaturesAsymmetrical  />
    </div>
  );
}