'use client'
import { signOutUser } from '@/app/actions/authActions'
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/react'
import { Session } from 'next-auth'
import Link from 'next/link'
// import Link from 'next/link'

import React from 'react'

type Props = {
    user: Session['user']
}

const UserMenu = ({ user }: Props) => {

    return (
        <Dropdown placement='bottom-end'>
            <DropdownTrigger>
                <Avatar
                    isBordered
                    as='button'
                    className='transition-transform'
                    color='secondary'
                    name={user?.name || 'user avatar'}
                    size='sm'
                    src={user?.image || '/assets/img/user.png'}
                />
            </DropdownTrigger>
            <DropdownMenu variant='flat' aria-label='User actions menu'>
                <DropdownSection showDivider>
                    <DropdownItem isReadOnly as='span' className='h-14 flex flex-row' aria-label='username' key={'user'}>
                        Signed in as {user?.name}
                    </DropdownItem>
                </DropdownSection>
                <DropdownItem key={'edit'}>
                    <Link href={`/users/${user?.id}`}>Edit Profile</Link>
                </DropdownItem>
                <DropdownItem color='danger' onClick={async () => signOutUser()} className='flex flex-row' key={'logout'}>Log Out</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default UserMenu