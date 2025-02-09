"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "About", href: "/about" },
  {
    name: "Recipes",
    href: "/recipes",
  },
  { name: "Recipe Wheel", href: "/recipe-wheel" },
];

export default function NavLinks() {
  const pathName = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4",
              {
                "text-white": pathName === link.href,
              }
            )}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
