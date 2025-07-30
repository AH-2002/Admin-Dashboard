import { fetchCardData } from "../../../../../lib/actions/InvoicesActions"
import { StatCard } from "./StatCard"

export default async function StatCardsWrapper() {
    const { invoicesNumber, customersNumber, totalPaidInvoices, totalPendigInvoices } = await fetchCardData()

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
            <StatCard title="Collected" value={totalPaidInvoices} type="collected" />
            <StatCard title="Pending" value={totalPendigInvoices} type="pending" />
            <StatCard title="Total Invoices" value={invoicesNumber} type="invoices" />
            <StatCard title="Total Customers" value={customersNumber} type="customers" />
        </div>
    )
}
