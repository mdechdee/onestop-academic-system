import React, { ReactElement, useState } from "react";
import Hamburger from "hamburger-react";
import Link from "next/link";

interface Props {
  children: ReactElement
}

export default function Layout({children}: Props): ReactElement {
  const [isLeftPaneOpen, setLeftPaneOpen] = useState(false);

  const signInHandle = () => {
    console.log("sign in");
  };

  return (
    <div>
       {/* Left Pane*/}
       <div 
        className = {`
          fixed bg-gray-400 xs:w-1/2 sm:w-1/6 w-1/3 h-full z-40
          transition-transform transform p-16 
          ${isLeftPaneOpen ? "" : "-translate-x-full"}
        `}
      >
        <ul>
          <li>
            <Link href="/bulletin">
              <a> Bulletin </a>
            </Link>
          </li>
          <li>
            <Link href="/my-courses">
              <a> My Courses </a>
            </Link>
          </li>
        </ul>
      </div>
      {/* Nav bar */}
      <div className="w-full flex-row inline-flex bg-kaist items-center place-content-between">
        <div className="flex-row inline-flex items-center space-x-3 text-xl font-sans font-black text-white ">
          <div className="z-50"><Hamburger toggled={isLeftPaneOpen} toggle={setLeftPaneOpen}/></div>
          <span> One Stop Academic System </span>
        </div>
        <div className="items-center">
          <button className="bg-white text-kaist mr-3 text-l font-bold font-sans p-1 rounded-sm" onClick={signInHandle}><Link href="/signin"><a>Sign in</a></Link></button>
        </div>
      </div>
      {children}
    </div>
  )
}
