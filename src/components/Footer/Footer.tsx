"use client";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaDiscord,
} from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Left Section */}
        <div className="flex flex-col items-start">
          <img
            src="/images/Logos-03.svg"
            alt="Spawn Right Logo"
            className="w-40 mb-4"
          />
          <div className="flex space-x-4 mb-4">
            <FooterIcon Icon={FaLinkedin} />
            <FooterIcon Icon={FaInstagram} />
            <FooterIcon Icon={FaFacebookF} />
            <FooterIcon Icon={FaXTwitter} />
            <FooterIcon Icon={FaDiscord} />
          </div>
          <p className="text-xs max-w-sm text-gray-400">
            Spawn Right is not affiliated with any third-party game, or gaming
            company. All trademarks displayed on the site are owned by
            third-parties and are used on Spawn Right for informational purposes
            only.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-4 text-right">
          <Link href="#" className="font-bold">
            About Us
          </Link>
          <Link href="#" className="font-bold">
            Careers
          </Link>
          <Link href="#" className="font-bold">
            Advertise
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 flex justify-between text-sm border-t border-white/10 pt-6 text-gray-400">
        <p>© {new Date().getFullYear()} Spawn Right</p>
        <div className="flex space-x-6">
          <Link href="#" className="font-bold text-white">
            Term of Use
          </Link>
          <Link href="#" className="font-bold text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({ Icon }: { Icon: React.ElementType }) {
  return (
    <div className="p-2 border border-white rounded-full hover:bg-white/10 transition">
      <Icon className="w-4 h-4" />
    </div>
  );
}
