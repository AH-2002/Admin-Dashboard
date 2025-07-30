'use client';
import { buttonVariants } from '@/components/ui/button'
import { Files, HomeIcon, UsersIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const links = [
    {
        name: 'Home', href: '/', icon: HomeIcon
    },
    {
        name: 'Invoices', href: '/app-pages/InvoicesPage', icon: Files
    },
    {
        name: 'Customer', href: '/app-pages/CustomersPage', icon: UsersIcon
    },
]

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <div className="flex flex-col gap-y-4 py-3">
            {links.map((link) => {
                const LinkIcon = link.icon
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`${buttonVariants({ variant: 'ghost' })} 
                        justify-start 
                        ${pathname === link.href ? '' : 'text-muted-foreground'}`}
                    >
                        <LinkIcon className="mr-2 h-6 w-6" />
                        <span className="hidden md:block">{link.name}</span>
                    </Link>
                )
            })}
        </div>
    )
}
