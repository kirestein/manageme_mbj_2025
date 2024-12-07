import React from 'react'
import Logo from '@/../public/assets/img/design.png'
import Image from 'next/image'
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import Link from 'next/link'
import NavLinks from './NavLinks'
// TODO import font from google fonts


const TopNav = () => {
    return (
        <Navbar
            maxWidth='full'
            className='bg-gradient-to-r from-cyan-800 to-cyan-500'
            classNames={{
                item: [
                    'flex',
                    'text-md',
                    'uppercase',
                    'p-4',
                    'rounded-xl',
                    'hover:text-cyan-200',
                    'hover:bg-cyan-700',
                    'cursor-pointer',
                    'transition-all',
                    'data-[active=true]:text-orange-400',
                    'data-[active=true]:bg-cyan-700',
                    'data-[active=true]:p-6',
                ],
            }}
        >
            <NavbarBrand as={Link} href='/'>
                <Image
                    src={Logo}
                    alt="Logo"
                    width={80}
                    height={80}
                    className='shadow-md shadow-slate-200 bg-slate-300 mr-3 rounded-full transform'
                />
                <div className='font-bold text-3xl flex flex-row space-x-4'>
                    <span className="text-orange-400 uppercase">St3</span>
                    <span className="text-cyan-400 uppercase">ManageMe</span>
                </div>
            </NavbarBrand>
            <NavbarContent justify='center'>
                <NavLinks />
            </NavbarContent>
            <NavbarContent justify='end'>
                <Button as={Link} href='/login' variant='bordered' className=''>
                    Login
                </Button>
                <Button as={Link} href='/register' variant='bordered' className='ml-4'>
                    Register
                </Button>
            </NavbarContent>

        </Navbar>
    )
}

export default TopNav