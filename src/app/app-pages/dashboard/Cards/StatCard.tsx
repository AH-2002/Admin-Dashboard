import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { BanknoteIcon, ClockIcon, InboxIcon, UserIcon } from 'lucide-react'
import { lusitana } from '../../../../../components/font'
const iconMap = {
    collected: BanknoteIcon,
    customers: UserIcon,
    pending: ClockIcon,
    invoices: InboxIcon,
}
type StatCardProps = {
    title: string
    value: string | number
    type: 'invoices' | 'customers' | 'pending' | 'collected'
}

export function StatCard({ title, value, type }: StatCardProps) {
    const Icon = iconMap[type]
    return (
        <>
            <Card>
                <CardHeader className="flex space-y-0 space-x-3">
                    {Icon ? <Icon className="h-5 w-5" /> : null}
                    <h3 className="ml-2 text-sm font-medium">{title}</h3>
                </CardHeader>
                <CardContent>
                    <p className={`${lusitana.className} truncate rounded-xl p-4 text-2xl`}>
                        {value}
                    </p>
                </CardContent>
            </Card>
        </>
    )
}