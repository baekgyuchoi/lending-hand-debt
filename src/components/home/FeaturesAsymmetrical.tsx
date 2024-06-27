import { Text, SimpleGrid, Container, rem } from '@mantine/core';

import { PhoneCall, Wallet, FileCheck2 } from 'lucide-react'
import classes from './FeaturesAsymmetrical.module.css';
import { File } from 'buffer';

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: React.FC<any>;
  title: string;
  description: string;
}

function Feature({ icon: Icon, title, description, className, ...others }: FeatureProps) {
  return (
    <div className={classes.feature} {...others}>
      <div className={classes.overlay} />

      <div className='flex flex-col gap-2'>
        <Icon style={{ width: rem(120), height: rem(120) }} className="text-gray-400 text-center mb-2"  />
        <Text fw={700} fz="xl" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="lg">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: PhoneCall,
    title: 'Tell us about your debt',
    description:
      'Call us and recieve your free consultation. We will help you find the solution to your debt.',
  },
  {
    icon: Wallet,
    title: 'See your potential savings',
    description:
      'Find out how much faster you can resolve debt by partnering with us. Weigh your options.',
  },
  {
    icon: FileCheck2,
    title: 'Enroll in our program',
    description:
      'Start the journey to being debt-free with us.',
  },
];

export function FeaturesAsymmetrical() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <div  className=' mt-10 w-full border-t border-gray-200 pt-6'>
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50}>
        {items}
      </SimpleGrid>
    </div>
  );
}