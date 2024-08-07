'use client'
import { Text, Container } from '@mantine/core';
import classes from './FooterLinks.module.css';
import Image from 'next/image';
import Link from 'next/link';

const data = [
  {
    title: 'Home',
    links: [
      { label: 'Debt Calculator', link: '/#' },
      { label: 'How It Works', link: '/#how_it_works' },
      { label: 'FAQ', link: '/#faq' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'What Is Lending Hand Debt', link: '/about#' },
      { label: 'Why Us', link: '/about#why_us' },
      
     
    ],
  },
  {
    title: 'Other',
    links: [
      { label: 'Services', link: '/services' },
      { label: 'Blog', link: '/blog' },
      { label: 'Contact Us', link: '/contact' },
    ],
  },
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Link
        key={index}
        className={classes.link}
    
        href={link.link}
        
      >
        {link.label}
      </Link>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer }>
      <Container className={classes.inner }>
        <div className={classes.logo }>
          <Image 
            src="/full_logo.png"
            alt="Lending Hand Debt Logo"
            width={120}
            height={120}
            className=' mb-2'
          />
         
          
        </div>
        <div className={classes.groups + " gap-16 "}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter + " mt-16"}>
        <Text size="xs" c="dimmed" className={classes.description + " w-fit"}>
          Lending Hand Debt helps clients prepare documentation and enroll in ethical debt solution programs. We work with trusted providers who handle settlement through close guidance based on their financial situation.
          </Text>
      </Container>
      <Container className={classes.afterFooter}>
        {/* <Text c="dimmed" size="sm">
          © 2024 Lending Hand Debt. All rights reserved.
        </Text> */}

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