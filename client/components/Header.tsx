import { HeaderProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <Link href="/" className="md:flex-1">
        <div className="flex items-center">
          <Image
            src="/assets/icons/logo.png"
            alt="Logo desktop"
            width={50}
            height={32}
            className="hidden md:block"
          ></Image>
          <Image
            src="/assets/icons/logo.png"
            alt="Logo mobile"
            width={32}
            height={32}
            className="mr-2 md:hidden"
          ></Image>
          <h1 className="text-3xl text-[#d4a653] tracking-tight">Milo.AI</h1>
        </div>
      </Link>
      {children}
    </div>
  );
};

export default Header;
