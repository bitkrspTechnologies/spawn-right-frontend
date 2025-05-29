"use client";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaDiscord,
} from "react-icons/fa6";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

export default function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  if (isMobile) {
    return (
      <footer className="bg-black px-6 py-8 text-white space-y-8">
        {/* logo */}
        <img src="/images/Logos-03.svg" alt="Spawn Right" className="w-[70%]" />

        {/* social icons */}
        <div className="flex justify-between gap-4">
          <FooterIcon
            Icon={FaLinkedin}
            href="https://www.linkedin.com/company/spawnright/?originalSubdomain=in"
          />
          <FooterIcon
            Icon={FaInstagram}
            href="https://www.instagram.com/spawnright.gg?igsh=MWR2MWxmenp5cWczZA%3D%3D"
          />
          <FooterIcon Icon={FaFacebookF} href="" />
          <FooterIcon Icon={FaXTwitter} href="" />
          <FooterIcon
            Icon={FaDiscord}
            href="https://discord.com/invite/E2nX9A22VN"
          />
        </div>

        {/* nav links stacked */}
        <div className=" flex justify-between items-center gap-4 font-bold">
          <Link href="/advertise">Advertise</Link>
          <Link href="/about">About Us</Link>
          <Link href="/careers">Careers</Link>
        </div>

        {/* legal row */}
        <div className="text-xs text-gray-400 space-y-4 mb-8">
          <div className="flex flex-col items-center gap-2">
            <p>© {new Date().getFullYear()} Spawn Right</p>
            <a
              href="https://www.tecnomi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 text-xs hover:text-yellow-400"
            >
              Designed & Developed by Tecnomi
            </a>
            <div className="flex gap-4 font-bold text-white">
              <Link href="/terms-of-use">Terms of Use</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }

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
            <FooterIcon
              Icon={FaFacebookF}
              href="https://linkedin.com/company/spawnright"
            />
            <FooterIcon
              Icon={FaXTwitter}
              href="https://linkedin.com/company/spawnright"
            />
            <FooterIcon
              Icon={FaDiscord}
              href="https://linkedin.com/company/spawnright"
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

      <div className="max-w-7xl mx-auto mt-10 flex justify-between text-sm border-t border-white/10 pt-6 text-gray-400">
        <p>
          © {new Date().getFullYear()} Spawn Right |{" "}
          <a
            href="https://www.tecnomi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 text-sm hover:text-yellow-400"
          >
            Designed & Developed by Tecnomi
          </a>
        </p>
        <div className="flex space-x-6">
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
