"use client"

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ShadNavLinks() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between px-4 py-2">
      {/* Desktop Navigation */}
      <div className="hidden md:block w-full">
        <NavigationMenu className="w-full">
          <NavigationMenuList className="w-full justify-start gap-x-25">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/app-pages/dashboard">Dashboard</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/app-pages/profile">Profile</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Menu className="w-6 h-6 cursor-pointer" />
          </SheetTrigger>
          <SheetContent side="left" className="ps-7 pt-4">
            <div className="flex flex-col space-y-4 mt-4">
              <Link href="/" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/app-pages/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
              <Link href="/app-pages/profile" onClick={() => setOpen(false)}>Profile</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
