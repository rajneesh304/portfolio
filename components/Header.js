import Image from "next/image";
import Link from "next/link";

// components
import Socials from '../components/Socials'

const Header = () => {
  return <header
    className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] "
  >
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8 ">
        {/* logo */}
        <Link href={''}>
          <div className="text-3xl">
            <strong>rajneesh</strong>singhatiya<span className="text-red-600">.</span>
          </div>
        </Link>
        {/* social */}
        <Socials />
      </div>
    </div>
  </header>;
};

export default Header;
