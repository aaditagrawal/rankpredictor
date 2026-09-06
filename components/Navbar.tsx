import { classNames } from "@/app/ui.stylex";
import Link from "next/link";
import Image from "next/image";

interface NavLinkProps {
  href: string;
  label: string;
  isExternal?: boolean;
}

const NavLink = ({ href, label, isExternal }: NavLinkProps) => {
  const className =
    classNames.Navbar68;

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
};

const NavBar = () => {
  return (
    <div>
      <header className={classNames.Navbar69}>
        <Image
          src="/logo.png"
          alt="RankPredictor Logo"
          width={80}
          height={80}
          className={classNames.Navbar70}
        />
        <h1 className={classNames.Navbar71}>
          Rank Predictor
        </h1>
      </header>
      <div className={classNames.Navbar72}>
        By{" "}
        <a
          href="https://github.com/druwn"
          target="_blank"
          className={classNames.home35}
        >
          druwn
        </a>{" "}
        and
        <a
          href="https://github.com/PixelHalide"
          target="_blank"
          className={classNames.home35}
        >
          {" "}
          Pixel
        </a>
      </div>

      <hr className={classNames.Navbar73} />
      <nav className={classNames.Navbar74}>
        <NavLink href="/" label="Home" />
        <NavLink href="/met2026" label="MET 2026 Rank" />
        <NavLink href="/gpaCalc" label="MIT GPA Calculator" />
        <NavLink
          href="https://manipal-guessr.vercel.app/"
          label="ManipalGuessr"
          isExternal
        />
        <NavLink
        href="https://cd.coolstuff.work"
        label="MIT Directory"
        isExternal
      />
      </nav>
      <hr className={classNames.Navbar73} />
    </div>
  );
};

export default NavBar;
