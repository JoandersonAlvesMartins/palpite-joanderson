import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className="bg-gray-300 p-2 text-center shadow-lg">
            <div className="container mx-auto">
                <Link href="/">
                    <a className='px-2 hover:underline'>Home</a>
                </Link>
                <Link href="/sobre">
                    <a className='px-2 hover:underline'>Sobre</a>
                </Link>
                <Link href="/contato">
                    <a className='px-2 hover:underline'>Contato</a>
                </Link>
            </div>
        </div>
  )
}

export default NavBar