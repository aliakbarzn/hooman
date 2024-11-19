import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.svg";
import { AlertIcon, UserIcon } from "@/assets/icons";
import { Link } from "@/navigation";

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
          {/* <div>
            <UserIcon/>
          </div>
          <div>
            <AlertIcon/>
          </div> */}
          <div>
            <Link href="/signin">
              <button className="px-4 rounded-lg mr-3 py-2 bg-green">
                Sign in
              </button>
            </Link>
            <Link href="/register">
              <button className="px-4 rounded-lg py-2 bg-pink">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
