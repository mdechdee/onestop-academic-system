import React, { ReactElement, useState } from "react";
import Hamburger from "hamburger-react";
import Link from "next/link";

interface Props {
  children: ReactElement;
}

export default function Layout({ children }: Props): ReactElement {
  const [isLeftPaneOpen, setLeftPaneOpen] = useState(false);

  return (
    <div className="container w-full max-w-full">
      {/* Left Pane*/}
      <div 
        className = {`
          fixed bg-gray-400 xs:w-1/2 sm:w-1/2 w-1/3 h-full 
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
      <div className="w-full flex-row inline-flex items-center bg-gray-300 space-x-3">
        <Hamburger toggled={isLeftPaneOpen} toggle={setLeftPaneOpen} />
        <span> One Stop Academic System </span>
      </div>
      <div className="container">
        {children}
      </div>
      
    </div>
  );
}
