import React from 'react'

export default function footer() {
  const date = new Date().getFullYear();
  return (
    <footer>
      <p>© {date} LOWIN Portfolio</p>
    </footer>
  )
}
