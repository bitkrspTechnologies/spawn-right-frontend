"use client";
import {
  FaLinkedin,
  FaInstagram,
  // FaFacebookF,
  // FaXTwitter,
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
            <FooterIcon
              Icon={FaLinkedin}
              href="https://www.linkedin.com/company/spawnright/?originalSubdomain=in"
            />
            <FooterIcon
              Icon={FaInstagram}
              href="https://www.instagram.com/spawnright.gg?igsh=MWR2MWxmenp5cWczZA%3D%3D"
            />
            {/* <FooterIcon Icon={FaFacebookF} href="/" />
            <FooterIcon Icon={FaXTwitter} href="/" /> */}
            <FooterIcon
              Icon={FaDiscord}
              href="https://discord.com/invite/E2nX9A22VN"
            />
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
          <Link href="/about" className="font-bold">
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

      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between text-sm border-t border-white/10 pt-6 text-gray-400">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <p>
            © {new Date().getFullYear()} Spawn Right |{" "}
            <a
              href="https://www.tecnomi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm"
            >
              Designed & Developed by Tecnomi
            </a>
          </p>
          <p className="text-sm">
            As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/terms-of-use" className="font-bold text-white">
            Terms of Use
          </Link>
          <Link href="/privacy-policy" className="font-bold text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({ Icon, href }: { Icon: React.ElementType; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 border border-white rounded-full hover:bg-white/10 transition cursor-pointer"
    >
      <Icon className="w-8 h-4" />
    </a>
  );
}
