import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='w-full bg-white text-black'>
        <section className='container mx-auto p-4'>
        <section className='flex justify-between items-center pb-4'>
                <Image src={"/design/logo.png"} alt="logo" width={100} height={100}/>
                <section className='flex gap-4 items-center justify-between'>
                <Link className="hover:text-main" href="#">About Us</Link>
                <Link className="hover:text-main" href="/contact">Contact</Link>
                <Link className="hover:text-main" href="#">FAQ</Link>
                <Link className="hover:text-main" href="#">Legal Disclosure</Link>
                <Link className="hover:text-main" href="#">Privacy Policy</Link>
                </section>
            </section>
            <p className='w-full text-center pb-4'>Copyright ©2023 youChef. All rights reserved</p>
        </section>
    </footer>
  )
}
