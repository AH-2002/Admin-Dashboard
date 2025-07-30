import React, { Suspense } from "react";
import { lusitana } from "../../../../components/font";
import {
  CardsSkeleton,
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
} from "../../../../components/Skeleton";
import StatCardsWrapper from "./Cards/StatCardsWrapper";
import LatestInvoices from "./LatestInvoices/LatestInvoices";
import RevenueChartsWrapper from "./revenue-charts/RevenueChartsWrapper";

export default async function Dashboard() {
  return (
    <main className="dashboardPage min-h-screen px-4 py-6 space-y-6 flex flex-col">
      <header>
        <h1 className={`${lusitana.className} text-xl md:text-2xl text-center`}>
          Dashboard
        </h1>
      </header>

      {/* Stat Cards */}
      <Suspense fallback={<CardsSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <StatCardsWrapper />
      </Suspense>

      <section className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <Suspense fallback={<RevenueChartSkeleton />}>
            {/* @ts-expect-error Async Server Component */}
            <RevenueChartsWrapper />
          </Suspense>
        </div>
        <div className="flex-1">
          <Suspense fallback={<LatestInvoicesSkeleton />}>
            {/* @ts-expect-error Async Server Component */}
            <LatestInvoices />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
