import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import { CiStar } from "react-icons/ci";
import { PiTrash } from "react-icons/pi";
import { IoMdArchive } from "react-icons/io";

import "./css/sidebar.css";
// import logo from "/images/secure-notes.png";

const Sidebar = () => {
  return (
    <main className="sidebar-wrapper dark:bg-bgDark bg-bgLight w-[30rem] h-[100vh] py-[3rem]">
      {/* Sider bar header start */}
      <header className="px-[2rem]">
        <div className="flex justify-between items-center">
          {/* <Image
            width={100}
            height={0}
            src={"/images/secure-notes.png"}
            alt="Secure Note"
          /> */}
          <h1>Secure-Notes</h1>
          <FaMagnifyingGlass fontSize={20} />
        </div>
        <button className="mt-[3rem] flex items-center justify-center gap-[.8rem] semibold-font addNote-btn rounded-md">
          <IoMdAdd fontSize={20} />
          <span>New Note</span>
        </button>
      </header>
      {/* Sider bar header end */}
      {/* Notes Folders Start */}
      <section>
        <h6>Recents</h6>
        <ul>
          <li className="flex gap-[1.5rem] items-center semibold-font">
            <GrNotes fontSize={20} />
            <span>Reflection on the Month of June</span>
          </li>
          <li className="flex gap-[1.5rem] items-center semibold-font">
            <GrNotes fontSize={20} />
            <span>Project proposal</span>
          </li>
          <li className="flex gap-[1.5rem] items-center semibold-font">
            <GrNotes fontSize={20} />
            <span>Travel itinerary</span>
          </li>
        </ul>
      </section>
      <section>
        <h6>Folders</h6>
        <ul>
          <li className="flex gap-[1.5rem] items-center semibold-font">
            <Image
              width={20}
              height={20}
              src={"/icons/folderOpen.svg"}
              alt={"Open"}
            />
            <span>Personal</span>
          </li>
          <li className="flex gap-[1.5rem] items-center semibold-font">
            <Image
              width={20}
              height={20}
              src={"/icons/folderClose.svg"}
              alt={"Open"}
            />
            <span>Personal</span>
          </li>
          <li className="flex gap-[1.5rem] items-center semibold-font">
            <Image
              width={20}
              height={20}
              src={"/icons/folderClose.svg"}
              alt={"Open"}
            />
            <span>Personal</span>
          </li>
          <p className="text-center px-[2rem] semibold-font underline cursor-pointer">
            Show more
          </p>
        </ul>
      </section>
      {/* Notes Folders End */}
      {/* Actions Start */}

      <section>
        <h6>Actions</h6>
        <ul>
          <li className="flex gap-[1.5rem] items-center semibold-font">
            <CiStar fontSize={20} />
            <span>Favorites</span>
          </li>
          <li className="flex gap-[1.5rem] items-center semibold-font">
            <PiTrash fontSize={20} />
            <span>Trash</span>
          </li>
          <li className="flex gap-[1.5rem] items-center semibold-font">
            <IoMdArchive fontSize={20} />
            <span>Archived Notes</span>
          </li>
        </ul>
      </section>
      {/* Actions end */}
    </main>
  );
};

export default Sidebar;
