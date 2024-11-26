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
  const { isLogin, setIsLogin } = useState(false);
  return (
    <div className="w-full flex justify-between justify-center items-center h-28 px-8 shadow">
      <div>
        <Link href={"/"}>
          <Image alt="logo" src={logo} width={150} height={160} />
        </Link>
      </div>
      <span className=" sm:hidden w-12">
        <Bar/>
      </span>
      <div className="flex hidden sm:flex sm:block ">
        <div className="flex items-center gap-8 mr-8">
          <div className="cursor-pointer">NEWS</div>
          <div className="cursor-pointer">buy ads</div>
          <Link href='/contact'>
          <div className="cursor-pointer">Contact</div>
          </Link>
        </div>
        <div>

        </div>
        <div className="flex items-center gap-8 cursor-pointer">
          {isLogin && (
            <>
              <div>
                <UserIcon />
              </div>
              <div>
                <AlertIcon />
              </div>
            </>
          )}
          <div>
            <Link href="/signin">
              <button className="px-4 rounded-lg mr-3 py-2 bg-greenC-light">
                Sign in
              </button>
            </Link>
            <Link href="/register">
              <button className="px-4 rounded-lg py-2 bg-primary">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
