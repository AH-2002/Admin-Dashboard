import React from "react";
import SideBar from "../../../components/SideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <aside className="w-1/5 border-r">
                <SideBar />
            </aside>
            <main className="w-4/5 px-5">
                {children}
            </main>
        </div>
    );
}
