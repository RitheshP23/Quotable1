import React from "react"
import Image from "next/image"
import { Inter } from 'next/font/google'


export default function Container() {

  return (
    <div className="h-full md:m-32 ms:m-24 md:p-10 pt-14 ms:pl-14 p-5  flex items-center justify-between text-white">
      <div className=" p-20 m-0 text-black bg-white rounded-xl w-65 min-[320px]:p-5  h-45">
        <div className="flex-1 max-w-full grid auto-cols-fr md:gap-y-12 ms:gap-y-6 gap-y-3  content-center justify-center justify-items-start items-start m-9">
          <div className="md:text-7xl sm:text-4xl text-2xl" >
            Time Is Money.
          </div>
          <div className="md:text-4xl text-xl"> ~ Benjamin Franklin.</div>
          

        </div>
      </div>
      <div className="border-l-gray-300">
        <div className="text-2xl">Intresting Facts</div>
        <div className="">

        </div>
      </div>
    </div>
  )
}