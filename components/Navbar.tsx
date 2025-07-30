"use client";
import { useUser, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';
import AppLogo from './app-logo';
import LoginButton from './LoginButton';
import ShadNavLinks from './ShadNavLinks';
import SignupButton from './signupButton';

export default function Navbar() {
    const { isSignedIn, isLoaded } = useUser();

    return (
        <nav>
            <div className="flex justify-between items-center h-10 shrink-0 items-center rounded-lg p-4 md:h-20 bg-secondary py-10 ">
                <div className="logo">
                    <AppLogo />
                </div>
                <div className="mainNavLinks w-[20%]">
                    {!isLoaded ? null : isSignedIn ? (
                        <ShadNavLinks />
                    ) : (<></>)}
                </div>
                <div className="buttons flex gap-x-3">
                    {!isLoaded ? null : isSignedIn ? (
                        <div className="flex items-center gap-4">
                            <UserButton />
                        </div>
                    ) : (
                        <>
                            <Link href="/auth/login">
                                <LoginButton />
                            </Link>
                            <Link href="/auth/signup">
                                <SignupButton />
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
