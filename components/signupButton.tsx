import React from 'react'

export default function SignupButton() {
    return (
        <div className="flex justify-center">
            <button
                type="submit"
                className="w-full cursor-pointer flex justify-evenly items-center bg-gray-800 text-white text-center rounded px-5 py-2"
            >
                <span>Sign up</span>
            </button>
        </div>
    )
}
