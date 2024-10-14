'use client'

import Link from "next/link"

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { useTheme } from 'next-themes';

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {

  const pathName = usePathname()

  const rutas = [
    { name: "Overview", url: "/" },
    { name: "Semrush", url: "/semrush" },
    { name: "Search Console", url: "/search-console" },
    { name: "Google Analytics", url: "/analytics" },
    { name: "Google Analytics 2", url: "/search-console2" },
  ]

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
      >
      {rutas.map((ruta, index) => (
        <Link key={index} href={ruta.url} className={`font-medium transition-colors hover:text-blue-300 ${pathName === ruta.url ? 'text-lg text-indigo-400': 'text-sm'}`}>
          {ruta.name}
        </Link>
      ))}
    </nav>
  )
}