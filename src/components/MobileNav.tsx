import { back, logo } from "@/assets";
import { navBar } from "@/constants/statics";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function MobileNav({
  open,
  close,
}: {
  open: boolean;
  close: () => void;
}) {
  return (
    <>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => close()}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed right-0 top-0 xs:w-96 w-full h-screen bg-dark-0 transall "
            >
              <div className="flex flex-col justify-between">
                <ul className="flex flex-col justify-start items-center gap-12 font-semibold p-5 py-20 ">
                  <li className="w-24 md:order-3 neon-hover">
                    <Link href="/">
                      <Image alt="mmle" src={logo} />
                    </Link>
                  </li>
                  {navBar.map((nav) => (
                    <li
                      key={nav.id}
                      className={`neon-hover transall text-2xl bg-dark- py-3 px-16 `}
                    >
                      <Link href={nav.link}>{nav.title}</Link>
                    </li>
                  ))}
                  <li>
                    <button className="uppercase text-xl font-bold border border-light-0 rounded-full bg-light-0 text-dark-0 hover:text-light-0 hover:bg-transparent transall px-10 py-3 ">
                      Sign in
                    </button>
                  </li>
                </ul>
              </div>
              <motion.div
                className="absolute top-8 left-8 rotate-180"
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                exit={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => close()}
              >
                <Image
                  className=" w-8 transall opacity-80"
                  alt="back"
                  src={back}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
