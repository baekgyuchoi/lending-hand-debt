'use client'
import { Accordion, Grid, Container, Title } from '@mantine/core';
import Image from 'next/image';

import classes from './FaqWithImage.module.css';

const placeholder =
  'It can\’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.';

const FAQs = [
    {
        question: 'Will I be totally debt free when I am done?',
        answer: 'Our program is focused on dealing with unsecured debts. We can’t help with debt that is secured by collateral (such as mortgages or auto loans). However, after completing the program, the money you had been paying towards your unsecured creditors can be used to pay down secured debts and start saving for your financial future. Not everyone completes our program, so remember that sticking to your monthly savings plan is the most important factor in determining your success.'
    },
    {
        question: 'Will I have to take out another loan to cover my current debts?',
        answer: 'No, our debt reduction program is not a new loan. Some of our clients use a loan in conjunction with the our relief program, but most fund their settlements with a monthly deposit into their Dedicated Account. That being said, we do have a relationship with a lending company. And some clients, who demonstrate a consistent pattern of saving their monthly draft amount on time, may be eligible for a loan from this lender to pay off one or more of their settlements. But this is not something that is required of any of our clients.'
    },
    {
        question: 'Who controls the account where my funds are held while I await settlement?',
        answer: 'You do. The bank account is set up in your name, and the money in the account is yours.'
    },
    {
        question: 'Will I still owe taxes on forgiven debt?',
        answer: 'The IRS considers a forgiven debt as taxable income, so at the end of the year they will expect taxes to be paid on the settlement. IRS Form 982, Reduction of Tax Attributes Due to Discharge of Indebtedness, may exempt you from this tax.'
    }
]

export function FaqWithImage() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid id="faq-grid" gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }} className='hidden lg:block'>
            <Image className='w-full h-1/2 object-contain'  width={200} height={200} src={'/icon_logo.png'} alt="Frequently Asked Questions" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Title order={2} ta="left" className={classes.title}>
              Frequently Asked Questions
            </Title>

           

            <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
            { FAQs.map((faq, index) => {
                return(
                    <Accordion.Item key={index} className={classes.item} value={faq.question}>
                        <Accordion.Control>{faq.question}</Accordion.Control>
                        <Accordion.Panel>{faq.answer}</Accordion.Panel>
                    </Accordion.Item>
                )
            })}
              {/* <Accordion.Item className={classes.item} value="reset-password">
                <Accordion.Control>How can I reset my password?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="another-account">
                <Accordion.Control>Can I create more that one account?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="newsletter">
                <Accordion.Control>How can I subscribe to monthly newsletter?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="credit-card">
                <Accordion.Control>
                  Do you store credit card information securely?
                </Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item> */}
            </Accordion>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}