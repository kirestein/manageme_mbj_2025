'use client'
import { NavbarItem } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { IoIosPeople, IoMdPersonAdd } from "react-icons/io";
import { FaWpforms } from "react-icons/fa";
import { usePathname } from 'next/navigation';

const Links = [
    {
        label: 'Funcionários',
        href: '/employees',
        icon: IoIosPeople
    },
    {
        label: 'Cadastrar Funcionário',
        href: '/newEmployee',
        icon: IoMdPersonAdd
    },
    {
        label: 'Formulários',
        href: '/forms',
        icon: FaWpforms
    },
]

const NavLinks = () => {
    const pathname = usePathname()
    return (
        Links.map((link, index) => (
            <NavbarItem isActive={pathname === link.href} key={index} as={Link} href={link.href}>
                <link.icon size={24} className='mr-4' />
                {link.label}
            </NavbarItem>
        ))

    )
}

export default NavLinks