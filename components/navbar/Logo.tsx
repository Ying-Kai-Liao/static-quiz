'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => window.open("https://www.moneyweekly.com.tw/", "_self")}
      className=" cursor-pointer"
      src="/logo.png"
      height="33"
      width="110"
      alt="Logo"
    />
  );
}

export default Logo;
