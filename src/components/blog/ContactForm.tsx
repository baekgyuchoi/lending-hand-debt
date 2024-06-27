import React from 'react';
import { ContactUs } from '../contact/ContactUs';
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
import classes from '../contact/ContactUs.module.css';

interface ContactFormProps {
    // Define your component props here
}

const ContactForm: React.FC<ContactFormProps> = () => {
    // Implement your component logic here

    return (
        <div className='flex flex-col bg-gray-300 rounded-lg p-4'>
            <div>
                <Title className="text-2xl text-gray-800">Get In Touch</Title>
                <Text className="text-lg text-gray-700" mt="sm" mb={30}>
                Leave your phone number and  email and we will get back to you within 24 hours
                </Text>
    
               
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
                <Button className={classes.control}>Send message</Button>
                </Group>
            </div>
    
        </div>
    );
};

export default ContactForm;