import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { SocialIcon } from 'react-social-icons';


interface navItems {
    label: string;
    link: string;
}

interface navbarProps {
    items: navItems[];
}

const Navbar: React.FC<navbarProps> = ({ items }) => {
    return (
        <div className='flex justify-between items-center bg-* p-4'>
            <div className='flex items-center'>
                <div className='w-[10rem]'>
                    <img src='./Images/logo.png' alt='Logo' />
                </div>
                <div className='text-l text-white flex items-center gap-4'>
                    <form className='relative mr-10'>
                        <input
                            className='h-10 w-[20rem] p-1 rounde text-s px-2 bg-white pr-10'
                            placeholder='Search Anime'
                        />
                        <button className='absolute text-gray-500 text-xl right-0 top-0 h-full w-10 flex items-center justify-center'>
                            <BiSearchAlt />
                        </button>
                    </form>
                    {items.map((item, index) => (
                        <div className='hover:text-pallete-green cursor-pointer font-bold' key={index}>
                            {item.label}
                        </div>
                    ))}
                </div>
                <div className='ml-10 flex gap-2 shrink-0'>
                    <SocialIcon url="www.telegram.com" />
                    <SocialIcon url="www.twitter.com" />
                    <SocialIcon url="www.discord.com" />
                    <SocialIcon url="www.pinterest.com" />
                </div>

            </div>
            <div>
                <button className='bg-theme p-1 hover:bg-pallete-green text-gray-400 font-semibold uppercase px-3 rounded-sm'>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;
