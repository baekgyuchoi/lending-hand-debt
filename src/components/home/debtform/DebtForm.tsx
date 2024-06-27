'use client'
import React, { useState } from 'react';
import { SliderInput } from './SliderInput';
import Image from 'next/image';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver} from '@hookform/resolvers/zod';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../../ui/dialog"
import { useEffect } from 'react';

export const ContactFormSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    phone_number: z.string(),
    debt_load: z.number().optional(),
   
});

const DebtForm: React.FC = () => {
    const [creditCardDebt, setCreditCardDebt] = useState<number|string>('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [formComplete, setFormComplete] = useState(false);

    useEffect(() => {
        if (firstName && lastName && phoneNumber && email && creditCardDebt) {
            setFormComplete(true);
        } else {
            setFormComplete(false);
        }
    }, [firstName, lastName, phoneNumber, email, creditCardDebt])
 

    const form = useForm<z.infer<typeof ContactFormSchema>>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {

        },
    
    })
  

    

    function onSubmit(data: z.infer<typeof ContactFormSchema>) {
        console.log("BDNFS:DFJBS:DJVKB:J SUBMITTED")
        const cleaned_data = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone_number: data.phone_number,
            debt_load: data.debt_load
        }
        console.log(cleaned_data)

        fetch('/api/post_contact_form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cleaned_data),
        })

        console.log('Form Submitted')
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full flex flex-col items-center justify-between gap-20 md:gap-40 lg:flex-row lg:w-4/5">
          
            <div className="max-w-4xl w-full  ">
               
                <label className="block mb-2" htmlFor="creditCardDebt">
                    Credit Card Debt:
                </label>
                
                <SliderInput creditCardDebt={creditCardDebt} setCreditCardDebt={setCreditCardDebt}/>
                <div className='hidden lg:flex w-full  items-center justify-center pr-12 md:mb-4'>
                    <Image 
                        src="/hand_card.png"
                        alt="Lending Hand Debt Logo"
                        width={200}
                        height={200}
                        className="w-64 h-64"
                    />
                </div>
            </div>
            <div className='max-w-2xl w-full lg:w-1/2'>
                <div className="mb-4 ">
                    <label className="block mb-2" htmlFor="firstName">
                        First Name:
                    </label>
                    <input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="lastName">
                        Last Name:
                    </label>
                    <input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="phoneNumber">
                        Phone Number:
                    </label>
                    <input
                        id="phoneNumber"
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="email">
                        Email:
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                
                {formComplete? (
                    <Dialog>
                        <DialogTrigger className='w-full' >
                            <button type="submit" className="w-full px-4 py-2 mt-6 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                                Submit
                            </button>
                        </DialogTrigger>
                        <DialogContent className='bg-white'>
                            <DialogHeader>
                            <DialogTitle>Thank You for Submitting!</DialogTitle>
                            <DialogDescription>
                                One of our team members will reach out to you shortly with one of our selected web design agencies that best fits your needs.
                            </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                    ):(
                    <Dialog>
                        <DialogTrigger className='w-full' disabled>
                            <button type="submit" className="w-full px-4 py-2 mt-6 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                                Submit
                            </button>
                        </DialogTrigger>
                        <DialogContent className='bg-white'>
                            <DialogHeader>
                            <DialogTitle>Thank You for Submitting!</DialogTitle>
                            <DialogDescription>
                                One of our team members will reach out to you shortly with one of our selected web design agencies that best fits your needs.
                            </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                    )}
                
               
            </div> 
        </form>
    );
};

export default DebtForm;