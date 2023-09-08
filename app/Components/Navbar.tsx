"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-white full text-black fixed w-full p-4 z-10">
      <section className="container flex mx-auto justify-between">
        <Image src={"/design/logo.png"} alt={"logo"} width={100} height={100} />

        <section className=" flex justify-between gap-4 items-center">
          {pathname != "/" && <Link href="/">Home</Link>}
          <Link className="hover:text-main" href="/enter-the-community">
            Enter the community
          </Link>
          <Link className="hover:text-main" href="/contact">
            Contact
          </Link>
        <section className=" ml-4 flex items-center">
          <Link href={"https://facebook.com"}>
            <Image
              className="w-8 h-8"
              src="/design/Facebook.png"
              alt="imagine facebook"
              width={100}
              height={100}
              />{" "}
          </Link>

          <Link href={"https://instagram.com"}>
            <Image
              className="w-8 h-8"
              src="/design/Instagram.png"
              alt="imagine instargram"
              width={100}
              height={100}
              />{" "}
          </Link>

          <Link href={"https://twitter.com"}>
            <Image
              className="w-8 h-8"
              src="/design/Twitter.png"
              alt="imagine twitter"
              width={100}
              height={100}
              />{" "}
          </Link>
            </section>
         </section>
      </section>
    </nav>
  );
}
