import type { Metadata } from "next";

// style
import "@/styles/global.scss";

// components
import LayoutWrapper from "./_components/layout/main-layout";
import AuthProvider from "./_context/auth/AuthProvider";
import SearchBarProvider from "./_context/search-bar/SearchBarProvider";

// meta
export const metadata: Metadata = {
    title: "Plaxic Clean Up Event",
    description: "Plaxic Clean Up Event",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <AuthProvider>
                <SearchBarProvider>
                    <LayoutWrapper>{children}</LayoutWrapper>
                </SearchBarProvider>
            </AuthProvider>
        </html>
    );
}
