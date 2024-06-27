import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavMenu from './NavMenu';
import { MobileNav } from './MobileNav';

interface NavBarProps {
    // Define the props for your NavBar component here
}

const NavBar: React.FC<NavBarProps> = () => {
    return (
        <nav className="h-24  ">
            <div className="container mx-auto px-8 ">
                <div className="flex items-center justify-between h-24 ">
                    <div className='lg:hidden flex justify-between w-full'>
                        <MobileNav />
                        <div>
                            <Image 
                                src="/icon_logo.png"
                                alt="infinity sloth logo"
                                width={200}
                                height={200}
                                className="w-20 h-20"
                            />
                        </div>
                       
                    </div>
                    <div className="hidden lg:flex items-center gap-12">
                        <Link
                                href="/"
                                className="flex z-40 justify-center p-4 items-center gap-1 w-1/3 "
                        >
                            <Image
                            src="/icon_logo.png"
                            alt="infinity sloth logo"
                            width={200}
                            height={200}
                            className="w-20 h-20"
                            />
                            <span className=" font-extralight text-lg lg:text-xl text-gray-800">
                            
                            </span>
                            
                            
                        </Link>
                        <div className="hidden ml-10  space-x-4 lg:flex flex-row gap-4 pt-4 whitespace-nowrap">
                            <Link href="/">
                                <span className="text-gray-600 hover:text-gray-400">Home</span >
                            </Link>
                            <Link href="/about">
                                <span className="text-gray-600 hover:text-gray-400">About Us</span >
                            </Link>
                            <Link href="/services">
                                <span className="text-gray-600 hover:text-gray-400">Services</span >
                            </Link>
                            <Link href="/contact">
                                <span className="text-gray-600 hover:text-gray-400">Contact</span >
                            </Link>
                            <Link href="/blog">
                                <span className="text-gray-600 hover:text-gray-400">Blog</span >
                            </Link>
                        </div>
                    </div>
                    <div className="hidden lg:block pt-4 ">
                        <Link href="/contact">
                        <span className="text-gray-600 hover:text-gray-400">Talk to an Expert</span >
                        </Link>
                        <Link href="/">
                            <span className="ml-4 px-4 py-2 animate-pulse bg-gray-800 text-white rounded-full hover:bg-gray-700">
                                +1 (833) 711-4196
                            </span >
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
        // <nav className="h-32  bg-white/40 backdrop-blur-lg transition-all">
        //     {/* Add your navigation content here */}
        //     <div className="w-full px-2 md:px-32 flex items-center justify-center ">
        //         <div className="flex w-full  h-32 items-center justify-between pt-1">
        //             <Link
        //                 href="/"
        //                 className="flex z-40 justify-center p-4 items-center gap-1 w-1/3 "
        //             >
        //                 <Image
        //                 src="/full_logo.png"
        //                 alt="infinity sloth logo"
        //                 width={200}
        //                 height={200}
        //                 className="w-28 h-28"
        //                 />
        //                 <span className=" font-extralight text-lg lg:text-xl text-gray-800">
                        
        //                 </span>
                        
                        
        //             </Link>
        //             <div className="flex gap-1 lg:gap-4 items-center w-full">
                    
        //                 {/* <MobileNav /> */}
                        

        //                 <div className="hidden items-center space-x-4 lg:flex  w-full ">
                            
        //                     <NavMenu />
                        
        //                 </div>

                    
        //             </div>
        //         </div>
        //     </div>
        // </nav>
    );
};

export default NavBar;