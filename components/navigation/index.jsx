"use client";

import { usePathname } from "next/navigation";
import { Explore, Home, Matches, Profile, Recs } from "@/utils/iconify";
import Link from "next/link";
import "./navigation.css";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className={pathname === "/" ? "navigation black-nav" : "navigation"}>
      <Link href="/" className={pathname === "/" ? "selected-nav" : ""}>
        <Recs />
      </Link>
      <Link href="explore" className={pathname === "/explore" ? "selected-nav" : ""}>
        <Explore />
      </Link>
      <Link href="gold-home" className={pathname === "/gold-home" ? "selected-nav" : ""}>
        <Home />
      </Link>
      <Link href="matches" className={pathname === "/matches" ? "selected-nav" : ""}>
        <Matches />
      </Link>
      <Link href="profile" className={pathname === "/profile" ? "selected-nav" : ""}>
        <Profile />
      </Link>
    </div>
  );
}
