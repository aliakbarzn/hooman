"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/logo.svg";
import { AlertIcon, UserIcon } from "@/assets/icons";
import { Link } from "@/navigation";
import Bar from "@/assets/icons/bar";
type IsLogin = {
  isLogin: boolean;
};
export default function Menu() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="h-28">

      <div className="w-full flex justify-between items-center h-28 px-8 shadow border-b border-grayC fixed z-10 bg-white">
        <div>
          <Link href={"/"}><Image alt="logo" src={logo} width={150} height={160} /></Link>
        </div>
        <span className=" sm:hidden w-12"><Bar /></span>
        <div className="flex sm:flex">
          <div className="flex items-center gap-8 mr-8">
            <Link href=''>NEWS</Link>
            <Link href=''>buy ads</Link>
            <Link href='/contact'>Contact</Link>
          </div>
          <div className="flex items-center gap-8">
            {isLogin
              ?
              <div className="flex gap-6">
                <span><AlertIcon /></span>
                <Link href='/dashboard'><UserIcon /></Link>
              </div>
              :
              <div>
                <Link href="/signin" className="px-4 py-3 rounded-lg mr-3 bg-greenC-light">Sign in</Link>
                <Link href="/register" className="px-4 rounded-lg py-3 bg-primary">Register</Link>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
