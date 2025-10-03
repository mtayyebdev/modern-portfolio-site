import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import Button from "../ui/Button";
import { FaBars } from "react-icons/fa";

function Header() {
  const [dropdown, setdropdown] = useState(false)
  return (
    <>
      <div className="header sticky z-20 top-0 flex items-center justify-between px-5 h-[60px] bg-primary text-white">
        <div className="logo text-xl font-bold">Portfolio</div>
        <nav className={`bg-primary transition-all border-t border-gray-600 md:border-0 ${dropdown?"translate-y-0":"-translate-y-[200%] md:translate-0"} absolute top-15 left-0 w-full md:static md:w-auto md:bg-transparent py-4 md:py-0`}>
          <ul className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-2">
            <li>
              <a className="px-2 py-1" href={"#"}>
                Home
              </a>
            </li>
            <li>
              <a className="px-2 py-1" href={"#about"}>
                About
              </a>
            </li>
            <li>
              <a className="px-2 py-1" href={"#projects"}>
                Projects
              </a>
            </li>
            <li>
              <a className="px-2 py-1" href={"#skills"}>
                Skills
              </a>
            </li>
            <li>
              <a className="px-2 py-1" href={"#education"}>
                Education
              </a>
            </li>
            <li>
              <a className="px-2 py-1" href={"#contact"}>
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            size="sm"
            variant="primary"
            text="Download CV"
            rounded={true}
          />
          <FaBars className="p-1 md:hidden cursor-pointer" size={27} onClick={()=>setdropdown(!dropdown)}/>
        </div>
      </div>
    </>
  );
}

export default Header;
