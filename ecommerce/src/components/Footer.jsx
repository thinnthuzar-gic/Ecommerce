import React from 'react'

const Footer = () => {
  const date = new Date();
  return (
    <footer className="mt-5 bg-zinc-950 text-white text-center font-extrabold">
      @ {date.getUTCFullYear() } All rights reserved.
    </footer>
  )
}

export default Footer