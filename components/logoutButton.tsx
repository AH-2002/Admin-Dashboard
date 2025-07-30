"use client";
import React from "react";
import { useAuth } from "@clerk/nextjs";
import { PowerIcon } from "lucide-react";

export default function LogoutButton() {
  const { signOut } = useAuth();

  const handleLogout = async () => {
    await signOut({ redirectUrl: "/auth/login" });
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full cursor-pointer flex justify-evenly items-center bg-gray-800 text-white text-center rounded px-3 py-2 text-sm"
    >
      <PowerIcon className="w-3 mr-2" />
      <div className="hidden md:block">Sign out</div>
    </button>
  );
}
