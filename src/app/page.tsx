"use client";
import Link from "next/link";
import { Header } from "../component/Header";
import { ButtonExport } from "@/component/ButtonExport";

export default function Home() {
  
  return (
    <>
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
      <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-gray-300">
        <div className="container">
          <div className="flex bg-white p-8 rounded-md">
            <div className="flex justify-between items-center">
              <h2 className="text-black text-md">Laporan Penjualan</h2>
              <div className="">
                <div className="">
                  <span className="text-black text-xs">Tanggal</span>
                  <div className="">
                  </div>
                </div>
                <ButtonExport>Kim</ButtonExport>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
