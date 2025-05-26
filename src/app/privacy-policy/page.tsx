"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PrivacyPolicyData from "@/components/PrivacyPolicyData/PrivacyPolicyData";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="relative h-screen w-screen overflow-hidden">
        <div className="h-full w-full pt-10 overflow-y-auto scrollbar-hide">
          <PrivacyPolicyData />
          <div className="w-screen relative z-40 left-1/2 right-1/2 -mx-[50vw]">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
