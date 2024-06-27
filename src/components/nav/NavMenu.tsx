import React from 'react';
import { Button } from '../ui/button';





export const buttons = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'Strategies',
        link: '/strategies'
    },
    {
        name: 'FAQ',
        link: '/faq'
    },
    {
        name: 'Blog',
        link: '/blog'
    },
  
    {
        name: 'Sign Up',
        link: '/signup'
    },
  
]

const NavMenu: React.FC = () => {
    return (
        <div className='flex flex-row items-center justify-between gap-8  w-full'>

            <div className=' w-full flex flex-row items-center gap-4 justify-between px-8 '>

            
                {buttons.map((button, index) => {
                    return (
                        <span className='text-lg hover:text-blue-800' key={index}>
                            {button.name}
                        </span>
                    );
                })}
            </div>

            <div className='w-fit flex gap-2'>
                <Button className='bg-blue-700'>
                    Sign In
                </Button>
                <Button className='bg-gray-600'>
                    Sign In
                </Button>
            </div>
        </div>
    );
};

export default NavMenu;