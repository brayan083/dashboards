"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import {Button} from "@nextui-org/react";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import Login from "@/components/auth/login";
import Register from "@/components/auth/resgiter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SEO Report Dashboard",
  description: "SEO reporting tool using data from APIs like SEMrush",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="hidden flex-col md:flex">
              <div className="border-b">
                <div className="flex h-16 items-center px-4">
                  <MainNav className="mx-6" />
                  <div className="ml-auto flex items-center space-x-4">
                    <Button color="primary"><a href="/login">Sign In</a></Button>
                    <Button color="primary"><a href="/register">Register</a></Button>
                    {/* <Login />
                    <Register /> */}
                    <UserNav />
                  </div>
                </div>
              </div>
              {children}
            </div>
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
