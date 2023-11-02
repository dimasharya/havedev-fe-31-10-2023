"use client";

import { ButtonExport } from "../component/ButtonExport";
import { ArrowLongRightIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";

export default function LaporanPenjualan() {
  return (
    <>
      <section className="p-8 rounded-md bg-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-black text-md">Laporan Penjualan</h2>
          <div className="inline-flex space-x-2 items-end">
            <div className="">
              <span className="text-black text-xs">Tanggal</span>
              <button className="flex space-x-2 border border-gray-400 rounded-md p-2 text-xs items-center text-gray-400 hover:text-gray-800 duration-150">
                <span>Tanggal Mulai</span>
                <ArrowLongRightIcon className="w-4 h-4" />
                <span>Tanggal Selesai</span>
                <CalendarDaysIcon className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1">
              <ButtonExport>Export</ButtonExport>
            </div>
          </div>
        </div>
        <div>
            <table>
                <thead className="bg-gray-600 text-white text-sm p-2">
                    <tr className="p-2">
                        <td>ANJING</td>
                        <td>ANJING</td>
                        <td>ANJING</td>
                    </tr>
                </thead>
            </table>
        </div>
      </section>
    </>
  );
}
