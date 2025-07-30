"use client";
import { useSignIn, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import LoginButton from '../../../../components/LoginButton';


export default function LoginForm() {
    let { isSignedIn } = useUser()
    let { signIn, setActive } = useSignIn();
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState("");
    const router = useRouter();
    useEffect(() => {
        if (isSignedIn) {
            router.push("/");
        }
    }, [isSignedIn]);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const result = await signIn?.create({
                identifier: email,
                password,
            })
            if (result?.status === 'complete') {
                await setActive?.({ session: result.createdSessionId })
                router.push('/app-pages/dashboard')
            } else {
                setError('Sign-in not completed')
            }
        } catch (error: any) {
            setError(error.errors?.[0]?.message || 'Something went wrong')
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6 dark:bg-transparent">
            <h2 className="text-center text-lg font-semibold">Please login to continue</h2>

            <div className="flex flex-col gap-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="rounded-lg p-2 w-full border border-gray-300 outline-none bg-green-100 dark:bg-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="rounded-lg p-2 w-full border border-gray-300 outline-none bg-green-100 dark:bg-transparent"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="flex flex-col justify-between gap-y-4 items-center">
                <LoginButton />
            </div>
        </form>
    )
}
