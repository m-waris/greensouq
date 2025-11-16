import type { Metadata } from "next";
import "../globals.css";
import { getServerSession } from "next-auth";
import { Navbar } from "../components/navbar";
import Footer from "../components/footer";
import { authOptions } from "@/lib/auth";


export const metadata: Metadata = {
  title: "Greensouq by Waris",
  description: "Created by Waris",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const session = await getServerSession(authOptions);
  const user = session?.user ?? undefined;

  return (
      <div
      >
      <Navbar user={user} />
        {children}
        <Footer/>
      </div>
  );
}
