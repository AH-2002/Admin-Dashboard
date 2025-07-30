"use client"
import { useUser } from '@clerk/nextjs';
import React from 'react'
import LogoutButton from './logoutButton'
import { ModeToggle } from './ModeToggle';
import NavLinks from './NavLinks'

export default function SideBar() {
    let { isSignedIn } = useUser()
    return (
        <div className="w-auto h-full">
            <div className="flex flex-col h-auto justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="flex flex-col items-start w-full space-y-3 ms-3">
                    <ModeToggle />
                    <div className=''>
                        {isSignedIn ? <LogoutButton /> : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}
