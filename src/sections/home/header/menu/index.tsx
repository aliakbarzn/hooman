import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.svg";
import Link from "next/link";
export default function Menu() {
  return (
    <div className="w-full flex justify-between justify-center items-center h-28 px-8 shadow">
      <div>
        <Link href={"/"}>
          <Image alt="logo" src={logo} width={150} height={160} />
        </Link>
      </div>
      <div className="flex ">
        <div className="flex items-center gap-8 mr-8">
          <div className="cursor-pointer">NEWS</div>
          <div className="cursor-pointer">buy ads</div>
          <div className="cursor-pointer">Contact</div>
        </div>
        <div className="flex items-center gap-8 cursor-pointer">
          <div>
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="32" height="32" rx="8" fill="#F5F5F5" />
              <path
                d="M18.4125 28.25C18.1927 28.6288 17.8773 28.9433 17.4978 29.1619C17.1183 29.3805 16.688 29.4956 16.25 29.4956C15.812 29.4956 15.3817 29.3805 15.0022 29.1619C14.6227 28.9433 14.3073 28.6288 14.0875 28.25M23.75 12C23.75 10.0109 22.9598 8.10322 21.5533 6.6967C20.1468 5.29018 18.2391 4.5 16.25 4.5C14.2609 4.5 12.3532 5.29018 10.9467 6.6967C9.54018 8.10322 8.75 10.0109 8.75 12C8.75 20.75 5 23.25 5 23.25H27.5C27.5 23.25 23.75 20.75 23.75 12Z"
                stroke="#F58882"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <svg
              width="22"
              height="25"
              viewBox="0 0 22 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 23.75V21.25C21 19.9239 20.4732 18.6521 19.5355 17.7145C18.5979 16.7768 17.3261 16.25 16 16.25H6C4.67392 16.25 3.40215 16.7768 2.46447 17.7145C1.52678 18.6521 1 19.9239 1 21.25V23.75M16 6.25C16 9.01142 13.7614 11.25 11 11.25C8.23858 11.25 6 9.01142 6 6.25C6 3.48858 8.23858 1.25 11 1.25C13.7614 1.25 16 3.48858 16 6.25Z"
                stroke="#1E1E1E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
