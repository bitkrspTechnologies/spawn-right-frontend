"use client";

import React from "react";
import TermsAndConditions from "@/components/TermsOfUse/TermsOfUse";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function TermsOfUse() {
  return (
    // <div className="flex flex-col min-h-screen">
    //   <Navbar />
    //   <div className="flex-1 overflow-y-auto">
    //     <TermsAndConditions />
    //   </div>
    //   <Footer />
    // </div>
    <>
      <Navbar />
      <div className="relative h-screen w-screen overflow-hidden">
        <div className="h-full w-full pt-10 overflow-y-auto scrollbar-hide">
          <TermsAndConditions />
          <div className="w-screen relative z-40 left-1/2 right-1/2 -mx-[50vw]">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
