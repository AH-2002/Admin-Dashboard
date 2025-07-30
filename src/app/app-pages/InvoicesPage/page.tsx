import { cn } from "@/lib/utils";
import Image from "next/image";
import { lusitana } from "../../../../components/font";
import { fetchLatestInvoices } from "../../../../lib/actions/InvoicesActions";

export default async function InvoicesPage() {
    const invoiceInfo = await fetchLatestInvoices();

    return (
        <div className="py-7">
            <h2 className="text-2xl font-bold mb-4 text-center">Invoices Details</h2>

            {/* Header Row */}
            <div className="hidden md:flex justify-between items-center px-4 pb-2 font-semibold text-l border-b">
                <div className="w-1/3">Customer</div>
                <div className="w-1/3 text-center">Status & Date</div>
                <div className="w-1/3 text-right">Amount</div>
            </div>

            {invoiceInfo.map((invoice, i) => (
                <div
                    key={invoice.id}
                    className={cn('flex flex-col md:flex-row items-start md:items-center justify-between py-4 border-t gap-4 md:gap-0 px-4', {
                        'border-t': i !== 0,
                    })}
                >
                    {/* Left Side: Avatar + Name + Email */}
                    <div className="flex items-center w-full md:w-1/3">
                        <Image
                            src={invoice.image_url}
                            alt={`${invoice.name}'s profile picture`}
                            className="mr-4 rounded-full"
                            width={40}
                            height={40}
                        />
                        <div className="min-w-0">
                            <p className="truncate text-base font-semibold">{invoice.name}</p>
                            <p className="text-sm text-gray-500">{invoice.email}</p>
                        </div>
                    </div>

                    {/* Middle: Status + Date */}
                    <div className="text-sm text-gray-500 text-left md:text-center w-full md:w-1/3">
                        <p><span className="font-semibold text-gray-500">Status:</span> {invoice.status}</p>
                        <p><span className="font-semibold text-gray-500">Date:</span> {invoice.date}</p>
                    </div>

                    {/* Right: Amount */}
                    <p className={`${lusitana.className} text-base font-medium w-full md:w-1/3 text-left md:text-right`}>
                        {invoice.amount}
                    </p>
                </div>
            ))}
        </div>
    );
}
