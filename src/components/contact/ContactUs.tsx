import {
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    ActionIcon,
  } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './ContactUs.module.css';
import { ContactIconsList } from '../../components/contact/ContactIcons';
  
const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];
  
export function ContactUs() {
    const icons = social.map((Icon, index) => (
      <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
        <Icon size="1.4rem" stroke={1.5} />
      </ActionIcon>
    ));
  
    return (
      <div className={classes.wrapper}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <div>
            <Title className={classes.title}>Contact us</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Leave your phone number and  email and we will get back to you within 24 hours
            </Text>
  
            <ContactIconsList />
  
            <Group mt="xl">{icons}</Group>
          </div>
          <div className={classes.form}>
                <TextInput
                label="Name"
                placeholder="John Doe"
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
                />
                 <TextInput
                label="Email"
                placeholder="your@email.com"
                required
                classNames={{ input: classes.input, label: classes.inputLabel }}
                />
                 <TextInput
                label="Phone Number"
                placeholder="123-456-7890"
                required
                classNames={{ input: classes.input, label: classes.inputLabel }}
                />
                <Textarea
                required
                label="Your message"
                placeholder="I want a free consultation about debt management strategies"
                minRows={4}
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
                />
    
                <Group justify="flex-end" mt="md">
                <Button color='dark' className={classes.Button}>Submit</Button>
                </Group>
            </div>
        </SimpleGrid>
      </div>
    );
  }