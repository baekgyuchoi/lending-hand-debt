'use client'
import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { Loader2 } from 'lucide-react';
import classes from './FooterLinks.module.css';
import Image from 'next/image';

const data = [
  {
    title: 'Home',
    links: [
      { label: 'Debt Calculator', link: '#' },
      { label: 'How It Works', link: '#' },
      { label: 'FAQ', link: '#' },
      { label: 'Contact Us', link: '#' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'What Is Lending Hand Debt', link: '#' },
      { label: 'Why Us', link: '#' },
      { label: 'Name', link: '#' },
      { label: 'Contact Us', link: '#' },
    ],
  },
  {
    title: 'Other',
    links: [
      { label: 'Services', link: '#' },
      { label: 'Blog', link: '#' },
      { label: 'Contact Us', link: '#' },
      { label: 'Contact Us', link: '#' },
    ],
  },
];

export function MobileFooter() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className="border-b border-gray-500/50 p-6" key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        <div className='grid grid-cols-2 justify-between'>
            {links}
        </div>
      </div>
    );
  });

  return (
    <footer className={classes.footer }>
      <Container className={classes.inner +"flex-col"}>
        <div className={classes.logo + " mb-8"}>
            <div className='flex items-center justify-center mb-4'>
                <Image 
                    src="/full_logo.png"
                    alt="Lending Hand Debt Logo"
                    width={120}
                    height={120}
                    className=' mb-2'
                />
            </div>
            <Text size="xs" c="dimmed" className={classes.description}>
                Lending Hand Debt helps clients prepare documentation and enroll in ethical debt solution programs. We work with trusted providers who handle settlement through close guidance based on their financial situation.
            </Text>
        
          
        </div>
        <div className="flex flex-col gap-4">{groups}</div>
      </Container>
      <Container className={classes.afterFooter + " mt-16"}>
        
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 Lending Hand Debt. All rights reserved.
        </Text>

        {/* <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <Loader2 style={{ width: rem(18), height: rem(18) }}  />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <Loader2 style={{ width: rem(18), height: rem(18) }}  />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <Loader2 style={{ width: rem(18), height: rem(18) }}  />
          </ActionIcon>
        </Group> */}
      </Container>
    </footer>
  );
}