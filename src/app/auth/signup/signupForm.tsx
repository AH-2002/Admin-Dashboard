"use client";
import { useSignUp, useUser } from '@clerk/clerk-react'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import SignupButton from '../../../../components/signupButton';

export default function SignupForm() {
  const { isSignedIn } = useUser();
  const { signUp, setActive } = useSignUp();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (isSignedIn) {
      router.push("/");
    }
  }, [isSignedIn, router]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await signUp?.create({
        firstName: firstName,
        lastName: lastName,
        emailAddress: email,
        password: password,
      })
      if (result?.status === 'complete') {
        await setActive?.({ session: result.createdSessionId })
        router.push('/auth/login')
      } else {
        setError('Sign-up not completed')
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.errors?.[0]?.message || 'Something went wrong')
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6 dark:bg-transparent">
      <h2 className="text-center text-lg font-semibold">Please sign up to continue</h2>

      <div className="flex flex-col gap-4">
        <div className="nameInputs flex space-x-4">
          <input
            type="text"
            placeholder="First Name"
            className="rounded-lg p-2 w-full border border-gray-300 outline-none bg-green-100 dark:bg-transparent"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="rounded-lg p-2 w-full border border-gray-300 outline-none bg-green-100 dark:bg-transparent"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
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
        <SignupButton />
      </div>
    </form>
  )
}
