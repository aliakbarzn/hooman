"use client";
import Footer from "@/sections/footer/Footer";
import Menu from "@/sections/home/header/menu";
import { usePathname } from "next/navigation";
import React from "react";
import { Provider } from "react-redux";
import {store} from '@/store/index'
export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname().split("/");
  const isAuthPage = ["signin", "register"].includes(path[2]);

  return isAuthPage ? (
    children
  ) : (
    <>
      <Provider store={store}>
        <Menu />
        {children}
        <Footer />
      </Provider>
    </>
  );
}
