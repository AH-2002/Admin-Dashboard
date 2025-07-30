'use server';
import { formatCurrency } from '@/lib/utils'
import { customers, invoices, revenue } from '../data'
export async function fetchCardData() {
    try {
        const invoicesNumber = invoices.length
        const customerIds = new Set(invoices.map((inv) => inv.customer_id));
        const customersNumber = customerIds.size
        const paidInvoices = invoices.filter((inv) => inv.status === 'paid').reduce((sum, inv) => sum + inv.amount, 0)
        const pendingInvoices = invoices.filter((inv) => inv.status === 'pending').reduce((sum, inv) => sum + inv.amount, 0)

        return {
            customersNumber,
            invoicesNumber,
            totalPaidInvoices: formatCurrency(paidInvoices),
            totalPendigInvoices: formatCurrency(pendingInvoices)

        }
    } catch (error) {
        console.error('JSON Error:', error)
        throw new Error('Failed to fetch card data')
    }


}

export async function fetchRevenue() {
    try {
        return revenue
    } catch (error) {
        console.error('JSON Error:', error)
        throw new Error('Failed to fetch the revenues')
    }
}
export async function fetchLatestInvoices() {
    try {
        const latest = [...invoices]
            .sort((a, b) =>
                new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 5)
            .map((invoice) => {
                const customer = customers.find((c) => c.id === invoice.customer_id)
                const invoiceInfo = {
                    id: crypto.randomUUID(),
                    amount: formatCurrency(invoice.amount),
                    name: customer?.name || '',
                    image_url: customer?.image_url || '',
                    email: customer?.email || '',
                    status: invoice.status || '',
                    date: invoice.date || '',
                }
                return invoiceInfo
            })
        return latest
    } catch (error) {
        console.error('JSON Error:', error)
        throw new Error('Failed to fetch the latest invoices.')
    }
}