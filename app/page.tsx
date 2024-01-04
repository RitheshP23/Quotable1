"use client";
import CalendarComponent from "@/components/main/CalendarComponent";
import SelectCategory from "@/components/main/SelectCategory";
import { APIResponse } from "@/constants";
import Header from "../components/main/Header";
import React from "react";
import { DashboardHeader } from "../components/main/h2";
import Container from "../components/main/body"

export default function Home() {
  return (
    <div className="h-full w-full p-18  bg-gradient-to-r.
     ">
      <Header />
  <Container/>  
      {/* <CalendarComponent /> */}

      {/* <SelectCategory setInputVal={setInputVal} />   */}
      {/* 
      <div>
        {quotes?.map((quote: APIResponse) => (  
          <div key={quote.quote}>
            <h1>{quote.quote}</h1>
            <h1>{quote.author}</h1>
          </div>
        ))}
      </div> */}
    </div>
  );
}
