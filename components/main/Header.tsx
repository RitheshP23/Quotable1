"use state";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../ui/NavBar";
import { ModeToggle } from "../ui/darkmode";

import SelectCategory from "./SelectCategory";
import React from "react";
import { APIResponse } from "@/constants";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar"
import { Button } from "react-day-picker";
import { parseISO, format } from 'date-fns';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Header() {
  // const navLinks = document.querySelector('.nav-links')
  // function onToggleMenu(e){
  //     e.name = e.name === 'menu' ? 'close' : 'menu'
  //     navLinks.classList.toggle('top-[9%]')
  // }
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  
  const [isClick, setisClick] = useState(false);
  const [quotes, setQuotes] = React.useState<APIResponse[]>([]);
  const [inputVal, setInputVal] = React.useState<string>("");
  const toggleNavBar = () => {
    setisClick(!isClick);
  };
  const getData = async (categoryName: string) => {
    const res = await fetch(
      `https://api.api-ninjas.com/v1/quotes?category=${categoryName}`,
      {
        headers: {
          "X-Api-Key": "E5zm0CuywI+fySCHTRHLlA==9Wy9u9xRcdCBZMUM",
        },
      }
    );
    const data = await res.json();

    setQuotes(data);
  };

  React.useEffect(() => {
    getData(inputVal);
  }, [inputVal]);

  return (
    <div className="dark:text-white  justify-center    z-100 text-black bg-gradient-to-r  dark:from-black dark:to-blue-900 from-blue-500 to-cyan-500 ">
      <nav className="border-b-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center ">
              <div className="flex-shrink-0 text-5xl ">
                <a href="/" className="text-white ">
                  Quotify
                </a>
              </div>
            </div>
            <div className=" md:block hidden text-xl  ">
              <div className="ml-4 flex items-center space-l-3">
    <div></div>
    <AlertDialog>
  <AlertDialogTrigger> <a
                  className="  hover:bg-white hover:text-black px-2 rounded-lg text-white p-2"
                >
                 Get Better Experience?
                </a></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Register With Quotify.</AlertDialogTitle>
      <AlertDialogDescription>
        With This You Are Going To Register With Quotify By which You can customize the daily Quote and Upload Too.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction> <a
                  href="/sign-up"
                  
                  >Continue
                </a></AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

                
<div className="p-5"></div>

 
                <a
                  href="/sign-out"
                  className="  hover:bg-white hover:text-black px-2 rounded-lg text-white p-2  "
                  >Already have a Account?
                </a>


<div className="p-5"></div>

                                
              <ModeToggle/>
<div className="p-5"></div>
      <div className="text-x text-white ">4/1/2024</div>
              </div>
            </div>
            <div className="md:hidden  flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white  "
                onClick={toggleNavBar}
              >
                {isClick ? (
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 -0.5 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"
                        fill="#ffffff"
                      />{" "}
                    </g>
                  </svg>
                ) : (
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M4 18L20 18"
                        stroke="#ffffff"
                        stroke-width="2"
                        stroke-linecap="round"
                      />{" "}
                      <path
                        d="M4 12L20 12"
                        stroke="#ffffff"
                        stroke-width="2"
                        stroke-linecap="round"
                      />{" "}
                      <path
                        d="M4 6L20 6"
                        stroke="#ffffff"
                        stroke-width="2"
                        stroke-linecap="round"
                      />{" "}
                    </g>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-black flex-col">
            <AlertDialog>
  <AlertDialogTrigger> <a
                  className="  hover:bg-white hover:text-black px-2 rounded-lg text-white p-2"
                >
                 Wana upload Quote?
                </a></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Register With Quotify.</AlertDialogTitle>
      <AlertDialogDescription>
        With This You Are Going To Register With Quotify By which You can customize the daily Quote and Upload Too.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction> <a
                  href="/sign-up"
                  
                  >Continue
                </a></AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
<div className="pt-4">
<a
                  href="/sign-out"
                  className="  hover:bg-white hover:text-black px-2 rounded-lg text-white p-2  "
                  >Already have a Account?
                </a>
</div>
<div className="pt-4">
              <ModeToggle/>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
