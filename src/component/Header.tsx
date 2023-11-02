"use client";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center p-6 lg:px-8 justify-between">
          <div id="logo" />
          <div className="text-black space-x-4">
            <Link href="#">Dashboard</Link>
            <Link href="#">Master</Link>
            <Link href="#">Pembelian</Link>
            <Link href="#">Konsinyasi</Link>
            <Link href="#">Laporan</Link>
            <Link href="#">Informasi</Link>
          </div>
        </nav>
      </header>
  );
}