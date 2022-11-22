import Logo from "../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import {BiCoffeeTogo} from "react-icons/bi";


export default function Header() {
  return (
    <header className="w-full h-24 top-0 sticky flex items-center justify-around border-b border-gray-200 bg-white">
      <Link href="/">
        <Image src={Logo} alt="logo" className="h-20 w-40" />
      </Link>
      <nav className="flex flex-row gap-10">
        <ul className="flex items-center gap-10">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <Link href="coffee" className="flex items-center gap-1 px-4 py-2 rounded bg-red-400 text-white">
        By me a coffe <BiCoffeeTogo className="text-2xl" /></Link>
      </nav>
    </header>
  );
}
