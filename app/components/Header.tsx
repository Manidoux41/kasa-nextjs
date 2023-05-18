'use client';
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

  const navLinks = [
    { id: 1, name: "Accueil", href: '/' },
    { id: 2, name: "A Propos", href: '/about' },
  ]

  const pathname = usePathname();

  return (
    <header className="w-full mx-auto p-4 md:px-0 lg:w-[1240px] lg:[p0] flex justify-between items-center">
      <Link href='/' className="w-[145px] h-[47px] md:w-[210px] md:h-[68px]">
        <img src="./logo.png" alt="logo kasa" className="w-full h-full object-cover" />
      </Link>
      <nav className="block">
        <ul className="flex gap-[10px] md:gap-14 text-[12px] md:text-2xl">

          {
            navLinks.map((link) => {

              const isActive = (pathname === link.href)

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={
                    isActive ?
                      'text-red-500 uppercase md:normal-case underline'
                      :
                      'text-red-500 uppercase md:normal-case'
                  }
                >
                  {link.name}
                </Link>
              )
            })
          }
        </ul>
      </nav>
    </header>
  )
}
