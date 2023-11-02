"use client";
import React, { FC, ReactNode } from "react";
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";

interface ButtonProps {
  children?: React.ReactNode;
  // height: string;
  // onClick: () => void;
  // radius: string
  // width: string;
}

export const ButtonExport: FC<ButtonProps> = ({children}) => {
  return (
    <button className="flex bg-blue-900 hover:bg-blue-600 duration-150 px-2 py-1 text-xs rounded-md items-center">
      <span>
        <ArrowUpOnSquareIcon className="py-0.5 pr-1 h-6 text-white" />
      </span>
      {children}
    </button>
  );
};
