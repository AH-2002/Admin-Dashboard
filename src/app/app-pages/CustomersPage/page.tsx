import { customers } from "../../../../lib/data"
export default function CustomersPage() {
    return (
        <div className="px-4 py-7">
            <h1 className="text-2xl font-bold mt-4 mb-5 text-center">Customers</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {customers.map((customer) => (
                    <li key={customer.id} className="p-4 border rounded shadow bg-white dark:text-white dark:bg-transparent">
                        <img
                            src={customer.image_url}
                            alt={customer.name}
                            className="w-16 h-16 rounded-full mb-2"
                        />
                        <h2 className="font-semibold">{customer.name}</h2>
                        <p className="text-gray-500">{customer.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
