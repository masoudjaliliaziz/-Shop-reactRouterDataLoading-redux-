import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

type Props = {};

export default function AppLayout({}: Props) {
  return (
    <div className="bg-slate-100 w-full h-dvh px-6 py-1 flex flex-col  items-center">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
