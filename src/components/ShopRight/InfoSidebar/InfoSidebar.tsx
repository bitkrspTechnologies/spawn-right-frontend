// "use client";

// import React from "react";
// import Link from "next/link";
// import { XMarkIcon } from "@heroicons/react/24/outline";
// import classNames from "classnames";
// import Button from "@/components/Button/Button";
// import { useRouter } from "next/navigation";

// interface InfoSidebarProps {
//   visible: boolean;
//   onClose: () => void;
// }

// const InfoSidebar: React.FC<InfoSidebarProps> = ({ visible, onClose }) => {
//   const router = useRouter(); // ✅ Add this here

//   const navLinks = [
//     {
//       title: "About",
//       href: "/about",
//     },
//     {
//       title: "Spawn Right",
//       href: "/",
//     },
//     // Add more links as needed
//   ];

//   const gridIcon = (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="w-5 h-5 text-white"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect x="3" y="3" width="7" height="7" rx="1" />
//       <rect x="14" y="3" width="7" height="7" rx="1" />
//       <rect x="14" y="14" width="7" height="7" rx="1" />
//       <rect x="3" y="14" width="7" height="7" rx="1" />
//     </svg>
//   );

//   return (
//     <>
//       {/* Backdrop */}
//       <div
//         className={classNames(
//           "fixed inset-0  bg-opacity-50 z-40 transition-opacity duration-300",
//           { hidden: !visible }
//         )}
//         onClick={onClose}
//       ></div>

//       {/* Sidebar */}
//       <div
//         className={classNames(
//           "fixed top-0 right-0 h-(700px) w-72 max-w-full",
//           "bg-gradient-to-b from-[#0e0e0e] to-[#1a1a1a]",
//           "z-50 shadow-2xl rounded-l-3xl p-6",
//           "transition-transform duration-300 ease-in-out flex flex-col",
//           {
//             "translate-x-0": visible,
//             "translate-x-full": !visible,
//           }
//         )}
//       >
//         {/* Header */}
//         <div className="flex justify-between items-center m-7 mb-6">
//           <h2 className="text-pink-500 font-bold text-xl">GAME ON !!!!!!</h2>
//           <button onClick={onClose}>
//             <XMarkIcon className="h-6 w-6 text-white" />
//           </button>
//         </div>
//         {/* Navigation Links */}
//         <div className="flex flex-col mt-4 gap-4">
//           {navLinks.map((link, index) => (
//             <Link
//               key={index}
//               href={link.href}
//               onClick={onClose}
//               className="w-full bg-[#2c2c2e] rounded-xl py-3 px-4 text-white flex items-center gap-3 hover:bg-[#3a3a3c] transition-colors"
//             >
//               {gridIcon}
//               <span>{link.title}</span>
//             </Link>
//           ))}
//         </div>

//         {/* Footer Promo */}
//         <div className="mt-auto pt-10">
//           <div className="bg-[#141414] rounded-2xl p-4 text-center text-white shadow-md">
//             <h3 className="font-bold text-lg mb-2">LEVEL UP</h3>
//             <p className="text-sm mb-3">GEAR COMPARISON FOR YOUR GAME PICKS</p>
//             <div className="flex justify-center">
//               <Button
//                 text="Spawn Right"
//                 onClick={() => {
//                   onClose();
//                   router.push("/");
//                 }}
//                 className="mt-2"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default InfoSidebar;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

interface InfoSidebarProps {
  visible: boolean;
  onClose: () => void;
}

const InfoSidebar: React.FC<InfoSidebarProps> = ({ visible, onClose }) => {
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setDropdownOpen((prev) => (prev === index ? null : index));
  };

  console.log(dropdownOpen);

  const navLinks = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Spawn Right",
      href: "/",
    },
    // Add more links as needed
  ];

  const gridIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-white"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  );

  return (
    <>
      <div
        className={classNames(
          "fixed inset-0 bg-opacity-50 z-40 transition-opacity duration-300",
          {
            hidden: !visible,
          }
        )}
        onClick={onClose}
      ></div>

      <div
        className={classNames(
          "fixed top-0 right-0 h-(500px) w-72 max-w-full mt-10",
          "bg-gradient-to-b from-[#0e0e0e] to-[#1a1a1a]",
          "z-50 shadow-2xl rounded-l-3xl p-6",
          "transition-transform duration-300 ease-in-out flex flex-col",
          {
            "translate-x-0": visible,
            "translate-x-full": !visible,
          }
        )}
      >
        <div className="flex justify-between gap-1 items-center mx-5 mt-5">
          <h2 className="text-pink-500 font-bold text-xl">SHOP NOW !!!!!!</h2>
          <button onClick={onClose}>
            <XMarkIcon className="h-6 w-6 text-white" />
          </button>
        </div>

        <div className="flex flex-col h-36 mt-10 gap-4">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <button
                className="w-full rounded-xl py-3 px-4 text-white flex justify-between items-center
          bg-gradient-to-r from-[#1a1a1a] via-[#2c1a33] to-[#3c1a4a]
          hover:from-[#2c1a33] hover:via-[#3c1a4a] hover:to-[#4c1a5a]
          transition-all duration-300
          border border-[#3c1a4a] shadow-lg"
                onClick={() => toggleDropdown(index)}
              >
                <div className="flex items-center gap-3">
                  {gridIcon}
                  <span>{link.title}</span>
                </div>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfoSidebar;
