import Link from 'next/link'
import React from 'react'

export default function header() {
  return (
    <header>
      <div className='flex justify-between'>
        <div className='flex flex-row'>
          <img src="" alt="" />
          <ul className='flex gap-6'>
            <li><Link href="/en">Home</Link></li>
            <li><Link href="/en/page/about">About</Link></li>
            <li><Link href="/en/page/blog">Blog</Link></li>
            <li><Link href="/en/page/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <select>
            <option>English</option>
            <option>Khmer</option>
          </select>
        </div>
      </div>
    </header>
  )
}
