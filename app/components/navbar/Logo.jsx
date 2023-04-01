"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'


const Logo = () => {
    const router = useRouter()
  return (
    <Image
        className='hidden md:block cursor-pointer'
        alt="logo"
        height={40}
        width={120}
        style={{ height: 40, width:120 }}
        priority
        src="/images/logo.png"/>
  )
}

export default Logo