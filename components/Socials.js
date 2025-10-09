import Link from "next/link";
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";
import { RiBloggerLine } from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://github.com/rajneesh304"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/singhatiya-rajneesh/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://rajneesh304.github.io/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiBloggerLine />
      </Link>
    </div>
  );
};

export default Socials;
