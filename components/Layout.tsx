import React, { ReactElement } from 'react'
import Hamburger from 'hamburger-react'

interface Props {
  children: ReactElement
}

export default function Layout({children}: Props): ReactElement {
  return (
    <div className="container w-full max-w-full">
      <div className="w-full flex-row inline-flex items-center bg-gray-300 space-x-3">
        <div><Hamburger/></div>
        <span> One Stop Academic System </span>
      </div>
      {children}
    </div>
  )
}
