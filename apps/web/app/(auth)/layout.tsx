import AddTripButton from "@/components/AddTripButton";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
};

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const userId = '12345';

    if (!userId) {
        redirect('/login')
    }
    return (
        <div className="relative">
            <Navbar />
            <AddTripButton />
            <div className="ml-16">
                {children}
            </div>
        </div>
    );
}
