import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full h-[209px] bg-black flex flex-col gap-8 md:gap-7 justify-center items-center">
        <Image src='/logo-footer.png' alt="logo footer" width={122} height={39} />
        <p className="text-xs text-white font-medium md:text-2xl">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
