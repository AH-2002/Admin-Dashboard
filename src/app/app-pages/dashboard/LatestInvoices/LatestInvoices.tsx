import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { RefreshCcw } from 'lucide-react';
import { fetchLatestInvoices } from '../../../../../lib/actions/InvoicesActions';
import { lusitana } from '../../../../../components/font';

export default async function LatestInvoices() {
  const invoiceInfo = await fetchLatestInvoices();

  return (
    <Card className="w-full h-[67%] flex flex-col">
      <CardHeader>
        <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl text-center`}>
          Latest Invoices
        </h2>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto px-5">
        <div className="space-y-4">
          {invoiceInfo.map((invoice, i) => (
            <div
              key={invoice.id}
              className={cn('flex flex-row items-center justify-between py-2 border-t', {
                'border-t': i !== 0,
              })}
            >
              <div className="flex items-center">
                <Image
                  src={invoice.image_url}
                  alt={`${invoice.name}'s profile picture`}
                  className="mr-4 rounded-full"
                  width={32}
                  height={32}
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold md:text-base">
                    {invoice.name}
                  </p>
                  <p className="hidden text-sm text-gray-500 sm:block">
                    {invoice.email}
                  </p>
                </div>
              </div>
              <p className={`${lusitana.className} truncate text-sm font-medium md:text-base`}>
                {invoice.amount}
              </p>
            </div>
          ))}

          <div className="flex items-center pb-2 pt-4">
            <RefreshCcw className="h-5 w-5 text-gray-500" />
            <h3 className="ml-2 text-sm text-gray-500">Updated just now</h3>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
