import { hoverSound } from "@/utils/Sounds";
import Link from "next/link";

export default function Button({
  href,
  type = "primary",
  children,
}: {
  href: string;
  type: "primary" | "secondary" | "light";
  children: React.ReactNode;
}) {
  const primaryStyle = `uppercase text-sm xs:text-lg gold-linear px-8 py-2.5 rounded-full font-bold transall text-light-0 shrink-0`;
  const secondaryStyle = `uppercase text-sm xs:text-lg  px-8 py-2.5  font-bold transall text-light-0 neon-hover-lg `;
  const lightStyle = `uppercase text-sm xs:text-lg  px-8 py-2.5  font-bold transall text-dark-0 bg-light-0 rounded-full border border-light-0 hover:text-light-0 hover:bg-transparent`;
  return (
    <Link
      onMouseEnter={hoverSound}
      className={` ${
        type === "primary"
          ? primaryStyle
          : type === "secondary"
          ? secondaryStyle
          : lightStyle
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
