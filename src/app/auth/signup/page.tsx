import React from 'react'
import AppLogo from '../../../../components/app-logo'
import { ModeToggle } from '../../../../components/ModeToggle'
import SignupForm from './signupForm'

export default function Signup() {
  return (
    <section className="flex justify-center items-center">
      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-lg flex flex-col items-center gap-10 dark:bg-transparent mt-20">
        <AppLogo />
        <SignupForm />
        <ModeToggle />
      </div>
    </section>
  )
}
