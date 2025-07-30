"use client";

import { UserProfile } from "@clerk/nextjs";
import { useTheme } from "next-themes";

export default function ProfilePage() {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    return (
        <div className={`flex justify-center mt-10 w-full ${isDark ? "bg-[#020618]" : "bg-white"}`}>
            <UserProfile
                appearance={{
                    baseTheme: isDark ? "dark" : "light",
                    variables: {
                        colorBackground: isDark ? "#020618" : "#ffffff",
                        colorText: isDark ? "#ffffff" : "#000000",
                        colorPrimary: isDark ? "#ffffff" : "#000000",
                        colorTextSecondary: isDark ? "#cccccc" : "#333333",
                        borderRadius: "0.5rem",
                    },
                    elements: {
                        rootBox: "w-full",
                        card: "bg-transparent",
                        navbar: "bg-transparent border-b border-gray-700",
                        pageScrollBox: "bg-transparent",

                        // Headers
                        headerTitle: "text-black dark:text-white",
                        headerSubtitle: "text-gray-700 dark:text-gray-300",
                        profileSectionTitle: "text-black dark:text-white",

                        // Inputs
                        formFieldLabel: "text-black dark:text-white",
                        formFieldInput:
                            "bg-transparent border border-gray-300 dark:border-gray-600 text-black dark:text-white",
                        formFieldHint: "text-gray-500 dark:text-gray-400",
                        formFieldError: "text-red-600 dark:text-red-400",

                        // Buttons
                        formButtonPrimary:
                            "bg-black dark:bg-white text-white dark:text-black hover:opacity-90",

                        // Identity preview
                        userPreviewMainIdentifier: "text-black dark:text-white",
                        userPreviewSecondaryIdentifier: "text-gray-700 dark:text-gray-400",

                        // Misc
                        accordionTriggerButton: "text-black dark:text-white",
                        badge: "text-black dark:text-white border border-black dark:border-white",
                    },
                }}
            />
        </div>
    );
}
