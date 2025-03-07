"use client";
import logo from "@/assets/jodi logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IoMdClose } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import facebook from "@/assets/facebook.png";
import instagram from "@/assets/instagram.png";
import twitter from "@/assets/twitter.png";
import linkedin from "@/assets/linkedin.png";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Process", href: "/process" },
  { title: "Projects", href: "/projects" },
  { title: "Showroom", href: "/showroom" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setOpen((prev) => !prev);

  const sidebarVariants = {
    initial: { x: "-100%" }, // start off-screen to the right
    animate: { x: "0%", transition: { type: "tween", duration: 0.3 } },
    exit: { x: "-100%", transition: { type: "tween", duration: 0.3 } },
  };

  return (
    <header>
      <nav className="flex justify-between items-center pl-4 pr-3 lg:pl-[92px] lg:pr-[69px]  lg:pt-[50px] shadow-xl lg:shadow-none pb-3 lg:pb-0">
        <Image
          src={logo}
          width={100}
          height={100}
          alt="Jodi Logo Image"
          className="w-10 h-10 lg:w-[102px] lg:h-[104px] object-contain hidden lg:block"
        />

        <div className="flex flex-col items-center lg:hidden pt-5">
          <h1 className="font-anton text-[24px] tracking-widest uppercase">
            Jodi Swaby
          </h1>
          <h3 className="font-abel text-[16px] tracking-widest uppercase">
            UX designer{" "}
          </h3>
        </div>

        {/* Desktop navigation */}
        <div className="lg:flex hidden items-center gap-[20px]">
          {navLinks.map((link, index) => (
            <Link href={link.href} key={index}>
              <button
                className={`w-[126px] h-[60px] rounded-[40px] border border-primary ${
                  pathname === link.href ? "bg-primary" : "bg-transparent"
                } text-[20px] font-abel`}
              >
                {link.title}
              </button>
            </Link>
          ))}
        </div>

        {/* Hamburger icon for mobile */}
        <div
          className="cursor-pointer lg:hidden text-4xl p-3"
          onClick={toggleMenu}
        >
          <HiMenu />
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"
              onClick={toggleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.3 } }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
            />
            {/* Sidebar */}
            <motion.div
              variants={sidebarVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-0 top-0 h-screen w-[70%] bg-white text-black p-7 z-20 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <Image
                    src={logo}
                    width={100}
                    height={100}
                    alt="Jodi Logo Image"
                    className="w-16 h-16 object-contain"
                  />
                  <div className="cursor-pointer text-4xl" onClick={toggleMenu}>
                    <IoMdClose />
                  </div>
                </div>
                <div className="flex flex-col gap-7">
                  {navLinks.map((link, index) => (
                    <MobileNavLink
                      key={index}
                      title={link.title}
                      href={link.href}
                      setOpen={setOpen}
                    />
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="pb-4">
                <div className="flex gap-[15px] pt-[30px]">
                  <div className="bg-zinc-800 rounded-full p-2">
                    <Image
                      src={facebook}
                      width={200}
                      height={200}
                      alt="Facebook"
                      className="w-[20px] h-[20px] object-contain"
                    />
                  </div>
                  <div className="bg-zinc-800 rounded-full p-2">
                    <Image
                      src={twitter}
                      width={200}
                      height={200}
                      alt="Twitter"
                      className="w-[20px] h-[20px] object-contain"
                    />
                  </div>
                  <div className="bg-zinc-800 rounded-full p-2">
                    <Image
                      src={instagram}
                      width={200}
                      height={200}
                      alt="Instagram"
                      className="w-[20px] h-[20px] object-contain"
                    />
                  </div>
                  <div className="bg-zinc-800 rounded-full p-2">
                    <Image
                      src={linkedin}
                      width={200}
                      height={200}
                      alt="Linkedin"
                      className="w-[20px] h-[20px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

const MobileNavLink = ({
  title,
  href,
  setOpen,
}: {
  title: string;
  href: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const closeNav = () => setOpen(false);
  const pathname = usePathname();
  return (
    <div
      className={`text-2xl uppercase font-abel ${
        pathname === href
          ? "underline underline-offset-4 text-secondary"
          : "underline-transparent text-black"
      }`}
    >
      <Link href={href} onClick={closeNav} className="relative group">
        {title}
      </Link>
    </div>
  );
};
