import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { lusitana } from "../../../../../components/font"
import { fetchRevenue } from "../../../../../lib/actions/InvoicesActions"
import RevenueCharts from "./RevenueCharts"

export default async function RevenueChartsWrapper() {
    const revenue = await fetchRevenue()
    return (
        <Card className="w-full md:col-span-4">
            <CardHeader className="flex space-y-0 space-x-3">
                <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl text-center w-full`}>
                    Recent Revenue
                </h2>
            </CardHeader>
            <CardContent className="p-0">
                <RevenueCharts revenue={revenue} />
            </CardContent>
        </Card>
    )
}
