
import Image from 'next/image';
import React from 'react';

const Page = () => {
    
    return (
        <div className="md:mt-20 flex flex-col gap-64">
            
            <div className="container mx-auto  py-8">
            
                <h2 className="text-4xl text-gray-700 font-bold text-center mb-4">What is Lending Hand Debt?</h2>
                
                <div className="flex justify-center">
                    <Image height={100} width={100} className="w-64 h-64 " src="/full_logo.png" alt="About Us" />
                </div>
                <div className="max-w-5xl mx-auto mt-8">
                    <p className="text-lg text-center text-gray-700 mb-4">
                    {'At Lending Hand Debt, we pride ourselves on delivering exceptional performance-based consumer debt services. Our unwavering commitment to excellence and customer care sets us apart in the industry.'}
                    </p>
                    <p className="text-lg text-center text-gray-700 mb-4">
                        {'We understand the stress and burden that comes with overwhelming debt. That\'s why we\'re committed to providing compassionate and professional assistance to our clients throughout their debt settlement journey. Every facet of our program is meticulously designed with our consumers\' needs at the forefront.'}
                    </p>
                    <p className="text-lg text-center text-gray-700">
                        <span className='underline'>Our mission</span> is to help individuals facing true financial hardships get back on their feet and regain control of their fiscal freedom, one debt at a time.
                    </p>
                </div>
            </div>
            <div className="container mx-auto py-8 flex flex-col items-center justify-center gap-10 mb-32">
                <h2 className="text-4xl text-gray-700 font-bold text-center mb-4">Why Choose Lending Hand Debt?</h2>
                
                
                <div className=" mx-auto mt-8 flex flex-col items-center justify-center gap-10 ">
                    <div>
                        <div className="flex flex-col gap-2 md:gap-6 md:flex-row mx-2">
                            <div className="flex flex-row md:flex-col items-center justify-center gap-1 md:gap-2 px-4 py-2 md:py-6 md:px-6 md:flex-1">
                                <Image
                                    src="/reliability.png"
                                    alt="reliability icon"
                                    width={128}
                                    height={128}
                                    quality={100}
                                    className="w-16 md:w-36 h-16 md:h-36 mb-1 rounded-box"
                                />
                                <div className="flex flex-col items-start md:items-center justify-center">
                                    <div className="text-lg md:text-2xl">Reliability</div>
                                    <div className="mb-1 md:mb-3 text-left md:text-center">
                                        We are 100% committed to the quality and integrity of our services from enrollment to customer support.
                                    </div>
                                </div>
                                
                            </div>
                            <div className="flex flex-row md:flex-col items-center justify-center gap-1 md:gap-2 px-4 py-2 md:py-6 md:px-6 md:flex-1">
                                <Image
                                    src="/consistency.png"
                                    alt="consistency icon"
                                    width={128}
                                    height={128}
                                    quality={100}
                                    className="w-16 md:w-36 h-16 md:h-36 mb-1 rounded-box"
                                />
                                <div className="flex flex-col items-start md:items-center justify-center">
                                    <div className="text-lg md:text-2xl">Consistency</div>
                                    <div className="mb-1 md:mb-3 text-left md:text-center">
                                        As a performance-based debt settlement company, we are dedicated to delivering consistency and offloading risk from our clients. No fees are collected until our clients are satisfied. 
                                    </div>
                                </div>
                                
                            </div>
                            <div className="flex flex-row md:flex-col items-center justify-center gap-1 md:gap-2 px-4 py-2 md:py-6 md:px-6 md:flex-1">
                                <Image
                                    src="/drive.png"
                                    alt="drive icon"
                                    width={128}
                                    height={128}
                                    quality={100}
                                    className="w-16 md:w-36 h-16 md:h-36 mb-1 rounded-box"
                                />
                                <div className="flex flex-col items-start md:items-center justify-center">
                                    <div className="text-lg md:text-2xl">Drive</div>
                                    <div className="mb-1 md:mb-3 text-left md:text-center">
                                        We are driven by a passion to help alleviate debt and liberate our clients from credit card burdens, propelling them toward financial freedom.
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                  
                    <p className="text-lg text-center my-20 text-gray-700">
                        Contact us today to learn more about how we can help you achieve financial freedom.
                    </p>
                </div>
            </div>
            
        
        </div>
    );
};

export default Page;